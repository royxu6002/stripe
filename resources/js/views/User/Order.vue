<template>
    <div class="container">
        <h5 class="mt-3">Orders Overview
</h5> 
        
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="mb-4 card">
                    <div class="p-3 card-body">
                        <div class="row d-flex flex-row-reverse justify-content-between align-items-center">
                            <div class="icon rounded-circle shadow">
                                    <svg t="1654049583237" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1317" width="150" height="150"><path d="M896 416H128c-35.2 0-64-28.8-64-64V192c0-70.4 57.6-128 128-128h640c70.4 0 128 57.6 128 128v160c0 35.2-28.8 64-64 64z m-16-48c0-8.837-7.163-16-16-16H160c-8.837 0-16 7.163-16 16s7.163 16 16 16h704c8.837 0 16-7.163 16-16z" p-id="1318"></path><path d="M768 960H256c-70.4 0-128-57.6-128-128V384h768v448c0 70.4-57.6 128-128 128z m32-128v-96c0-17.6-14.4-32-32-32H384c-17.6 0-32 14.4-32 32v96c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32z" p-id="1319"></path>
                                    </svg>
                            </div>

                            <div class="numbers">
                                <p class="mb-0 text-sm text-uppercase font-weight-bold">
                                    Total Goods Value 
                                </p>
                                <h5 class="font-weight-bolder">
                                    {{ orderTotal | myCurrency }}
                                </h5>
                                <span class="text-secondary text-sm">
                                    other cost excluded
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="mb-4 card">
                    <div class="p-3 card-body">
                        <div class="d-flex flex-row-reverse justify-content-between align-items-center">
                            <div class="icon rounded-circle shadow">
                                <svg t="1654051232936" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1464" width="200" height="200"><path d="M342.73 692.02c-24.92 0-45.19 20.27-45.19 45.18s20.27 45.18 45.19 45.18c24.91 0 45.18-20.27 45.18-45.18s-20.26-45.18-45.18-45.18z" p-id="1465"></path><path d="M815.34 173.34h-38.9v-55.67c0-30.75-24.92-55.67-55.67-55.67s-55.67 24.92-55.67 55.67v55.67H358.91v-55.67c0-30.75-24.92-55.67-55.67-55.67s-55.67 24.92-55.67 55.67v55.67h-38.9c-47.69 0-86.36 38.66-86.36 86.36v615.94c0 47.69 38.67 86.36 86.36 86.36h606.67c47.69 0 86.36-38.67 86.36-86.36V259.7c0-47.7-38.67-86.36-86.36-86.36zM342.73 819.88c-45.59 0-82.69-37.09-82.69-82.68s37.1-82.68 82.69-82.68c45.59 0 82.68 37.09 82.68 82.68s-37.08 82.68-82.68 82.68z m90.05-344.05l-90.6 90.6c-5.49 5.49-12.69 8.24-19.88 8.24s-14.37-2.74-19.86-8.21l-49.71-49.53c-11-10.97-11.03-28.77-0.07-39.78 10.96-11 28.77-11.03 39.77-0.07l29.83 29.72L393 436.06c10.99-10.99 28.8-10.99 39.78 0 10.98 10.98 10.98 28.79 0 39.77z m317.04 349.4H529.51c-15.54 0-28.13-12.59-28.13-28.13 0-15.53 12.59-28.12 28.13-28.12h220.31c15.54 0 28.13 12.59 28.13 28.12 0 15.54-12.6 28.13-28.13 28.13z m0-120.01H529.51c-15.54 0-28.13-12.59-28.13-28.12 0-15.54 12.59-28.13 28.13-28.13h220.31c15.54 0 28.13 12.59 28.13 28.13 0 15.53-12.6 28.12-28.13 28.12z m0-120.01H529.51c-15.54 0-28.13-12.59-28.13-28.12 0-15.54 12.59-28.13 28.13-28.13h220.31c15.54 0 28.13 12.59 28.13 28.13 0 15.53-12.6 28.12-28.13 28.12z m0-120.01H529.51c-15.54 0-28.13-12.59-28.13-28.12 0-15.53 12.59-28.13 28.13-28.13h220.31c15.54 0 28.13 12.6 28.13 28.13s-12.6 28.12-28.13 28.12z" p-id="1466"></path></svg>
                            </div>
                            <div class="numbers">
                                <p class="mb-0 text-sm text-uppercase font-weight-bold">Total Order Fullfilled</p>
                                <h5 class="font-weight-bolder">
                                    {{ orderQuantity }} 
                                </h5>
                                <span class="text-secondary text-sm">
                                    since registered
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="card mb-3 mt-3"
            v-for="(order, index) in userOrders"
            :key="index">
            <div class="card-body">
                <div class="card-body-header">
                    <router-link :to="{name: 'OrderReview', params: {order: order.id, user: order.user_id}}">
                        {{ order.id }}
                    </router-link>
                    <router-link 
                        v-if="order.delivery_date"
                        :to="{name: 'Proforma', params: {order: order.id, user: order.user_id}}">
                        Invoice
                    </router-link>
                    <router-link :to="{name: 'OrderPacking', params: {order: order.id, user: order.user_id}}">
                        Packing
                    </router-link>
                    <router-link 
                        v-if="order.shipment"
                        :to="{name: 'OrderInvoice', params: {order: order.id, user: order.user_id}}">
                        Commercial
                    </router-link>  
                </div>

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
                <div class="card-body-order-detail">
                        <div class="col-3 col-sm-4 col-md-3 col-lg-2">
                            <span>Goods</span>
                        </div>
                        <div class="col-9 col-sm-8 col-md-9 col-lg-10">
                            <h6>
                                {{ order.total | myCurrency }}
                            </h6>
                        </div>
                </div>
                <div v-if="order.plus_charges.length>0">
                    <hr>
                    <div v-for="(charge, i) in order.plus_charges" 
                        class="card-body-order-detail">
                        <div class="col-3 col-sm-4 col-md-3 col-lg-2">
                            <span>{{charge.name}}</span>
                        </div>
                        <div class="col-9 col-sm-8 col-md-9 col-lg-10">
                            <h6>
                                {{charge.value | myCurrency}}
                            </h6>
                        </div>
                    </div>
                </div>
                
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
.card-body-header {
    display: flex;
    justify-content: space-between;
}
.icon {
    width: 2rem;
    height: 2rem;
}

</style>