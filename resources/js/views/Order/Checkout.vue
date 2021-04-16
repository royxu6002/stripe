<template>
<div class="container">
    <div class="row mt-3">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"  v-if="$store.state.auth.userInfo">
            <div class="card">
                <p>
                    {{ userInfo.name }}
                </p>
                <p>
                    {{ userInfo.phone }}
                </p>
                <p>{{ userInfo.email }}</p>
                <p v-if="userInfo.address">
                    {{ userInfo.address }}
                    {{ userInfo.city }}
                    {{ userInfo.state }}
                    {{ userInfo.zip_code }}
                    {{ userInfo.country }}
                </p>
            </div>
            <div class="card" v-if="userInfo.addresses" v-for="(address, index) in userInfo.addresses" :key="index">
                <p>{{ address.phone }}</p>

            </div>
            
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-else>
            <div class="billing-details-wrap">
                <h4 class="mt-3 mb-3 ml-3">Billing Details</h4>
                <div class="form-group col-12">
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
                <div class="form-group col-12">
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

                <div class="form-group col-12">
                    <label for="company_name">Company name</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="company_name"
                        name="company_name"
                        v-model="customer.company_name"
                        :disabled="paymentProcessing"
                        placeholder="Blunt">
                </div>

                <div class="form-group col-12">
                    <label for="email">Email</label>
                    <input 
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="customer.email"
                        :disabled="paymentProcessing"
                        placeholder="example@example.com">
                    <span class="form-text text-muted">We'll never share your details to third parties</span>
                </div>

                <div class="form-group col-12">
                    <label for="phone">Phone</label>
                    <input type="text"
                        class="form-control"
                        id="phone"
                        name="phone"
                        v-model="customer.phone"
                        :disabled="paymentProcessing"
                        placeholder="+190899888">
                    <span class="form-text text-muted">Need phone contact for goods collection</span>
                </div>
        
                <div class="form-group col-12">
                    <label for="address">Address</label>
                    <input type="text"
                        class="form-control"
                        id="address"
                        name="address"
                        v-model="customer.address"
                        :disabled="paymentProcessing"
                        placeholder="Room 43, Suit Job. Street 129">
                </div>

                <div class="form-group col-12">
                    <label for="city">City</label>
                    <input type="text"
                        class="form-control"
                        id="city"
                        name="city"
                        v-model="customer.city"
                        :disabled="paymentProcessing"
                        placeholder="New York">
                </div>

                <div class="form-group col-12">
                    <label for="state">State</label>
                    <input type="text"
                        class="form-control"
                        id="state"
                        name="state"
                        v-model="customer.state"
                        :disabled="paymentProcessing"
                        placeholder="California">
                </div>

                <div class="form-group col-12">
                    <label for="zip_code">Zip Code</label>
                    <input type="text"
                        class="form-control"
                        id="zip_code"
                        name="zip_code"
                        v-model="customer.zip_code"
                        :disabled="paymentProcessing"
                        placeholder="786EJ">
                </div>

                <div class="form-group col-12">
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
            <div class="billing-consignee-option">
                <div>
                    <input type="radio" v-model="consignee" value="same">
                    <label for="">Ship to same place</label>
                </div>
                <div>
                    <input type="radio" v-model="consignee" value="different">
                    <label for="">Ship to another place</label>
                </div>
            </div>
            <div class="consignee-details-wrap" v-if="consignee=='different'">
                <h4 class="mt-3 mb-3 ml-3">Consignee Details</h4>
                <div class="form-group col-12">
                    <label>First Name <span class="text-danger">*</span></label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="c_first_name"
                        name="c_first_name"
                        v-model="customer.consignee.first_name"
                        :disabled="paymentProcessing"
                        placeholder="James">
                </div>
                <div class="form-group col-12">
                    <label for="c_last_name">Last name</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="c_last_name"
                        name="c_last_name"
                        v-model="customer.consignee.last_name"
                        :disabled="paymentProcessing"
                        placeholder="Blunt">
                </div>
                <div class="form-group col-12">
                    <label for="c_company_name">Company name</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="c_company_name"
                        name="c_company_name"
                        v-model="customer.consignee.company_name"
                        :disabled="paymentProcessing"
                        placeholder="Blunt">
                </div>
                <div class="form-group col-12">
                    <label for="c_phone">Phone</label>
                    <input type="text"
                        class="form-control"
                        id="c_phone"
                        name="c_phone"
                        v-model="customer.consignee.phone"
                        :disabled="paymentProcessing"
                        placeholder="+190899888">
                    <span class="form-text text-muted">Need phone contact for goods collection</span>
                </div>
                <div class="form-group col-12">
                    <label for="address">Address</label>
                    <input type="text"
                        class="form-control"
                        id="c_address"
                        name="c_address"
                        v-model="customer.consignee.address"
                        :disabled="paymentProcessing"
                        placeholder="Room 43, Suit Job. Street 129">
                </div>
                <div class="form-group col-12">
                    <label for="city">City</label>
                    <input type="text"
                        class="form-control"
                        id="c_city"
                        name="c_city"
                        v-model="customer.consignee.city"
                        :disabled="paymentProcessing"
                        placeholder="New York">
                </div>
                <div class="form-group col-12">
                    <label for="state">State</label>
                    <input type="text"
                        class="form-control"
                        id="c_state"
                        name="c_state"
                        v-model="customer.consignee.state"
                        :disabled="paymentProcessing"
                        placeholder="California">
                </div>
                <div class="form-group col-12">
                    <label for="zip_code">Zip Code</label>
                    <input type="text"
                        class="form-control"
                        id="c_zip_code"
                        name="c_zip_code"
                        v-model="customer.consignee.zip_code"
                        :disabled="paymentProcessing"
                        placeholder="786EJ">
                </div>
                <div class="form-group col-12">
                    <label for="country">Country</label>
                    <input type="text"
                        class="form-control"
                        id="c_country"
                        name="c_country"
                        v-model="customer.consignee.country"
                        :disabled="paymentProcessing"
                        placeholder="USA">
                </div>
            </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <table class="table table-striped">
                <thead>
                    <tr style="font-weight:bold;">
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
                    <tr style="font-weight:bold">
                        <td>Total</td>
                        <td v-text="cartQuantity"></td>
                        <td v-text="cartTotal"></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="form-group col-12 payment_method">
                 <h4 class="mt-3 mb-3">Please select one of below options to pay </h4>
                <div>
                    <input type="radio" v-model="paymentMethod" value="paypal" :disabled="paymentProcessing">
                    <label for="paypal" class="payment_method_name ml-3">
                        Paypal
                    </label>
                </div>
                <div class="form-group col-12 tabpaymentcontent" :class="{active: paymentMethod=='paypal'}">
                    <div id="paypalbutton"></div>
                </div>
                <div>
                    <input type="radio" v-model="paymentMethod" value="bank">
                    <label for="banktransfer" class="payment_method_name ml-3">
                        Direct Bank Transfer
                    </label>
                    <p>
                         <span>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                    </p>
                </div>
                <div class="form-group col-12 tabpaymentcontent" :class="{active: paymentMethod=='bank'}"> 
                    <button
                        class="form-control btn btn-primary mx-auto text-large mt-3"
                        @click="bankTransfer"
                        :disabled="paymentProcessing">
                        Place the order
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
</div>
</template>
<script>
import { loadScript } from "@paypal/paypal-js";
import { mapState } from "vuex";

export default {
    data() {
        return {
            customer: {
                first_name: '',
                last_name: '',
                company_name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                country: '',
                state: '',
                zip_code: '',
                consignee: {},
            },
            consignee: '',
            paymentProcessing: false,
            stripe : {},
            cardElement: {},
            paypal: {},
            paymentMethod: '',
            errors: '',
            messages: '',
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
        },
        ...mapState('auth', ['userInfo'])
    },
    mounted() {
        this.paypal =  loadScript({'client-id':'ARGvGYQJqTPeIGweb2kuhzefstiR98ZHm8qeaXjppCDgYWwvUrf4gui01o3qUPwSI-N4vsyQjUcfuN5c'});
        this.paypal.then(this.loadPaypalButton).catch((err) => console.error('failed to load paypal js sdk script', err));
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
        loadPaypalButton() {
            paypal.Buttons({
                // 必须使用 =>函数 
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                                amount: {
                                    value: this.$store.state.cart.reduce((acc, item)=> acc+(item.price*item.quantity), 0)/100,
                                    currency_code: 'USD',
                                    "breakdown": {
                                        "item_total": {
                                            "currency_code": "USD",
                                            "value": this.$store.state.cart.reduce((acc, item) => acc+ (item.price* item.quantity), 0)/100,
                                        }
                                    }
                                },
                                // 重构 cart 数组
                                items: this.$store.state.cart.map(item => {
                                    return {
                                        "name": item.name,
                                        "unit_amount": {
                                            "value": item.price/100,
                                            "currency_code": "USD",
                                        },
                                        "tax": {
                                            "currency_code": "USD",
                                            "value": 0
                                        },
                                        "quantity": item.quantity,
                                        "sku": item.id
                                    }
                                })
                        }]
                    })   
                },
                onApprove: (data, actions) => {
                    actions.order.capture().then((details) => {
                        // call server to capture the transation
                        return fetch('/api/paypal', {
                                    method: 'post',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(details)
                                })
                                .then(res => res.json())
                                .then(data => {
                                    this.$store.commit('updateOrder', data);
                                    this.$store.dispatch('clearCart');
                                    this.$router.push({name: 'order.summary'});
                                })
                                .catch(error =>  {
                                    console.error('Error:', error);
                                    this.paymentProcessing = false;
                                })
                    })
                }
            }).render('#paypalbutton')
        },
        bankTransfer() {
            this.paymentProcessing = true;
            this.customer.cart = JSON.stringify(this.$store.state.cart);
            this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            // 把 consignee的 值传到后台, if 判断来决定 consignee 的地址, if same, copy invoice_address, if different, create;
            console.log(this.customer);
            this.customer.ic_address = this.consignee;
            
            axios.post('/api/bank', this.customer)
                .then(res => { 
                    console.log(res.data);
                    this.$store.commit('updateOrder', res.data);
                    this.$store.dispatch('clearCart');
                    // this.$router.push({name: 'order.summary'});
                 })
                .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>

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
