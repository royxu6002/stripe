<template>
<div class="container">
    <div class="row mt-4">
       <table class="table table-striped">
           <thead>
               <tr>
                   <td>Item</td>
                   <td>Quantity</td>
                   <td>Price</td>
                   <td>Action</td>
               </tr>
           </thead>
           <tbody>
               <tr
                v-for="(item, index) in cart"
                :key="index"
               >
                   <td v-text="item.name"></td>
                   <td v-text="item.quantity"></td>
                   <td v-text="cartLineTotal(item)"></td>
                   <td>
                       <button @click="$store.commit('removeFromCart', index)">
                           Remove
                       </button>
                   </td>
               </tr>
               <tr>
                   <td>Total</td>
                   <td v-text="cartQuantity"></td>
                   <td v-text="cartTotal"></td>
                   <td></td>
               </tr>
           </tbody>
        </table> 
    </div>
    <div class="row mt-4">
       <div class="form-group col-lg-3">
            <label>First Name <span class="text-danger">*</span></label>
            <input 
                type="text" 
                class="form-control"
                id="first_name"
                name="first_name"
                v-model="customer.first_name"
                :disabled="paymentProcessing"
                placeholder="James">
        </div>
        <div class="form-group col-lg-3">
            <label for="last_name">Last name</label>
            <input 
                type="text"
                class="form-control"
                id="last_name"
                name="last_name"
                v-model="customer.last_name"
                :disabled="paymentProcessing"
                placeholder="Blunt">
        </div>
        <div class="form-group col-lg-3">
            <label for="email">Email</label>
            <input 
                type="email"
                class="form-control"
                id="email"
                name="email"
                v-model="customer.email"
                :disabled="paymentProcessing"
                placeholder="example@example.com">
            <span class="form-text text-muted">We'll never shall your details</span>
        </div>
        <div class="form-group col-lg-3">
            <label for="phone">Phone</label>
            <input 
                type="email"
                class="form-control"
                id="phone"
                name="phone"
                v-model="customer.phone"
                :disabled="paymentProcessing"
                placeholder="+8700998888">
            <span class="form-text text-muted">Mandatory for goods collection</span>
        </div>
        <div class="form-group col-lg-4">
            <label for="address">Address</label>
            <input type="text"
                class="form-control"
                id="address"
                name="address"
                v-model="customer.address"
                :disabled="paymentProcessing"
                placeholder="Room 43, Suit Job. Street 129">
        </div>
        <div class="form-group col-lg-4">
            <label for="address">City</label>
            <input type="text"
                class="form-control"
                id="city"
                name="city"
                v-model="customer.city"
                :disabled="paymentProcessing"
                placeholder="New York">
        </div>
        <div class="form-group col-lg-2">
            <label for="address">State</label>
            <input type="text"
                class="form-control"
                id="state"
                name="state"
                v-model="customer.state"
                :disabled="paymentProcessing"
                placeholder="California">
        </div>
        <div class="form-group col-lg-2">
            <label for="zip_code">Zip Code</label>
            <input type="text"
                class="form-control"
                id="zip_code"
                name="zip_code"
                v-model="customer.zip_code"
                :disabled="paymentProcessing"
                placeholder="786EJ">
        </div>
        <div class="form-group col-lg-2">
            <label for="country">Country</label>
            <input type="text"
                class="form-control"
                id="country"
                name="country"
                v-model="customer.country"
                :disabled="paymentProcessing"
                placeholder="USA">
        </div>
    </div>
    <div class="row mt-4">
        
        <div class="form-group col-12 payment_method">
            <div>
                <input type="radio" v-model="paymentMethod" value="paypal">
                <label for="paypal" class="payment_method_name">Paypal</label>
            </div>
            <div>
                <input type="radio" v-model="paymentMethod" value="stripe">
                <label for="stripe" class="payment_method_name">Stripe</label>
            </div>
            <div>
                <input type="radio" v-model="paymentMethod" value="bank">
                <label for="banktransfer" class="payment_method_name">Banktransfer</label>
            </div>
        </div>
        <div class="form-group col-12 tabpaymentcontent" :class="{active: paymentMethod=='paypal'}">
            <div id="paypal-element"></div>
            <!-- <button
                class="form-control button button-primary mx-auto text-large mt-3"
                @click="processPaypal"
                :disabled="paymentProcessing"
                v-text="paymentProcessing ? 'Processing': 'Pay Now'">
            </button> -->
        </div>
        <div class="form-group col-12 tabpaymentcontent" :class="{active: paymentMethod=='stripe'}">
            <div id="card-element" class="form-control"></div>
            <button
                class="form-control button button-primary mx-auto text-large mt-3"
                @click="processPayment"
                :disabled="paymentProcessing"
                v-text="paymentProcessing ? 'Processing': 'Pay Now'">
            </button>
        </div>
        <div class="form-group col-12 tabpaymentcontent" :class="{active: paymentMethod=='bank'}"> 
            <button
                class="form-control button button-primary mx-auto text-large mt-3"
                @click="processPayment"
                :disabled="paymentProcessing">
                Place the order
            </button>
        </div>
    </div>
    
</div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
import { loadScript } from "@paypal/paypal-js";

export default {
    data() {
        return {
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                country: '',
                state: '',
                zip_code: '',
            },
            paymentProcessing: false,
            stripe : {},
            cardElement: {},
            paymentMethod: '',
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        cartQuantity() {
            return this.$store.state.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
        cartTotal() {
            let amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            amount = (amount /100);
            return amount.toLocaleString('en-US', {
                style: "currency",
                currency: "USD",
            });
        }
    },
    async mounted() {
        // Stripe 付款;
        this.stripe = await loadStripe("pk_test_51IVTBVEYiecg7wKpgyt9EYmbg3wvSti26D7VGxVa5sqQtS6tGqFcCtk9I0fxBiL4YVcL6pNnF8aiinh1eQ6jWrId005nFg8Vz1");
        const elements = this.stripe.elements();
        this.cardElement = elements.create('card', {
            classes : {
                base: 'form-control'
            }
        });
        this.cardElement.mount('#card-element');

        // PayPal 付款;
        loadScript({
            'client-id': 'AXLPbFKK6Smq9e_Ad87nsfNerEc3-GCsQSczDUiSY0Qb7gCqMc2KRHg44o8EGU4EBi3f34GeE_2w8EQv'
        }).then((paypal) => {
                paypal.Buttons({
                    env: 'sandbox', /* sandbox | production */
                    style: {
                        layout: 'horizontal',   // horizontal | vertical 
                        size:   'responsive',   /* medium | large | responsive*/
                        shape:  'pill',         /* pill | rect*/
                        color:  'silver',         /* gold | blue | silver | black*/
                        fundingicons: false,    /* true | false */
                        tagline: false          /* true | false */
                    }, 
                    createOrder: function(data, actions) {
                        // This function sets up the details of the transaction, including the amount and line item details.
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: JSON.parse(window.localStorage.getItem('cle_takeout')).reduce((acc, item) => acc + (item.price * item.quantity)/100, 0),
                                }
                            }]
                        });
                    },
                    onApprove: function(data, actions) {
                        // Authorize the transaction
                        actions.order.authorize().then(function(authorization) {

                            // Get the authorization id
                            var authorizationID = authorization.purchase_units[0].payments.authorizations[0].id

                            // Call your server to validate and capture the transaction
                            return fetch('/paypal-transaction-complete', {
                                method: 'post',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                    orderID: data.orderID,
                                    authorizationID: authorizationID
                                })
                            });
                        })

                        // This function captures the funds from the transaction.
                        return actions.order.capture().then(function(details) {
                            // This function shows a transaction success message to your buyer.
                            alert('Transaction completed by ' + details.payer.name.given_name);
                        });
                    }
                }).render('#paypal-element');
        }).catch((err)=> {
            console.error('failed to load the PayPal JS SDK script', err);
        })
    },
    methods: {
        cartLineTotal(item) {
            let amount =  item.price * item.quantity;
            amount =  (amount /100);
            return amount.toLocaleString('en-US',{
                style: 'currency',
                currency: 'USD',
            });
        },
        async processPayment() {
            this.paymentProcessing = true;

            const {paymentMethod, error} = await this.stripe.createPaymentMethod('card', this.cardElement, {
                billing_details : {
                    name: this.customer.first_name +  ' ' + this.customer.last_name,
                    email: this.customer.email,
                    address: {
                        line1: this.customer.address,
                        city: this.customer.city,
                        state: this.customer.state,
                        postal_code: this.customer.zip_code,
                        country: this.customer.country
                    },
                    phone: this.customer.phone
                }
            });

            if (error) {
                this.paymentProcessing = false;
                console.error(error);
            } else {

                this.customer.payment_method_id = paymentMethod.id;

                this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

                this.customer.cart = JSON.stringify(this.$store.state.cart);

                axios.post('/api/purchase', this.customer)
                    .then((response) => {
                        this.paymentProcessing = false;

                        this.$store.commit('updateOrder', response.data);
                        this.$store.dispatch('clearCart');

                        this.$router.push({name: 'order.summary'});
                    })
                    .catch((error) => {
                        this.paymentProcessing = false;
                        console.error(error);
                    })
            }

        }
    }
}
</script>
<style scoped>
.payment_method {
    display: flex;
    justify-content: space-around;
}
.payment_method_name {
    margin-right: 20px;
}
.tabpaymentcontent {
    display: none;
    
}
.active {
        display: block;
    }
</style>
