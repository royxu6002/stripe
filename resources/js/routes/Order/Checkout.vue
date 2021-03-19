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
       <div class="form-group col-lg-4">
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
        <div class="form-group col-lg-4">
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
        <div class="form-group col-lg-4">
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
    </div>
    <div class="row mt-4">
        <div class="form-group col-12">
            <label for="card-element">Credit Card Info</label>
            <div id="card-element" class="form-control"></div>
            <button
                class="form-control button button-primary mx-auto text-large mt-3"
                @click="processPayment"
                :disabled="paymentProcessing"
                v-text="paymentProcessing ? 'Processing': 'Pay Now'">
            </button>
        </div>
    </div>
</div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
    data() {
        return {
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                address: '',
                city: '',
                state: '',
                zip_code: ''
            },
            paymentProcessing: false,
            stripe : {},
            cardElement: {}
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
        this.stripe = await loadStripe("pk_test_51IWKjoFTDiNMhVuSBz8HdCyKmQAQqifcsE0HM4n571NsiBYHtCHYRaz7APdKEsoNxV4VGuBKxsxWSlmwNxdDhqbQ00qaaoi0o1");

        const elements = this.stripe.elements();

        this.cardElement = elements.create('card', {
            classes : {
                base: 'form-control'
            }
        });

        this.cardElement.mount('#card-element');
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
                        postal_code: this.customer.zip_code
                    }
                }
            });

            if (error) {
                this.paymentProcessing = false;
                console.error(error);
            } else {
                console.log(paymentMethod);

                console.log('i am looped');

                this.customer.payment_method_id = paymentMethod.id;

                this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

                this.customer.cart = JSON.stringify(this.$store.state.cart);

                axios.post('/api/purchase', this.customer)
                    .then((response) => {
                        this.paymentProcessing = false;
                        console.log(response);

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
