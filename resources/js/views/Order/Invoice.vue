<template>
    <div>
        <div class="container">
            <div align="center" class="invoice-title">
                <h5 class="mt-3">COMLIBRA ELECTRONIC CO., LTD</h5>
                <div>ADD:ROOM 2112, BAOLONG SQUARE, XIAOSHAN, HANGZHOU, ZHEJIANG</div>
                <h5 class="m-3">COMMERCIAL INVOICE</h5>
            </div>

            <div class="proforma-brief">
                <div class="left">
                    <div v-if="order[0].invoice_address_id" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6 class="mt-3">Bill To:</h6>
                    <div v-if="invoiceAddress(order[0].invoice_address_id)[0]">
                        <h6 v-if="invoiceAddress(order[0].invoice_address_id)[0].company_name">
                            {{ invoiceAddress(order[0].invoice_address_id)[0].company_name }}
                        </h6>
                        {{ invoiceAddress(order[0].invoice_address_id)[0].address }}, {{ invoiceAddress(order[0].invoice_address_id)[0].city }}, {{ invoiceAddress(order[0].invoice_address_id)[0].state }}, {{ invoiceAddress(order[0].invoice_address_id)[0].zip_code }}, {{ invoiceAddress(order[0].invoice_address_id)[0].country }}
                        <div>{{ invoiceAddress(order[0].invoice_address_id)[0].name }}</div>
                        <div>{{ invoiceAddress(order[0].invoice_address_id)[0].phone }}</div> 
                    </div>
                     <div v-if="order[0].consignee_address_id">
                    <h6 class="mt-3">Ship to 运到 :</h6>
                    <div v-if="consigneeAddress(order[0].consignee_address_id)[0]">
                            <div v-if="consigneeAddress(order[0].consignee_address_id)[0].company_name">
                                {{ consigneeAddress(order[0].consignee_address_id)[0].company_name }}
                            </div>
                            {{ consigneeAddress(order[0].consignee_address_id)[0].address }}, {{ consigneeAddress(order[0].consignee_address_id)[0].city }}, {{ consigneeAddress(order[0].consignee_address_id)[0].state }}, {{ consigneeAddress(order[0].consignee_address_id)[0].zip_code }}, {{ consigneeAddress(order[0].consignee_address_id)[0].country }}
                            <div>{{ consigneeAddress(order[0].consignee_address_id)[0].name }}</div>
                            <div>{{ consigneeAddress(order[0].consignee_address_id)[0].phone }}</div> 
                    </div>
                    </div>
                </div>
                <br>
                    
                </div>
                <div class="right">
                        <div><small>FROM: {{order[0].from}}</small>
                        </div>
                        <div><small>TO: {{order[0].to}}</small></div>
                        <div>
                            <small>Delivery term: {{order[0].shipment.delivery_term}}
                            </small>
                        </div>
                        <div>
                            <small>Tracking no. 
                                <span v-if="order[0].shipment.express_tracking_no_if">
                                    {{order[0].shipment.express_tracking_no_if}}
                                </span>
                            </small>
                        </div>
                        <div><small> Vessel 
                            <span v-if="order[0].shipment.vessel_if">
                                {{order[0].shipment.vessel_if}}
                            </span>
                             </small></div>
                        <div><small>Container no. 
                            <span v-if="order[0].shipment.container_no">
                                {{order[0].shipment.container_no}}
                            </span>
                            </small></div>
                        <div><small>Seal no. 
                            <span v-if="order[0].shipment.seal_no">
                                {{order[0].shipment.seal_no}}
                            </span>
                            </small></div>
                        <br>
                        <small>Proforma Invoice #: {{order[0].invoice_no}}</small>
                        <div>
                            <small>Order reference {{order[0].transaction_id}}</small> 
                        </div>
                        <div>
                            <small>Date issued: {{order[0].updated_at}}</small>
                        </div>
                </div>
            </div>
           
        </div>

        <div class="container mt-4">
      
            
            
            <table class="table">
                <tr style="font-weight: bold">
                    <td>Item</td>
                    <td>HS Code</td>
                    <td>Qty</td>
                    <td align="right">Price</td>
                </tr>
                <tr v-for="(sku, index) in order[0].skus"
                    :key="index">
                    <td>{{ productsFilteredBySku(sku.product_id)[0].name+', '+sku.title }}</td>
                    <td>{{ productsFilteredBySku(sku.product_id)[0].hs_code }}</td>
                    <td>{{ sku.pivot.quantity }}</td>
                    <td align="right">{{ lineTotal(sku) | myCurrency }}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        Sub Total
                    </td>
                    <td>
                    </td>
                    <td align="right">
                        {{ orderTotal(order[0].skus) | myCurrency }}
                    </td>
                </tr>
                <tr 
                    v-if="order[0].plus_charges.length>0" 
                    v-for="(charge, inx) in order[0].plus_charges" 
                    :key="inx">
                    <td v-text="charge.name"></td>
                    <td colspan=2></td>
                    <td align='right'>
                        {{ charge.value/100| myCurrency }}
                    </td>
                </tr>
                <tr class="font-weight-bold">
                    <td>Grand Total</td>
                    <td ></td>
                    <td>
                         {{ orderQuantity(order[0].skus) }}
                    </td>
                    <td align="right">{{grandTotal(order[0]) | myCurrency}}</td>
                </tr>
        </table>
        </div>

        <div class="invoice-terms">
            <table align="right" cellpadding="10px">
                    <tr align="right"> 
                        <td>Hereby confirmed by:</td>
                    </tr>
                    <tr align="right">
                        <td style="font-weight: bold; background-image: url(http://shop.comlibra.com/images/forSignature.png); background-size: contain; background-repeat: no-repeat; background-position: center center;"> 
                        THE SELLER:<br> 
                        <!-- ROY XU<br><br>  -->
                        <img src="http://shop.comlibra.com/images/9846c88128d7f88f5a943e080b1023a8.png" alt="">
                        <!-- COMLIBRA ELECTRONIC CO., LTD.<br> -->
                        Signature &amp; Stamp </td>
                    </tr>
                </table>
            </div>
        
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'OrderInvoice',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            userOrders: 'auth/userOrders',
            productsFilteredBySku: 'productsFilteredBySku'
        }),
        ...mapState('auth', ['userInfo']),
        order() {
            return this.userOrders.filter(order => order.id == this.$route.params.order);
        },
        
    },
    methods: {
        lineTotal(item) {
            return item.pivot.price * item.pivot.quantity/100;
        },
        orderQuantity(p) {
            return p.reduce((acc,item) => acc + item.pivot.quantity, 0);
        },
        orderTotal(p) {
            return p.reduce((acc, item) => acc + (item.pivot.quantity * item.pivot.price)/100, 0);
        },
        invoiceAddress(id) {
            return this.userInfo.invoiceaddresses.filter(add => add.id == id);
        },
        consigneeAddress (id) {
            return this.userInfo.consigneeaddresses.filter(add => add.id == id);
        },
        
       
        grandTotal (p) {
            let total = p.total;
            total += p.plus_charges.reduce((acc, charge) => acc+ Number(charge.value), 0);
            return total/100;
        }
    },
    filters: {
        myCurrency(value) {
           return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        }
    }
}
</script>
<style scoped>
.proforma-brief{
    display: flex;
    justify-content: space-between;
}
</style>