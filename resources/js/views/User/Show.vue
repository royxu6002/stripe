<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-12">                    
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