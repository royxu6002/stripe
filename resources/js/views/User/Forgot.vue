<template>
    <div class="container">
        <h4>Forgot your password</h4>
        <div class="form-group">
             <label for="email">Email</label>
             <p v-if="errors">{{errors.email}}</p>
            <input type="text" name="email" v-model="customer.email" class="form-control" required>
        </div>
        <button @click="sendLinkToEmail" class="btn btn-primary">Submit</button>
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
            errors: null
        }
    },
    methods: {
        sendLinkToEmail() {
            apiUser.forgot(this.customer.email)
                .then(res => {
                    console.log(res.data)
                })
                .catch(error =>  {
                    console.log(res.error);
                    this.errors = error;
                })
        }
    }
    
 }
</script>
