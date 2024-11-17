<template>
    <div class="container">
        <div v-if="userInfo.invoiceaddresses" class="mt-3">
            <div class="row">
                <div class="col-8">
                    <h5 class="mb-0">Invoice Address</h5>
                </div>
                <div class="col-4 text-right">
                    <router-link 
                        class="btn btn-primary mb-3"
                        :to="{name: 'AddressCreate', params: {
                            user: userInfo.id,
                        }}">
                        Create New
                    </router-link>
                </div>
            </div>
            <div 
                class="card mb-2" 
                v-for="(address, index) in invoiceaddresses"
                :key="index"> 
                <div class="card-body">
                    <div>
                        <div v-if="address.company_name">{{address.company_name}}</div>
                        <div>{{address.name}}</div>
                        <div>{{address.phone}}</div>
                        <div>{{address.address}},{{address.city}},{{address.state}},{{address.zip_code}},{{address.country}}</div>
                    </div>
                    <div>
                        <router-link 
                        :to="{name: 'AddressEdit', params: {user: userInfo.id, address: address.id}}" 
                        class="btn btn-primary mt-3">
                        Edit
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="userInfo.consigneeaddresses" class="mt-5">
            <div class="row">
                <div class="col-8">
                    <h5 class="mb-0">Consignee Address</h5>
                </div>
                <div class="col-4 text-right">
                    <router-link 
                        class="btn btn-primary mb-3"
                        :to="{name: 'CaddressCreate', params: {
                            user: userInfo.id,
                        }}">
                        Create New
                    </router-link>
                </div>
            </div>

            <div 
                class="card mb-2" 
                v-for="(address, index) in consigneeaddresses"
                :key="index"> 
                <div class="card-body">
                    <div>
                        <div v-if="address.company_name">{{address.company_name}}</div>
                        <div>{{address.name}}</div>
                        <div>{{address.phone}}</div>
                        <div>{{address.address}},{{address.city}},{{address.state}},{{address.zip_code}},{{address.country}}</div>
                        
                    </div>
                    <div>
                        <router-link 
                            :to="{name: 'CaddressEdit', params: {user: userInfo.id, address: address.id}}" 
                            class="btn btn-primary mt-3">
                            Edit
                        </router-link>
                    </div>
                    
                    <!-- <button 
                        class="btn btn-danger"  
                        @click="deleteConsigneeAdd(address.id)">Delete
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    name: 'UserAddress',
    data() {
        return {

        }
    },
    computed: {
        ...mapState('auth', ['userInfo']),
        consigneeaddresses() {
            return this.userInfo.consigneeaddresses;
        },
        invoiceaddresses() {
            return this.userInfo.invoiceaddresses;
        }
    },
    methods: {
       deleteInvoiceAdd(id) {
           axios.delete('/api/user/'+this.$route.params.user+'/invoiceaddress/'+id+'/delete')
            .then(res => {
                if(res.data.msg) {
                    this.$store.dispatch('auth/deleteUserInvoiceAddressData', {id});
                }
            })
            .catch(err => console.log(err))
       },
       deleteConsigneeAdd(id) {
           axios.delete('/api/user/'+this.$route.params.user+'/consigneeaddress/'+id+'/delete')
            .then(res => {
                if(res.data.msg) {
                    this.$store.dispatch('auth/deleteUserConsigneeAddressData', {id});
                }
            })
            .catch(err => console.log(err))
       }
    }
}
</script>
<style scoped>ex
.modal {
    display: true;
}
.card-body {
    display: flex;
    justify-content: space-between;
}
</style>
