<template>
    <div class="container card shadow register-page col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <h4 class="mt-3 mb-3 ml-3">Whom to receive the goods:</h4>
       <div class="billing-details-wrap">
                <div class="form-group col-6">
                      <label>First Name <span class="text-danger">*</span></label>
                      <div v-if="errors">
                        <p 
                          v-for="(err, index) in errors.first_name"
                          :key="index"
                          class="alert alert-warning">
                          {{ err }}
                        </p>
                      </div>
                      <input 
                          type="text" 
                          class="form-control"
                          id="first_name"
                          name="first_name"
                          v-model="customer.first_name"
                          placeholder="James">
                </div>

                <div class="form-group col-6">
                  <label for="last_name">Last name <span class="text-danger">*</span></label>
                    <div v-if="errors">
                    <p 
                      v-for="(err, index) in errors.last_name"
                      :key="index"
                      class="alert alert-warning">
                      {{ err }}
                    </p>
                  </div>
                  <input 
                      type="text"
                      class="form-control"
                      id="last_name"
                      name="last_name"
                      v-model="customer.last_name"
                      placeholder="Blunt">
                </div>
                
                <div class="form-group col-12">
                    <label for="company_name">Company name</label>
                    <span>(Optional)</span>
                    <input 
                        type="text"
                        class="form-control"
                        id="company_name"
                        name="company_name"
                        v-model="customer.company_name"
                        placeholder="Blunt">
                </div>

                <div class="form-group col-6">
                    <label for="phone">Phone <span class="text-danger">*</span></label>
                     <div v-if="errors">
                      <p 
                        v-for="(err, index) in errors.phone"
                        :key="index"
                        class="alert alert-warning">
                        {{ err }}
                      </p>
                    </div>
                    <input type="text"
                        class="form-control"
                        id="phone"
                        name="phone"
                        v-model="customer.phone"
                        placeholder="+190899888">
                    <span class="form-text text-muted">Need phone contact for goods collection</span>
                </div>
        
                <div class="form-group col-6">
                    <label for="address">Address <span class="text-danger">*</span></label>
                     <div v-if="errors">
                      <p 
                        v-for="(err, index) in errors.address"
                        :key="index"
                        class="alert alert-warning">
                        {{ err }}
                      </p>
                    </div>
                    <input type="text"
                        class="form-control"
                        id="address"
                        name="address"
                        v-model="customer.address"
                        placeholder="Room 43, Suit Job. Street 129">
                </div>
                
                <div class="form-group col-6">
                  <label for="city">City <span class="text-danger">*</span></label>
                     <div v-if="errors">
                      <p 
                        v-for="(err, index) in errors.city"
                        :key="index"
                        class="alert alert-warning">
                        {{ err }}
                      </p>
                    </div>
                    <input type="text"
                        class="form-control"
                        id="city"
                        name="city"
                        v-model="customer.city"
                        placeholder="New York">
                </div>
                <div class="form-group col-6">
                  <label for="state">State <span class="text-danger">*</span></label>
                     <div v-if="errors">
                      <p 
                        v-for="(err, index) in errors.state"
                        :key="index"
                        class="alert alert-warning">
                        {{ err }}
                      </p>
                    </div>
                    <input type="text"
                        class="form-control"
                        id="state"
                        name="state"
                        v-model="customer.state"
                        placeholder="California">
                </div>
                <div class="form-group col-6">
                   <label for="zip_code">Zip Code <span class="text-danger">*</span></label>
                    <div v-if="errors">
                      <p 
                        v-for="(err, index) in errors.zip_code"
                        :key="index"
                        class="alert alert-warning">
                        {{ err }}
                      </p>
                    </div>
                    <input type="text"
                        class="form-control"
                        id="zip_code"
                        name="zip_code"
                        v-model="customer.zip_code"
                        placeholder="786EJ">
                </div>
                <div class="form-group col-6">
                   <label for="country">Country <span class="text-danger">*</span></label>
                     <div v-if="errors">
                      <p 
                        v-for="(err, index) in errors.country"
                        :key="index"
                        class="alert alert-warning">
                        {{ err }}
                      </p>
                    </div>
                    <input type="text"
                        class="form-control"
                        id="country"
                        name="country"
                        v-model="customer.country"
                        placeholder="USA">
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
    name: 'CaddressCreate',
    data() {
      return {
        customer: {
          first_name: '',
          last_name: '',
          company: null,
          phone: '',
          address: '',
          city: '',
          state: '',
          zip_code: '',
          country: ''
        },
        errors: ''
      }
    },
    methods: {
      submit() {
        axios.post('/api/user/'+ this.$route.params.user+'/consigneeaddress/create', this.customer)
          .then(res => {
            if(res.data.errors) this.errors = res.data.errors;
            // 改变 state中的数据 只能通过 commit;
            if(res.data.address) {  
              this.$store.commit('auth/addUserConsigneeAddressData', res.data.address);
              this.$router.push({name: 'UserAddress', params: {user: this.$route.params.user}});
            }
          })
          .catch(err => {
            alert(err);
          })
      }
    }
  }
</script>
<style scoped>
.billing-details-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>