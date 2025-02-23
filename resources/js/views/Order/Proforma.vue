<template>
    <div>
        <div class="container">
            <div class="proforma-title" align="center">
                <h2>PROFORMA INVOICE</h2>
            </div>
            <div class="proforma-brief">
                <div class="left">
                    <small>Proforma Invoice #: {{order[0].invoice_no}}</small>
                    <div>
                        <small>Date issued: {{order[0].updated_at}}</small>
                    </div>
                    <div>
                        <small>Due Date: {{order[0].due_date}}</small>
                    </div>
                </div>
                <div class="right">
                    <small>Invoice Total</small>
                    <div class="invoice-value">{{grandTotal(order[0]) | myCurrency}}</div>
                </div>
            </div>
            <hr>
            <div class="row proforma-header container">
                 <div v-if="order[0].invoice_address_id" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6 class="mt-3">Bill To:</h6>
                    <div v-if="invoiceAddress(order[0].invoice_address_id)[0]">
                        <h4 v-if="invoiceAddress(order[0].invoice_address_id)[0].company_name">
                            {{ invoiceAddress(order[0].invoice_address_id)[0].company_name }}
                        </h4>
                        {{ invoiceAddress(order[0].invoice_address_id)[0].address }}, {{ invoiceAddress(order[0].invoice_address_id)[0].city }}, {{ invoiceAddress(order[0].invoice_address_id)[0].state }}, {{ invoiceAddress(order[0].invoice_address_id)[0].zip_code }}, {{ invoiceAddress(order[0].invoice_address_id)[0].country }}
                        <div>{{ invoiceAddress(order[0].invoice_address_id)[0].name }}</div>
                        <div>{{ invoiceAddress(order[0].invoice_address_id)[0].phone }}</div> 
                    </div>
                </div>

                <div class="proforma-header-right col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div>
                        <h6 class="mt-3">Bill From:</h6>
                        <h4 class="mt-2">{{BILLFROM.company}}</h4>
                        <div class="align-right"> {{BILLFROM.address}}</div>
                        <div>{{BILLFROM.phone}}</div>
                        <div>{{BILLFROM.email}}</div>
                    </div>
                </div>
            </div>
           
        </div>

        <div class="container mt-4">
            <strong>The aforementioned parties hereby agree and conclude an order as below:</strong> 
            <small>Order reference {{order[0].transaction_id}}</small> 
            
            <table class="table">
                <tr style="font-weight: bold">
                    <td>Item</td>
                    <td>HS Code</td>
                    <td>Qty</td>
                    <td align="right">Price</td>
                </tr>
                <tr v-for="(sku, index) in order[0].skus"
                    :key="index">
                    <td>{{ productsFilteredBySku(sku.product_id)[0].name+sku.title }}</td>
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
                <tr class="font-weight-bold">
                    <td colspan=2 style="border-bottem:none !important"></td>
                    <td >Paid to date</td>
                    <td align='right'>{{totalIncome(order[0]) | myCurrency}}</td>
                </tr>
                <tr class="font-weight-bold">
                    <td colspan=2 style="border-top: none;"></td>
                    <td >
                        BALANCE
                    </td>
                    <td align='right'>
                        {{grandTotal(order[0]) - totalIncome(order[0]) | myCurrency }}
                    </td>
                </tr>
        </table>
        </div>

        <div class="invoice-terms container">
            <table align="center" cellpadding="10px">
                <tr>
                    <td valign="top" style="font-weight: bold;">TERMS OF PACKING:</td>
                    <td colspan="3" valign="top">
                        <div>
                            <div 
                                v-for="(sku, index) in order[0].skus" 
                                :key="index"> 
                                ART. 
                                {{ productsFilteredBySku(sku.product_id)[0].name+sku.title }} 
                                TO BE PACKED IN CARTONS OF 
                                {{ sku.pcs_in_carton }}
                                PCS EACH ONLY, SUBTOTAL 
                                   {{ sku.pivot.quantity / sku.pcs_in_carton }}
                                CARTONS. 
                            </div>
                        </div>
                        <div> TOTAL 
                            {{totalCartonQuantity(order[0].skus)}}
                            CARTONS, 
                            {{totalSpace(order[0].skus)}}
                            CUBIC METERS, 
                            {{totalGrossWeight(order[0].skus)}}
                            KILOGRAMMES. 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td valign="top" style="font-weight: bold;">TERMS OF SHIPMENT:</td>
                    <td colspan="3" valign="top"> 
                        FROM: {{order[0].from}}<br> 
                        TO: {{order[0].to}}<br> 
                        TO BE EFFECTED BEFORE {{order[0].delivery_date}} <br>
                        WITH PARTIAL SHIPMENTS AND TRANSSHIPMENT NOT ALLOWED 
                    </td>
                </tr>
                <tr>
                    <td valign="top" style="font-weight: bold;">DOCUMENTS:</td>
                    <td colspan="3" valign="top"> 
                        DIGITAL COMMERCIAL INVOICE AND PACKING LIST ORIGINAL BILL OF LADING OR TELEX-RELEASED B/L COPIES 
                    </td>
                </tr>
                <tr>
                    <td valign="top" style="font-weight: bold;">
                        TERMS OF PAYMENT:
                    </td>
                    <td colspan="3" valign="top"> 
                        PRICE TERMS: {{order[0].price_term}}<br> 
                        PAYMENT TERMS: {{order[0].payment_term}} <br> 
                        Please kindly remit the payment to following beneficiary's account:<br>
                        <br>
                        <div style="font-weight: 500;">
                            <div v-if="grandTotal(order[0]) <= 1000">
                                Paypal account: 
                                <div>
                                    <strong>export@comlibra.com</strong>
                                </div>
                            <br>
                            </div>
                            <!---->
                            <div>
                                <div>Bank account:</div>
                                <div>BENEFICIARY NAME: <strong>COMLIBRA ELECTRONIC CO., LTD.</strong></div>
                                <div>A/C NO. FOR USD: <strong>
                                    77729999990003740
                                </strong>
                            </div>
                                <!---->
                                <div>BENEFICIARY BANK: <strong>
                                    CITIBANK N.A. New York Branch
                                </strong></div>
                                <div>BANK ADDRESS: <strong>
                                    388 Greenwich Street New York, NY 10013,
                                </strong></div>
                                <div>SWIFT/BIC CODE: <strong>CITIUS33XXX</strong> </div>
                            </div>



                        </td>
                    </tr>
                    <tr>
                        <td valign="top" style="font-weight: bold;">TERMS OF INSURANCE:</td>
                        <td colspan="3" valign="top"> FOR TRANSACTIONS CONCLUDED ON C.I.F. BASIS, IT IS UNDERSTOOD THAT THE INSURANCE AMOUND WILL BE FOR 110% OF THE INVOICE VALUE AGAINST THE RISKS SPECIFIED IN THE INVOICE. IF ADDITIONAL INSURANCE OR COVERAGE REQUIRED, THE BUYER MUST HAVE THE CONSENT OF THE SELLER BEFORE SHIPMENT. AND THE ADDITIONAL PREMIUM IS TO BE BORND BY THE BUYER. </td>
                    </tr>
                    <tr>
                        <td colspan="4">Hereby confirmed by:</td></tr>
                    <tr align="center">
                        <td colspan="2" style="font-weight: bold; background-image: url(http://shop.comlibra.com/images/forSignature.png); background-size: contain; background-repeat: no-repeat; background-position: center center;"> 
                        THE SELLER:<br> 
                        <!-- ROY XU<br><br>  -->
                        <img src="http://shop.comlibra.com/images/9846c88128d7f88f5a943e080b1023a8.png" alt="">
                        <!-- COMLIBRA ELECTRONIC CO., LTD.<br> -->
                        Signature &amp; Stamp </td>
                        <td colspan="2" style="font-weight: bold; background-image: url(&quot;&quot;); background-size: contain; background-repeat: no-repeat; background-position: center center;"> 
                            THE BUYER:<br><br><br><br>Signature &amp; Stamp </td></tr><tr align="center">
                                <td colspan="2"></td>
                                <td colspan="2"></td></tr>
                                <tr><td width="25%"></td><td width="25%"></td><td width="25%"></td><td width="25%"></td></tr>
                                <tr><td width="25%"></td><td width="25%"></td><td width="25%"></td><td width="25%"></td>
                    </tr>
                    <tr><td colspan="4" style="font-weight: bold;">REMARKS</td>
                    </tr>
                    <tr>
                        <td valign="top" style="font-weight: bold;"> Claims:</td>
                        <td colspan="3" valign="top"> In case of any discrepancy in quality, claims should be filed by the Buyer within 30 days after the arrival of the goods at port of destination; while for quantity discrepancy, claims should be filed by the buyer within 15 days after the arrival of the goods at port of destination. </td>
                    </tr>
                    <tr>
                        <td valign="top" style="font-weight: bold;"> Force Majeure: </td>
                        <td colspan="3" valign="top"> The seller shall not hold riable to non-delivery or delay in the delivery of the entire lot or a portion of the goods hereunder by reason of natural disasters, war or other causes of Force Majeure. However, the Seller shall notify the Buyer as soon as possible and furnish the Buyer within 15 days by registered airmail with a certificate issued by the China Council of the Promotion of International Trade attesting such event(s). </td>
                    </tr>
                    <tr>
                        <td valign="top" style="font-weight: bold;"> Arbitration: </td>
                        <td colspan="3" valign="top"> All deputes arising out of the performance of, or relating to this Invoice, shall be settled through negotiation. In case of no settlement can be reached through negotiation, the case shall then be submitted to the China International Economic and Trade Arbitration Commission for arbitration in accordance with its arbitral rules. The arbitration shall take place in China. The arbitral award is final and binding upon both partes. </td>
                    </tr>
                </table>
            </div>
        
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'Proforma',
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
        
        totalCartonQuantity(p) {
            let s = p.reduce((acc, sku) => acc + sku.pivot.quantity/sku.pcs_in_carton, 0);
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
        totalIncome(p) {
            if(p.transaction && p.transaction.income != null) {
                let i = p.transaction.income.reduce((acc, income)=>acc + Number(income.value), 0);
                return i/100;
            } else {
                return 0;
            }
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