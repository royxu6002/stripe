<template>
    <div class="container register-page col-lg-8 col-md-8 col-sm-12 col-xs-12">
      <h4 class='mt-4 mb-4'>Welcome to register as a member!</h4>
      <div v-if="messages">
          <p class="alert alert-success">{{ messages }}</p>
      </div>
      <div class="form-group">
        <label for="first_name">First Name</label>
        <div v-if="errors">
          <p 
            v-for="(err, index) in errors.first_name"
            :key="index"
            class="alert alert-warning">
            {{ err }}
          </p>
        </div>
        <input type="text" name="customer.first_name" class="form-control" v-model="customer.first_name" required>
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <div v-if="errors">
          <p 
            v-for="(err, index) in errors.last_name"
            :key="index"
            class="alert alert-warning">
            {{ err }}
          </p>
        </div>
        <input type="text" name="last_name" class="form-control" v-model="customer.last_name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <div v-if="errors">
          <p 
            v-for="(err, index) in errors.email"
            :key="index"
            class="alert alert-warning">
            {{ err }}
          </p>
        </div>
        <input type="text" name="email" class="form-control" v-model="customer.email" required>
      </div>
      <div class="form-group">
        <label for="password" >Password</label>
        <div v-if="errors">
          <p 
            v-for="(err, index) in errors.password"
            :key="index"
            class="alert alert-warning">
            {{ err }}
          </p>
        </div>
        <input type="password" name="password" class="form-control" v-model="customer.password" required>
      </div>
      <div class="form-group">
        <label for="confirm_password">Confirm Password</label>
        <input type="password" name="confirm_password" class="form-control" v-model="customer.password_confirmation" required>
      </div>
      <button class="form-control btn btn-primary" @click="submitRegister">Submit</button>
    </div>
</template>
<script>
import apiUser from "../../api/User";

  export default {
    data() {
      return {
        customer: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        messages: '',
        errors: ''
      }
    },
    methods: {
      submitRegister() {
        this.messages = '';
        this.errors = '';
        apiUser.register(this.customer)
          .then(res => {
            if(res.data.errors) this.errors = res.data.errors;
            this.messages = res.data.msg;
            if(res.data.cle_store_token) {
              window.sessionStorage.setItem('cle_store_token', res.data.cle_store_token);
              this.$route.push('/login');
            }

          })
          .catch(err => {
            alert(err);
          })
      }
    }
  }
</script>
