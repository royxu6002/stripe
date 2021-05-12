<template>
    <div class="container">
        <h5 class="mt-3">My Order</h5> 
        <span v-if="userOrders">{{ orderTotal | myCurrency }}</span>
        <span v-if="userOrders">Total {{ orderQuantity }} orders</span>
        <div class="card mb-3"
            v-for="(order, index) in userOrders"
            :key="index">
            <div class="card-body">
                <router-link :to="{name: 'OrderReview', params: {order: order.id, user: order.user_id}}">
                    {{ order.transaction_id }}
                </router-link>
                <hr>
                <div 
                    v-for="(sku, index) in order.skus"
                    :key="index" 
                    class="card-body-order-detail">
                    <div class="col-3 col-sm-4 col-md-3 col-lg-2">
                        <img v-if="sku.image" :src="GLOBAL.baseUrl+sku.image[0]" alt="" width="100%">
                    </div>
                    <div class="col-9 col-sm-8 col-md-9 col-lg-10">
                        <!-- must get product name -->
                       
                        <h6 v-text="productsFilteredBySku(sku.product_id)[0].name+sku.title">
                        </h6>
                        
                        <span>{{  sku.pivot.price | myCurrency }}</span>
                        <span>x</span>
                        <span>{{ sku.pivot.quantity}}</span>
                    </div>
                </div>
                <hr>
                <h6>{{ order.total | myCurrency }}</h6>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'UserOrder',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            userOrders: 'auth/userOrders',
            productsFilteredBySku: 'productsFilteredBySku'
        }),
        orderTotal() {
            return this.userOrders.reduce((acc, order) => acc + (order.total), 0);
        },
        orderQuantity() {
            return this.userOrders.length;
        }
    },
    filters: {
        myCurrency(value) {
            return 'US$' + value/100;
        }
    }

}
</script>
<style scoped>
.card-body-order-detail {
    display: flex;
    align-content: space-between;
}
</style>