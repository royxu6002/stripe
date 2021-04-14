<template>
    <div class="container">
        <div>this is index page for user after login</div>
        <div class="card"
            v-for="(order, index) in userOrders.orders"
            :key="index">
            <div class="card-body">
                <h5 v-text="order.transaction_id"></h5>
                <hr>
                <div 
                    v-for="(product, index) in order.products"
                    :key="index" 
                    class="card-body-order-detail">
                    <div class="col-3 col-sm-4 col-md-3 col-lg-2">
                        <img v-if="product.images" :src="'http://stripe.test/uploads/'+product.images[0]" alt="" width="100%">
                    </div>
                    <div class="col-9 col-sm-8 col-md-9 col-lg-10">
                        <h6 v-text="product.name">
                        </h6>
                        <span>{{  product.price | myCurrency }}</span>
                        <span>x</span>
                        <span>{{ product.pivot.quantity}}</span>
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
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters('auth', ['userOrders'])
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