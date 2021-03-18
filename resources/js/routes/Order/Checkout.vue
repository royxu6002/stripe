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
            <label for="address">Zip Code</label>
            <input type="text"
                class="form-control"
                id="zip_code"
                name="zio_code"
                v-model="customer.zip_code"
                :disabled="paymentProcessing"
                placeholder="786EJ">
        </div>
    </div>
    <div class="row mt-5">
        <div>
            <label for="card-element">Credit Card Info</label>
            <div id="card-element"></div>
        </div>
    </div>
</div>
</template>
<script>
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
            paymentProcessing: false
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
    methods: {
        cartLineTotal(item) {
            let amount =  item.price * item.quantity;
            amount =  (amount /100);
            return amount.toLocaleString('en-US',{
                style: 'currency',
                currency: 'USD',
            });
        }
    }
}
</script>
