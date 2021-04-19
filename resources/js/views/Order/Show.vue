<template>
    <div>
        <h4>Dear  {{userInfo.name}} </h4>
        Your purchase order ID is  {{order[0].id}},
        total invoice value of {{order[0].total/100 | myCurrency}}, Dated on {{order[0].created_at}}
       
       <div>
           <h5>Our Bank Details:</h5>
            <h3 class="wc-bacs-bank-details-account-name">EPOS Uhren AG, 2543 Lengnau, Schweiz:</h3>
            <ul class="wc-bacs-bank-details order_details bacs_details">
                <li class="bank_name">Bank: <strong>Berner Kantonalbank</strong></li>
                <li class="account_number">Account number: <strong>30-106-9</strong></li>
                <li class="sort_code">Sort code: <strong>790</strong></li>
                <li class="iban">IBAN: <strong>CH88 0079 0016 9323 3378 7</strong></li>
                <li class="bic">BIC: <strong>KBBECH22</strong></li>
            </ul>
       </div>
        <div class="container row">
            <div v-if="order[0].invoice_address_id" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h4 class="mt-3">Bill To:</h4>
                <div v-if="invoiceAddress(order[0].invoice_address_id)[0].company_name">{{ invoiceAddress(order[0].invoice_address_id)[0].company_name }}</div>
                {{ invoiceAddress(order[0].invoice_address_id)[0].address }}, {{ invoiceAddress(order[0].invoice_address_id)[0].city }}, {{ invoiceAddress(order[0].invoice_address_id)[0].state }}, {{ invoiceAddress(order[0].invoice_address_id)[0].zip_code }}, {{ invoiceAddress(order[0].invoice_address_id)[0].country }}
                <div>{{ invoiceAddress(order[0].invoice_address_id)[0].name }}</div>
                <div>{{ invoiceAddress(order[0].invoice_address_id)[0].phone }}</div> 
            </div>

            <div v-if="order[0].consignee_address_id" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h4 class="mt-3">Ship to:</h4>
                <div v-if="consigneeAddress(order[0].consignee_address_id)[0].company_name">{{ consigneeAddress(order[0].consignee_address_id)[0].company_name }}</div>
                {{ consigneeAddress(order[0].consignee_address_id)[0].address }}, {{ consigneeAddress(order[0].consignee_address_id)[0].city }}, {{ consigneeAddress(order[0].consignee_address_id)[0].state }}, {{ consigneeAddress(order[0].consignee_address_id)[0].zip_code }}, {{ consigneeAddress(order[0].consignee_address_id)[0].country }}
                <div>{{ consigneeAddress(order[0].consignee_address_id)[0].name }}</div>
                <div>{{ consigneeAddress(order[0].consignee_address_id)[0].phone }}</div> 
            </div>
        </div>
        <div class="container mt-4">
            <h4>Order details:</h4>
            <small>Reference id: {{order[0].transaction_id}},</small>
            <table class="table">
                <tr>
                    <th>Item</td>
                    <th>Qty</td>
                    <th>Price</th>
                </tr>
                <tr v-for="(product, index) in order[0].products"
                    :key="index">
                    <td>{{ product.name }}</td>
                    <td>{{ product.pivot.quantity }}</td>
                    <td>{{ lineTotal(product) | myCurrency }}</td>
                </tr>
                <tr class="font-weight-bold">
                    <td>
                        Total
                    </td>
                    <td>
                        {{ orderQuantity(order[0].products) }}
                    </td>
                    <td>
                        {{ orderTotal(order[0].products) | myCurrency }}
                    </td>
                </tr>
        </table>

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
        ...mapGetters('auth', ['userOrders']),
        ...mapState('auth', ['userInfo']),
        order() {
            return this.userOrders.filter(order => order.id == this.$route.params.order);
        },
    },
    methods: {
        lineTotal(item) {
            return item.price * item.pivot.quantity/100;
        },
        orderQuantity(p) {
            return p.reduce((acc,item) => acc + item.pivot.quantity, 0);
        },
        orderTotal(p) {
            return p.reduce((acc, item) => acc + (item.pivot.quantity * item.price)/100, 0);
        },
        invoiceAddress(id) {
            return this.userInfo.invoiceaddresses.filter(add => add.id == id);
        },
        consigneeAddress (id) {
            return this.userInfo.consigneeaddresses.filter(add => add.id == id);
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
