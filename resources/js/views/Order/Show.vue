<template>
    <div>
        <div class="container row mx-auto">
           
            <div v-if="order[0].invoice_address_id" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                
                <h4 class="mt-3">Bill To:</h4>
                <div v-if="invoiceAddress(order[0].invoice_address_id)[0]">
                     <div v-if="invoiceAddress(order[0].invoice_address_id)[0].company_name">
                        {{ invoiceAddress(order[0].invoice_address_id)[0].company_name }}
                    </div>
                    {{ invoiceAddress(order[0].invoice_address_id)[0].address }}, {{ invoiceAddress(order[0].invoice_address_id)[0].city }}, {{ invoiceAddress(order[0].invoice_address_id)[0].state }}, {{ invoiceAddress(order[0].invoice_address_id)[0].zip_code }}, {{ invoiceAddress(order[0].invoice_address_id)[0].country }}
                    <div>{{ invoiceAddress(order[0].invoice_address_id)[0].name }}</div>
                    <div>{{ invoiceAddress(order[0].invoice_address_id)[0].phone }}</div> 
                </div>
            </div>

            <div v-if="order[0].consignee_address_id" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h4 class="mt-3">Ship to:</h4>
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

        <div class="container mt-4">
            <strong>Reference: </strong> <small>{{order[0].transaction_id}}</small>
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
        </table>

        </div>

        <div class="container row mx-auto">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h5>Dear  {{userInfo.name}}, Thanks for your order.</h5>
                <div>Purchase order ID:  {{order[0].id}}</div>
                <div>Total invoice value of {{grandTotal(order[0]) | myCurrency}},</div>
                <div> Dated on {{order[0].created_at}}</div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                
                <h5>Our Bank Details:</h5>
                <span>
                   <small><strong> Please refer Order ID as a payment note.
                       </strong></small>
                </span>
                
                <ul class="wc-bacs-bank-details order_details bacs_details">
                    <li class="bank_name">BENEFICIARY NAME: <strong>COMLIBRA ELECTRONIC CO., LTD.</strong></li>
                    <li class="account_number">ACCOUNT NUMBER: <strong>
                        77729999990003740
                    </strong></li>
                    <li class="sort_code"> BENEFICIARY BANK: <strong>
                        CITIBANK N.A. New York Branch
                    </strong></li>
                    <li class="bank_address">ADDRESS: <strong>
                        388 Greenwich Street New York, NY 10013,
                    </strong>
                    </li>
                    <li class="bank_swift_bank">
                        SWIFT/BIC CODE: <strong>
                            CITIUS33XXX
                        </strong> 
                    </li>
                </ul>
                <div v-if="Number(order[0].total/100)<=1000">
                    <h5 >
                    PayPal
                </h5>
                <ul>
                        <li>Paypal Account: 
                            <strong>
                                export@comlibra.com
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>s
<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'OrderReview',
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
