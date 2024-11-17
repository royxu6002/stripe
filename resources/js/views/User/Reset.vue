<template>
    <div class="container">
        <h4>this is reset password page</h4>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control">
        </div>
         <div class="form-group">
            <label for="password_confirm">Password Confirmation</label>
            <input type="password" class="form-control" v-model="customer.password_confirmation">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            customer: {
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    }
}
</script>
