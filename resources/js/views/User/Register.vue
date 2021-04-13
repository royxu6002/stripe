<template>
    <div class="container register-page col-lg-8 col-md-8 col-sm-12 col-xs-12">
      <h4>this is register page</h4>
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" name="customer.first_name" class="form-control" v-model="customer.first_name">
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" name="customer.last_name" class="form-control" v-model="customer.last_name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" name="email" class="form-control" v-model="customer.email">
      </div>
      <div class="form-group">
        <label for="password" name="password">Password</label>
        <input type="password" class="form-control" v-model="customer.password">
      </div>
      <div class="form-group">
        <label for="confirm_password">Confirm Password</label>
        <input type="text" name="confirm_password" class="form-control" v-model="customer.password_confirmation">
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        customer: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
