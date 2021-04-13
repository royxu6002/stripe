<template>
    <div>
        <h4>this is show reset link email page </h4>
        <label for="email">Type your email to get reset password link</label>
        <input type="text" name="email" v-model="customer.email">
    </div>
</template>
<script>
export default {
    data() {
        return {
            customer: {
                email: ''
            }
        }
    }
}
</script>
