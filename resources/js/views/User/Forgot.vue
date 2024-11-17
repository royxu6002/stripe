<template>
    <div class="container">
        <div class="form-group col-lg-8 col-md-8 col-sm-12 col-xs-12 container">
            <h4 class="mt-4 mb-4">Forgot your password</h4>
             <label for="email">Email</label>
             <div v-if="errors">
                 <p 
                    v-for="(err, index) in errors.email"
                    :key="index"
                    class="alert alert-warning">
                     {{ err }}
                 </p>
             </div>
             <div v-if="messages">
                 <p class="alert alert-info">{{ messages }}</p>
             </div>
            <input type="text" name="email" v-model="customer.email" class="form-control" required>
            <button @click="sendLinkToEmail" class="btn btn-primary mt-3 form-control">Submit</button>
        </div>
    </div>
</template>
<script>
import apiUser from "../../api/User";

export default {
    data() {
        return {
            customer: {
                email: ''
            },
            errors: '',
            messages: ''
        }
    },
    methods: {
        sendLinkToEmail() {
            this.errors = '';
            this.messages = '';
            axios.post('/api/password/email', this.customer)
                .then(res => {
                    if(res.data.errors) this.errors = res.data.errors;
                    this.messages = res.data.msg;
                })
                .catch(error =>  {
                    console.log(error);
                })
        }
    }
    
 }
</script>
