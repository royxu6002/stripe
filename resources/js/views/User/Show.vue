<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-3">
                <h4>Personal profile center</h4>
                <span v-text="$store.state.auth.userInfo.name"></span>
                <div class="list-group">
                    <router-link :to="{name: 'UserProfile', params: {user: $store.state.auth.userInfo.id}}" class="list-group-item" :class="{active: $route.path=='/user/profile'}">My Profile</router-link>
                    <router-link :to="{name: 'UserOrder', params: {user: $store.state.auth.userInfo.id}}" class="list-group-item" :class="{active: $route.path=='/user/order'}">My Order</router-link>
                    <router-link :to="{name: 'UserAddress', params: {user: $store.state.auth.userInfo.id}}" class="list-group-item" :class="{active: $route.path=='/user/address'}">My Address</router-link>
                </div>
            </div>
            <div class="col-lg-9">                    
                <router-view></router-view>
            </div>
        </div>
       
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Sidebar from "../../components/Sidebar.vue";

export default {
    components: {
        Sidebar
    },
    computed: {
        ...mapGetters('auth', ['userOrders']),
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