<template>
    <div class="container">
        <h4 class="mt-3">My address list</h4>
        <div v-if="userInfo.invoiceaddresses" class="mt-3">
            <h3>Invoice address
            </h3>
            <router-link 
                class="btn btn-primary"
                :to="{name: 'AddressCreate', params: {
                    user: userInfo.id,
                }}">
                Create an new invoice address
            </router-link>
            <div 
                class="card mb-2" 
                v-for="(address, index) in userInfo.invoiceaddresses"
                :key="index"> 
                <div class="card-body">
                    <div v-if="address.company_name">{{address.company_name}}</div>
                    <div>{{address.name}}</div>
                    <div>{{address.phone}}</div>
                    <div>{{address.address}},{{address.city}},{{address.state}},{{address.zip_code}},{{address.country}}</div>
                    <router-link 
                        :to="{name: 'AddressEdit', params: {user: address.user_id, address: address.id}}" 
                        class="btn btn-primary">
                        Edit
                    </router-link>
                    <button class="btn btn-danger" @click="deleteInvoiceAdd(address.id)">Delete</button>
                </div>
            </div>
        </div>
        
        <div v-if="userInfo.consigneeaddresses" class="mt-3">
            <h3>Consignee address
            </h3>
            <span>: required if you would like to ship a different place not conform to your address in a formal invoice</span>
            <div 
                class="card mb-2" 
                v-for="(address, index) in userInfo.consigneeaddresses"
                :key="index"> 
                <div class="card-body">
                    <div v-if="address.company_name">{{address.company_name}}</div>
                    <div>{{address.name}}</div>
                    <div>{{address.phone}}</div>
                    <div>{{address.address}},{{address.city}},{{address.state}},{{address.zip_code}},{{address.country}}</div>
                    <button class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'address'+address.id">
                        Edit
                    </button>
                    
                    <div class="modal" 
                        :id="'address'+ address.id" 
                        tabindex="-1" 
                        :aria-labelledby="'address'+address.id+'Label'" 
                        aria-hidden="false">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" :id="'address'+address.id+'Label'">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                    </div>
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
        ...mapState('auth', ['userInfo'])
    },
    methods: {
       deleteInvoiceAdd(id) {
           axios.delete('/api/user/'+this.$route.params.user+'/invoiceaddress/'+id+'/delete')
            .then(res => {
                console.log(res.data);
                if(res.data.msg) {
                    let index = this.$store.state.auth.userInfo.invoiceaddresses.findIndex(add => add.id == id);
                    console.log(index);
                    this.$store.commit('auth/deleteUserInvoiceAddressData', {index});
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
</style>
