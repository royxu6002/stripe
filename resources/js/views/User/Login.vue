<template>
    <div class="login-pagen container col-lg-8 col-md-10 col-sm-12 col-xs-12">
        <h4 class="mt-4 mb-3">Welcome, thanks for using our application</h4>
        <div class="form-group">
            <label for="email">Email</label>
            <p v-if="errors.email">{{errors.email}}</p>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="password">Password</label> 
            <router-link to="/forgotpassword">
             <span class="ml-4">Forgot password?</span>
            </router-link>
            <p v-if="errors.password">{{errors.password}}</p>
            <input type="password" class="form-control">
        </div>
        <button class="btn btn-primary" @click="login">Submit</button>
        <p class="mt-3">
            I wanna be a member, please 
            <span class="ml-3">
               <router-link to="/register">Sign up</router-link>
        </span>
        </p>
        <!-- <div class="socialization-button">
            <span @click="loginSocial">Facebook</span>
            <span>Twitter</span>
            <span>Linkedin</span>
            <span>Github</span>
        </div> -->
    </div>
</template>
<script>
import apiUser from "../../api/User";

export default {
    data() {
        return {
            customer: {
                email: '',
                password: ''
            },
            errors: {
            }
        }
    },
    methods: {
        // loginSocial() {
        //     apiUser.login()
        //         .then(res => res.data)
        //         .catch(err => alert(err))
        // },
        login() {
            apiUser.login(this.customer)
                .then(res => {
                    console.log(res.data);
                    window.sessionStorage.setItem('cle_store_token', res.data.cle_store_token);
                })
                .catch(err => {
                    this.errors = err;
                })
        }
    }
}
</script>
