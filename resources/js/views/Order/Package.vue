<template>
    <div class="container mt-3">
        <div align="center" class="invoice-title">
            <h5 class="mt-3">COMLIBRA ELECTRONIC CO., LTD</h5>
            <div>ADD:ROOM 2112, BAOLONG SQUARE, XIAOSHAN, HANGZHOU, ZHEJIANG</div>
            <h5 class="m-3">PACKING LIST</h5></div>
        
            
        <div class="packing-list-header">
            <div>
                <h5>Shipping mark</h5>
                <div v-if="order[0].shipment.shipping_mark">
                    {{order[0].shipment.shipping_mark}}
                </div>
            </div>
            
            <div align="right">
                <div>
                    Invoice #: {{order[0].invoice_no}}
                </div>
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
                    <th>Quantity</th>
                    <th>Carton Amount</th>
                    <th>GW</th>
                    <th>NW</th>
                    <th style="text-align: right;">CBM</th>
                </thead>
                <tr 
                    v-for="(sku, index) in order[0].skus"
                    :key="index">
                    <td v-text="productsFilteredBySku(sku.product_id)[0].name+sku.title"></td>
                    <td v-text="sku.pivot.quantity"></td>
                    <td v-text="sku.pivot.quantity / sku.pcs_in_carton"></td>
                    <td v-text="lineGrossWeight(sku)"></td>
                    <td v-text="lineNetWeight(sku)"></td>
                    <td v-text="lineSpace(sku)" align="right"></td>
                </tr>
                <tr class="font-weight-bold">
                    <td rowspan="2">
                        Total
                    </td>
                    <td v-text="totalQuantity(order[0].skus)">
                    </td>
                    <td v-text="totalCartonQuantity(order[0].skus)"></td>
                    <td v-text="totalGrossWeight(order[0].skus)"></td>
                    <td v-text="totalNetWeight(order[0].skus)"></td>
                    <td v-text="totalSpace(order[0].skus)" align="right"></td>
                </tr> 
                <tr class="font-weight-bold total-wrap">
                    <td>PCS</td>
                    <td>CARTONS</td>
                    <td>KGS</td>
                    <td>KGS</td>
                    <td align="right">M³</td>
                </tr>
            </table>
            <div class="invoice-stamp">
                <table align="right" cellpadding="10px">
                    <tr align="center">
                        <td colspan="2" style="background-image: url(&quot;../../../assets/imgs/stamp.png&quot;); background-size: contain; background-repeat: no-repeat; background-position: center center;"> 
                        THE SELLER:
                        <br>
                        <br>
                        <br> COMLIBRA ELECTRONIC CO., LTD.<br>
                        Signature &amp; Stamp 
                        </td>
                    </tr>
                </table>
            </div>
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
            let s = p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton, 0);
            return Math.round(s *100)/100;
        },
        totalNetWeight(p) {
            let s = p.reduce((acc, sku) => acc+ sku.pivot.quantity/sku.pcs_in_carton *sku.net_weight/100, 0);
            return Math.round(s *100)/100;
            
        },
        totalGrossWeight(p) {
            let s = p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton *sku.gross_weight/100, 0);
            return Math.round(s *100)/100;
        },
        totalSpace(p) {
            let s = p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton* sku.length*sku.width*sku.height/1000000000, 0);
            return Math.round(s*100)/100;
        },
        lineSpace(p) {
            let s = p.pivot.quantity/p.pcs_in_carton *p.length*p.width*p.height/1000000000;
            return Math.round(s *1000)/1000;
        },
        lineGrossWeight(p) {
            let s = p.pivot.quantity / p.pcs_in_carton * p.gross_weight/100
            return Math.round(s *1000)/1000;
        },
        lineNetWeight(p) {
            let s = p.pivot.quantity / p.pcs_in_carton * p.net_weight/100
            return Math.round(s *1000)/1000;
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
