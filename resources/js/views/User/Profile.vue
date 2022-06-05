<template>
  <div class="container">
    <div class="container-fluid d-flex align-items-center">
      <div class="row">
        <div class="col-lg-12 col-md-12 mt-3">
          <h5>Hello  {{ $store.state.auth.userInfo.name }}</h5>
          <p class="text-dark mt-0 mb-3">
            This is your profile page.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-$store.state.auth.userInfo shadow">
            <div class="card-body pt-sm-3 pt-md-4">
              <div class="text-center">
                <h3>
                  {{ profile.first_name }}  {{ profile.last_name }}
                </h3>
                <div class="h5 mt-4">
                  {{ profile.position }}
                  - {{ profile.company }}
                </div>
                <div>
                  {{ profile.address, }} {{ profile.city }}
                </div>
                <div>
                  {{ profile.state, }} {{ profile.zip_code, }} {{ profile.country }}
                </div>
                <div>
                  Phone: {{ profile.phone }}
                </div>
                <div>
                  {{ profile.email }}
                </div>
                <hr class="my-4" />
                <p>
                  {{ profile.about }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card shadow">
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                   <div class="row">

                    <div class="col-lg-6">
                      <div class="form-group has-label">
                        <div v-if="errors.first_name">
                          <div 
                            class="alert alert-warning"
                            v-for="(error, index) in errors.first_name" 
                            :key="index">{{ error }}</div>
                        </div>
                        <label class="form-control-label">First name</label>
                        <input
                          alternative=""
                          v-model="profile.first_name"
                          placeholder="First name"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div v-if="errors.last_name">
                          <div v-for="(error, index) in errors.last_name" 
                            class="alert alert-warning" 
                            :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Last name</label>
                          <input
                          alternative=""
                          v-model="profile.last_name"
                          placeholder="Last name"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div v-if="errors.phone">
                          <div v-for="(error, index) in errors.phone" 
                          class="alert alert-warning"
                          :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Phone</label>
                          <input
                          alternative=""
                          v-model="profile.phone"
                          value="user.phone"
                          placeholder="+8690"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Email address
                        </label>
                        <input
                          alternative=""
                          v-model="profile.email"
                          value=""
                          placeholder="jesse@example.com"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                          readonly
                        />
                      </div>
                    </div>

                  </div>
                 
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Position
                          </label>
                        <input
                          alternative=""
                          v-model="profile.position"
                          placeholder="Purchase Manager"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Company
                          </label>
                        <input
                          alternative=""
                          v-model="profile.company"
                          placeholder="Company"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <hr class="my-4" />
                <h6 class="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div v-if="errors.address">
                          <div v-for="(error, index) in errors.address" 
                          class="alert alert-warning"
                          :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Address
                          </label
                        >
                        <input
                          alternative=""
                          v-model="profile.address"
                          placeholder="Home Address"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div v-if="errors.city">
                          <div v-for="(error, index) in errors.city" 
                          class="alert alert-warning"
                          :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >City
                          </label>
                        <input
                          alternative=""
                          placeholder="City"
                          v-model="profile.city"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div v-if="errors.state">
                          <div v-for="(error, index) in errors.state" 
                          class="alert alert-warning"
                          :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >State
                          </label>
                        <input
                          alternative=""
                          v-model="profile.state"
                          placeholder="State"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                  
                  </div>
                  
                  <div class="row">
                    <div class="col-lg-6">
                      <div v-if="errors.zip_code">
                          <div v-for="(error, index) in errors.zip_code" 
                          class="alert alert-warning"
                          :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Postal code
                          </label>
                          <input
                          alternative=""
                          v-model="profile.zip_code"
                          placeholder="Postal code"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div v-if="errors.country">
                          <div v-for="(error, index) in errors.country" 
                          class="alert alert-warning"
                          :key="index">{{ error }}</div>
                        </div>
                      <div class="form-group has-label">
                        <label class="form-control-label"
                          >Country
                          </label>
                        <input
                          alternative=""
                          v-model="profile.country"
                          placeholder="California"
                          class="form-control form-control-alternative"
                          aria-describedby="addon-right addon-left"
                        />
                      </div>
                    </div>

                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">About me &| company</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <div class="form-group has-label">
                     <textarea
                        rows="4"
                        v-model="profile.about"
                        class="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="pl-lg-4">
                    <a href="#!" class="btn btn-primary form-control" @click="submitProfile()">Set Profile</a>
                  </div>
              </form>
            </div>
            <!--v-if--><!--v-if-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiUser from '../../api/User';
import mapGetters from 'vuex';

export default {
  name: "UserProfile",
  data() {
    return {
      profile: {
        first_name: '',
        last_name : '',
        phone     : '',
        email     : '',
        about     : '',
        position  : '',
        company   : '',
        address   : '',
        city      : '',
        state     : '',
        zip_code  : '',
        country   : '',   
      },
      errors: '',
    };
  },
  methods: {
    submitProfile() {
      apiUser.update(this.$route.params.user, this.profile)
        .then(res => { 
           if(res.data.errors) {
                this.errors = res.data.errors;
                return;
                console.log(this.errors);
            }
          if(res.data.status === 'succ') {
            alert('update successfully');
          } 
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  created() {
    axios.get('/api/user/'+this.$route.params.user+'/get')
      .then(res => {
        this.profile = JSON.parse(JSON.stringify(res.data));
        const nameGroup =  res.data.name.split(' ');
        this.profile.first_name = nameGroup[0] ?? '';
        this.profile.last_name = nameGroup[1] ?? '';
        return;
      })
      .catch(err => console.error(err))
  },
  watch: {
    'profile.first_name': (value) => {
      this.profile.first_name =  value;
    },
    'profile.last_name': (value) => {
      this.profile.last_name = value;
    }
  }
};
</script>
