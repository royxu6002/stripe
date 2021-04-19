<template>
    <div class="login-pagen container col-lg-6 col-md-10 col-sm-12 col-xs-12">
        <h4 class="mt-4 mb-4">Welcome, thanks for using our application</h4>
        <div class="form-group">
            <label for="email">Email</label>
            <div v-if="errors">
                <p  
                    v-for="(err, index) in errors.email" 
                    :key="index" 
                    class="alert alert-warning">
                    <span>{{ err }}</span>
                </p>
            </div>
            <div v-if="messages">
                <p class="alert alert-info">
                    {{messages}}
                </p>
            </div>
            <input type="text" class="form-control" v-model="customer.email" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label> 
            <router-link to="/forgotpassword">
             <span class="ml-4">Forgot password?</span>
            </router-link>
            <div v-if="errors">
                <p  v-for="(pas, index) in errors.password" :key="index" class="alert alert-warning">
                    <span>{{ pas }}</span>
                </p>
            </div>
            <input type="password" class="form-control" v-model="customer.password" name="password">
        </div>
        <button class="btn btn-primary form-control" @click="loginUser">Submit</button>
        <p class="mt-3">
            I wanna be a member, please 
            <span class="ml-2">
               <router-link to="/register">Sign up</router-link>
            </span>
        </p>
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
            errors: '',
            messages: ''
        }
    },
    methods: {
        loginUser() {
            this.errors = '';
            this.messages = '';
            apiUser.login(this.customer)
                .then(res => {
                    if(res.data.errors) {
                        this.errors = res.data.errors;
                        return;
                        console.log(this.errors);
                    }
                    window.sessionStorage.setItem('cle_store_token', res.data.cle_store_token??null);
                    this.messages = res.data.msg;
                    this.$store.commit('auth/setUserData', res.data.user);
                    this.$router.push({name: 'UserProfile', params: {user: this.$store.state.auth.userInfo.id}});
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>
