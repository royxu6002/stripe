<template>
    <div class="container mt-3">
        <div class="packing-list-header">
            <h2>Packing List
            
            </h2>
            <div align="right">
                <div>Order NO.{{order[0].id}}</div>
                <div>Reference. {{order[0].transaction_id}}</div>
                <span>
                    Dated On {{order[0].created_at}}
                </span>
            </div>
        </div>
        
        <div> </div>
        
        <div>
            <table class="table">
                <thead>
                    <th>
                        Item
                    </th>
                    <th>Carton Size</th>
                    <th>PCS In Carton</th>
                    <th>Quantity</th>
                    <th>Carton Amount</th>
                    <th>GW</th>
                    <th>NW</th>
                    <th>CBM</th>
                </thead>
                <tr 
                    v-for="(sku, index) in order[0].skus"
                    :key="index">
                    <td v-text="productsFilteredBySku(sku.id)[0].name+sku.title"></td>
                    <td v-text="sku.length+'x'+sku.width+'x'+sku.height+'mm'"></td>
                    <td v-text="sku.pcs_in_carton"></td>
                    <td v-text="sku.pivot.quantity"></td>
                    <td v-text="sku.pivot.quantity / sku.pcs_in_carton"></td>
                    <td v-text="sku.pivot.quantity / sku.pcs_in_carton * sku.gross_weight/100"></td>
                    <td v-text="sku.pivot.quantity / sku.pcs_in_carton * sku.net_weight/100"></td>
                    <td v-text="lineSpace(sku)"></td>
                </tr>
                <tr class="font-weight-bold">
                    <td colspan="3" rowspan="2">
                        Total
                    </td>
                    <td v-text="totalQuantity(order[0].skus)">
                    </td>
                    <td v-text="totalCartonQuantity(order[0].skus)"></td>
                    <td v-text="totalGrossWeight(order[0].skus)"></td>
                    <td v-text="totalNetWeight(order[0].skus)"></td>
                    <td v-text="totalSpace(order[0].skus)"></td>
                </tr> 
                <tr class="font-weight-bold total-wrap">
                    <td>PCS</td>
                    <td>CARTONS</td>
                    <td>KGS</td>
                    <td>KGS</td>
                    <td>M3</td>
                </tr>
            </table>
        </div>
    </div>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'OrderPacking',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            userOrders: 'auth/userOrders',
            productsFilteredBySku: 'productsFilteredBySku',
        }),
        order() {
            return this.userOrders.filter(order => order.id == this.$route.params.order);
        }
    },
    methods: {
        totalQuantity(p) {
            return p.reduce((acc, sku) => acc + sku.pivot.quantity, 0);
        },
        totalCartonQuantity(p) {
            return p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton, 0);
        },
        totalNetWeight(p) {
            return p.reduce((acc, sku) => acc+ sku.pivot.quantity/sku.pcs_in_carton *sku.net_weight/100, 0);
        },
        totalGrossWeight(p) {
            return p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton *sku.gross_weight/100, 0);
        },
        totalSpace(p) {
            let s = p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton* sku.length*sku.width*sku.height/1000000000, 0);
            return Math.round(s*100)/100;
        },
        lineSpace(p) {
            let s = p.pivot.quantity/p.pcs_in_carton *p.length*p.width*p.height/1000000000;
            return Math.round(s *100)/100;
        }
    }

}
</script>
<style scoped>
.total-wrap {
    border: none;
}
.packing-list-header {
    display: flex;
    justify-content: space-between;
}
</style>
