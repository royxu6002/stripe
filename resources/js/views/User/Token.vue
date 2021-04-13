<template>
    <div>
        <h4>this is email token page</h4>
        <div class="form-group">
            <label for="">email</label>
            <input type="text" class="form-control" v-model="customer.email">
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="customer.password">
        </div>
        <div class="form-group">
            <label for="">Password Confirmation</label>
            <input type="password" class="form-control" v-model="customer.password_confirmation">
        </div>
        <button class="btn btn-primary" @click="resetPassword">Submit</button>
        <p class="mt-3">
            <span>I would like drop the operation</span>
            <router-link to="/login">Login</router-link>
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
            }
        }
    },
    methods: {
        resetPassword() {
            apiUser.reset(this.customer)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

}
</script>
