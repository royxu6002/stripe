<template>
    <div class="container col-lg-8 col-md-10 col-sm-12 col-xs-12">
        <h4 class="mt-4 mb-4">Reset the password</h4>
        <div v-if="messages">
            <p class="alert alert-info">
                {{ messages }}
            </p>
        </div>
        <div class="form-group">
            <label for="">email</label>
            <input type="text" class="form-control" v-model="customer.email" disabled>
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <div v-if="errors">
                <p 
                    v-for="(err, index) in errors.password" 
                    :key="index"
                    class="alert alert-warning">
                    {{ err }}
                </p>
            </div>
            <input type="password" class="form-control" v-model="customer.password">
        </div>
        <div class="form-group">
            <label for="">Password Confirmation</label>
            <input type="password" class="form-control" v-model="customer.password_confirmation">
        </div>
        <button class="btn btn-primary" @click="resetPassword">Submit</button>
        <p class="mt-3">
            <span>I would like drop the operation</span>
            <router-link class="pl-2" to="/login">Login</router-link>
        </p>

    </div>
</template>
<script>
import apiUser from "../../api/User";

export default {
    name: 'Token',
    data() {
        return {
            customer: {
                email: this.$route.params.email,
                password: '',
                password_confirmation: '',
                token: this.$route.params.token
            },
            messages: '',
            errors: ''
        }
    },
    methods: {
        resetPassword() {
            this.messages = '';
            this.errors = '';
            apiUser.reset(this.customer)
                .then(res => {
                    if(res.data.errors) this.errors = res.data.errors;
                    this.messages =  res.data.msg;
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

}
</script>
