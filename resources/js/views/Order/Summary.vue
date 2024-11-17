<template>
<div class="container">
    
    <h2>Thank you for your order</h2> <span v-text="order.transaction_id" class="mt-5"></span>
    <div v-text="order.user.address+', '+order.user.city+', '+order.user.state+', '+order.user.zip_code+', '+order.user.country"></div>

    

    <div class="row mt-4"> 
       <table class="table table-striped">
           <thead>
               <tr>
                   <td>Item</td>
                   <td>Quantity</td>
                   <td>Price</td>
               </tr>
           </thead>
           <tbody>
               <tr
                v-for="(item, index) in order.products"
                :key="index"
               >
                   <td v-text="item.name"></td>
                   <td v-text="item.pivot.quantity"></td>
                   <td v-text="orderLineTotal(item)"></td>
               </tr>
               <tr>
                   <td>Total</td>
                   <td v-text="orderQuantity"></td>
                   <td v-text="orderTotal"></td>
               </tr>
           </tbody>
        </table> 
    </div>
</div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
    computed: {
        order() {
            return this.$store.state.order;
        },
        orderQuantity() {
            return this.$store.state.order.products.reduce((acc, item) => acc + item.pivot.quantity, 0);
        },
        orderTotal() {
            let amount = this.$store.state.order.products.reduce((acc, item) => acc + (item.price * item.pivot.quantity), 0);
            amount = (amount /100);
            return amount.toLocaleString('en-US', {
                style: "currency",
                currency: "USD",
            });
        }
    },
    methods: {
        orderLineTotal(item) {
            let amount =  item.price * item.pivot.quantity;
            amount =  (amount /100);
            return amount.toLocaleString('en-US',{
                style: 'currency',
                currency: 'USD',
            });
        }
    }
}
</script>
