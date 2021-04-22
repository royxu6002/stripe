<template>
<div class="container">
    <div class="row mt-3">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"  v-if="$store.state.auth.userInfo">
            <div class="mb-3">
                <div>
                    Welcome {{ userInfo.name }}, Your email is  {{ userInfo.email }}
                </div>
            </div>
            <p v-if="userInfo.invoiceaddresses">
                <b>Please select whom to be Billed To</b>
                <router-link :to="{name: 'AddressCreate', params: {user: userInfo.id}}">Create a new Invoice address</router-link>
            </p>
            <div class="card mb-3"
                v-if="userInfo.invoiceaddresses" 
                v-for="(address, index) in userInfo.invoiceaddresses" 
                :key="index"
                style="display: block; border: 1px solid #ccc" 
                @click="selectIav(address.id)">
                <div class="p-3"
                    :class="{active: customer.iav === address.id}" >
                    <!-- <input type="radio" v-model="customer.iav" :value="address.id"> -->
                    <div v-if="address.company_name">{{ address.company_name }}
                    </div>
                    <div>{{address.address}}, {{address.city}}, {{address.state}}, {{address.zip_code}},{{address.country}}</div>
                    <div>
                        {{address.name}}, {{address.phone}}
                    </div>
                </div>
               
            </div>

            <p v-if="userInfo.consigneeaddresses">
                <b>Please select whom to be consignee</b>
                <router-link :to="{name: 'CaddressCreate', params: {user: userInfo.id}}">Create a new consignee</router-link>
            </p>

             <div class="card mb-3"
                v-if="userInfo.consigneeaddresses"
                v-for="(address, index) in userInfo.consigneeaddresses" 
                :key="address.id"
                style="display: block; border: 1px solid #ccc" 
                @click="selectCav(address.id)">
                <div
                    class="p-3"
                    :class="{active: customer.cav === address.id}" >
                    <div v-if="address.company_name">
                        {{ address.company_name }}
                    </div>
                    <div>{{address.address}}, {{address.city}}, {{address.state}}, {{address.zip_code}},{{address.country}}</div>
                    <div>
                        {{address.name}}, {{address.phone}}
                    </div>
                </div>
                
            </div>

        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-if="!$store.state.auth.userInfo">
           <h6>Please login in to place the order</h6>
           <router-link to="/login">
                Login
           </router-link>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <table class="table table-striped" style="width: 100%">
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
                        <td>
                            <input 
                                type="text" 
                                :value="item.quantity" 
                                min="1" 
                                @blur="updateCartItemQuantity(index,$event)">
                        </td>
                        <td>{{ cartLineTotal(item) }}</td>
                        <td>
                            <button @click="$store.commit('removeFromCart', index)">
                                Remove
                            </button>
                        </td>
                    </tr>
                    <tr style="font-weight:bold">
                        <td>Total</td>
                        <td>
                            {{cartQuantity}}
                        </td>
                        <td>{{cartTotal}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="form-group col-12 payment_method">
                 <h4 class="mt-3 mb-3">Currently we offer only below options to pay </h4>
                <div>
                    <input type="radio" v-model="customer.paymentMethod" value="bank" checked>
                    <label for="banktransfer" class="payment_method_name ml-3">
                        Direct Bank Transfer
                    </label>
                    <p>
                         <span>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                    </p>
                </div>
                <div class="form-group col-12 tabpaymentcontent"> 
                    <button
                        class="form-control btn btn-primary mx-auto text-large mt-3"
                        @click="bankTransfer">
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
                iav: '',
                cav: '',
                paymentMethod: 'bank',
            },
            errors: '',
            messages: '',
        }
    },
    computed: {
        cartQuantity() {
            return this.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
        cartTotal() {
            let amount = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            amount = (amount /100);
            return amount.toLocaleString('en-US', {
                style: "currency",
                currency: "USD",
            });
        },
        ...mapState({
            cart: (state) => state.cart,
            userInfo: (state) => state.auth.userInfo,
        }),

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
        updateCartItemQuantity(index, $e) {
            const quantity = Number($e.target.value);
            const data = {index, quantity};
            console.log(data);
            this.$store.dispatch('setQuantity', data);
        },
        bankTransfer() {
            if(!this.$store.state.auth.userInfo) {
                alert('Please login before placing the order');
            } else {
                if(!this.$store.state.cart.length) {
                    alert('The cart is empty');
                } else {
                    if(!this.customer.iav) {
                        alert('please select or create an address for invoice&goods collection');
                        return;
                    }  else {
                         this.customer.cart = JSON.stringify(this.$store.state.cart);
                        this.customer.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                        axios.post('/api/user/'+this.$store.state.auth.userInfo.id+'/bank', this.customer)
                            .then(res => { 
                                this.$store.dispatch('clearCart');
                                this.$store.commit('auth/addUserOrderData', res.data);
                                this.$router.push({name: 'UserOrder'});
                            })
                            .catch(err => console.log(err))
                    }
                }
                
            }
        },
        selectIav(id) {
            this.customer.iav = id;
        },
        selectCav(id) {
            this.customer.cav = id;
        },
    },
}
</script>
<style scoped>

.payment_method_name {
    margin-right: 20px;
}
/* .tabpaymentcontent {
    display: none;
} */
.active {
        display: block;
        border: 2px solid lightskyblue;
    }
</style>
