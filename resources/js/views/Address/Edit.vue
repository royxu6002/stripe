<template>
    <div class="container register-page col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <h4 class="mt-3 mb-3 ml-3">Billing to whom</h4>
       <div class="billing-details-wrap">
                <div class="form-group col-12">
                    <label>First Name <span class="text-danger">*</span></label>
                    <div v-if="errors.first_mame">
                      <!-- later -->
                    </div>
                    <input 
                        type="text" 
                        class="form-control"
                        id="first_name"
                        name="first_name"
                        v-model="customer.first_name">
                </div>
                <div class="form-group col-12">
                    <label for="last_name">Last name <span class="text-danger">*</span></label>
                    <input 
                        type="text"
                        class="form-control"
                        id="last_name"
                        name="last_name"
                        v-model="customer.last_name">
                </div>

                <div class="form-group col-12">
                    <label for="company_name">Company name</label>
                    <span>(Optional)</span>
                    <input 
                        type="text"
                        class="form-control"
                        id="company_name"
                        name="company_name"
                        v-model="customer.company_name">
                </div>

                <div class="form-group col-12">
                    <label for="phone">Phone <span class="text-danger">*</span></label>
                    <input type="text"
                        class="form-control"
                        id="phone"
                        name="phone"
                        v-model="customer.phone">
                    <span class="form-text text-muted">Need phone contact for goods collection</span>
                </div>
        
                <div class="form-group col-12">
                    <label for="address">Address <span class="text-danger">*</span></label>
                    <input type="text"
                        class="form-control"
                        id="address"
                        name="address"
                        v-model="customer.address">
                </div>

                <div class="form-group col-12">
                    <label for="city">City <span class="text-danger">*</span></label>
                    <input type="text"
                        class="form-control"
                        id="city"
                        name="city"
                        v-model="customer.city">
                </div>

                <div class="form-group col-12">
                    <label for="state">State <span class="text-danger">*</span></label>
                    <input type="text"
                        class="form-control"
                        id="state"
                        name="state"
                        v-model="customer.state">
                </div>

                <div class="form-group col-12">
                    <label for="zip_code">Zip Code <span class="text-danger">*</span></label>
                    <input type="text"
                        class="form-control"
                        id="zip_code"
                        name="zip_code"
                        v-model="customer.zip_code">
                </div>

                <div class="form-group col-12">
                    <label for="country">Country <span class="text-danger">*</span></label>
                    <input type="text"
                        class="form-control"
                        id="country"
                        name="country"
                        v-model="customer.country">
                </div>
                <div class="form-group col-12">
                  <button class="form-control btn btn-primary" @click="submit">Submit</button>
                </div>
            </div>
    </div>
</template>
<script>
import apiUser from "../../api/User";
  export default {
    data() {
      return {
        customer: {
          
        },
        errors: ''
      }
    },
    created() {
      axios.get('/api/user/'+this.$route.params.user+'/invoiceaddress/'+this.$route.params.address+'/show')
          .then(res => {
            this.customer = res.data;
            const nameGroup = this.customer.name.split(' ');
            this.customer.first_name = nameGroup[0]?? null;
            this.customer.last_name = nameGroup[1]?? null;

          })
          .catch(err => console.error(err))
    },
    methods: {
      submit() {
        axios.put('/api/user/'+ this.$route.params.user+'/invoiceaddress/' +this.$route.params.address + '/update', this.customer)
          .then(res => {
            console.log('hello');
            if(res.data.errors) this.errors = res.data.errors;
            // 改变 state中的数据 只能通过 commit
            if(res.data.address) {
              const index = this.$store.state.auth.userInfo.invoiceaddresses.findIndex(value => value.id == this.$route.params.address);
              const address = res.data.address;
              this.$store.commit('auth/updateUserInvoiceAddressData', {index, address});
              console.log(index);
              console.log(res.data.address);
            }
            this.$router.push({name: 'UserAddress', params: {user: this.$route.params.user}});
          })
          .catch(err => {
            console.log(err);
          })
      }
    },
  }
</script>
