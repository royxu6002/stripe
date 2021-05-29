<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-3">
                <h4>Personal profile center</h4>
                <div class="list-group">
                    <router-link 
                        :to="{name: 'UserProfile', params: {user: $store.state.auth.userInfo.id}}" 
                        class="list-group-item" active-class="active">
                        <svg class="icon svg-icon" aria-hidden="true">
                            <use xlink:href="#icon-gerenzhongxin"></use>
                        </svg>
                        <span class="ml-2">My Profile</span>
                    </router-link>
                    <router-link 
                        :to="{name: 'UserOrder', params: {user: $store.state.auth.userInfo.id}}" 
                        class="list-group-item" active-class="active">
                    <svg class="icon svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-viewlist"></use>
                    </svg>
                     <span class="ml-2">My Order</span>
                    </router-link>
                    <router-link active-class="active"
                        :to="{name: 'UserAddress', params: {user: $store.state.auth.userInfo.id}}" 
                        class="list-group-item">
                        <svg class="icon svg-icon" aria-hidden="true">
                            <use xlink:href="#icon-address"></use>
                        </svg>
                        <span class="ml-2">My Address</span>
                    </router-link>
                    <a href=""
                        active-class="active"
                        class="list-group-item"
                            @click="signOut()">
                            <svg class="icon svg-icon" aria-hidden="true">
                                <use xlink:href="#icon-icon_sign_uploadimage"></use>
                            </svg>
                            <span class="ml-2">Sign out</span>
                    </a>
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

export default {
    data() {
        return {
           
        }
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
    },
    methods: {
        signOut() {
            sessionStorage.clear();
            this.$router.replace('/login');
        }
    }
}
</script>
<style scoped>
.card-body-order-detail {
    display: flex;
    align-content: space-between;
}
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: center;
  fill: currentColor;
  overflow: hidden;
}
</style>