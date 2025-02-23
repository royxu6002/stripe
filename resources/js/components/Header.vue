<template>
  <div class="wsmenucontainer" :class="{'wsactive': iswsActive == true}">
    <!-- Mobile Header -->
    <div class="wsmobileheader clearfix">
      <a id="wsnavtoggle" class="wsanimated-arrow" @click="iswsActive = !iswsActive">
        <span></span>
      </a>

      <span class="smllogo">
        <img src="./css/logo.svg" width="80" alt="">
      </span>

      <div class="wssearch clearfix"
        :class="{'wsopensearch': issearchActive == true}">
        <i class="wsopensearch fas fa-search" 
         @click="issearchActive = true"></i>

        <i class="wsclosesearch fas fa-times"
         @click="issearchActive = false">
        </i>
        <div class="wssearchform clearfix">
          <form>
            <input type="text" 
              placeholder="Search Here"
              v-model="searchWord"
              @keyup="submitSearch()">
          </form>
        </div>
      </div>
    </div>
   
    <div class="headerfull">
      <div class="wsmain clearfix">
        <div class="smllogo">
          <router-link to="/home">
            <img src="./css/logo.svg" alt="" width="80">
          </router-link>
        </div>
        <nav class="wsmenu clearfix" style="height: 100%;">
          <div class="overlapblackbg"></div>
          <ul class="wsmenu-list">
            <li aria-haspopup="true">
              <span 
              class="wsmenu-click" 
              :class="{ 'ws-activearrow': iswholeDartmentActive == true  }"
              @click="iswholeDartmentActive = !iswholeDartmentActive">
              <i class="wsmenu-arrow"></i>
              </span>
              <a
                href="#"
                class="navtext"><span>Shop By</span> <span>Department</span>
              </a>
              <div class="wsshoptabing wtsdepartmentmenu clearfix" 
                :style="{display: iswholeDartmentActive == true || iswsActive == false? 'block': 'none'}">
                <div class="wsshopwp clearfix" style="height: auto;">
                  <ul class="wstabitem clearfix">
                    <li 
                      :class="{'wsshoplink-active': 3 == isActive}" 
                      @mouseenter="toggleClass(3)">
                      <span class="wsmenu-click02" 
                        :class="{'ws-activearrow02': isArrowActive == 2 }" 
                        @click="toggleSubmenu(2)"><i class="wsmenu-arrow"></i>
                      </span>
                      <a
                        href="#">
                        <i class="fas fa-balance-scale"></i>
                        Weight Scales
                      </a>

                      <div class="wstitemright clearfix" :style="{display: isArrowActive ==2? 'block':''}">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-3 col-md-12 clearfix">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Household scale</li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'connected-bathroom-scale'}, }">
                                    Connected Bathroom Scale
                                   </router-link>
                                </li>
                                <li>
                                   <router-link :to="{ name: 'category', params: {category: 'bathroom-scale'}, }">
                                    Bathroom Scale
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'kitchen-scale'}, }">
                                    Kitchen Scale
                                  </router-link>
                                </li>
                                <li>
                                   <router-link :to="{ name: 'category', params: {category: 'luggage-scale'}, }">
                                    Luggage Scale
                                   </router-link>
                                </li>
                                <li>
                                   <router-link :to="{ name: 'category', params: {category: 'pocket-scale'}, }">
                                    Pocket Scale
                                   </router-link>
                                </li>
                                
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12 clearfix">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Retail Scale</li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'tabletop-price-scale'}, }">
                                    Tabletop Price Scale
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'platform-price-scale'}, }">
                                    Platform Price Scale
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'barcode-printing-scale'}, }">
                                    Barcode Printing Scale
                                   </router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12 clearfix">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Industrial Scale</li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'floor-scale'}, }">
                                    Floor Scale
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'crane-scale'}, }">
                                    Crane Scale
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'roller-conveyor-scale'}, }">
                                    Roller Conveyor Scale
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'height-scale'}, }">
                                    Hospital Height Scale
                                   </router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12 clearfix">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Spare Parts</li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'load-cell'}, }">
                                    Load Cell
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'battery'}, }">
                                    Battery
                                   </router-link>
                                </li>
                                <li>
                                  <router-link :to="{ name: 'category', params: {category: 'other-scale-parts'}, }">
                                    Other Scale Parts
                                   </router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-6 wstadsize01 clearfix"><a
                                href="#"><img
                                  src="" alt=""></a></div>
                            <div class="col-lg-6 wstadsize02 clearfix"><a
                                href="#"><img
                                  src="" alt=""></a></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li :class="{'wsshoplink-active': 4 == isActive}" @mouseenter="toggleClass(4)">
                      <span class="wsmenu-click02"
                      :class="{'ws-activearrow02': isArrowActive == 3 }" 
                        @click="toggleSubmenu(3)">
                        <i class="wsmenu-arrow"></i>
                      </span>
                      <a
                        href="#"><i
                          class="fas fa-utensils"></i>Home &amp; Kitchen</a>
                      <div class="wstitemright clearfix kitchenmenuimg" 
                      :style="{display: isArrowActive ==3? 'block':''}">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-3 col-md-12">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Home Appliances</li>
                                <li>
                                  <router-link :to="{name: 'category', params: {category: 'bathroom-scale'},}">
                                      Bathroom Scale
                                  </router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Kitchen Appliances</li>
                                <li>
                                   <router-link
                                    :to="{name: 'category', params: {category: 'kitchen-scale'},}">Kitchen Scale
                                  </router-link>
                                </li>
                                <li>
                                 <router-link
                                    :to="{name: 'category', params: {category: 'timer'},}">Timer
                                  </router-link>
                                </li>
                                <li>
                                   <router-link
                                    :to="{name: 'category', params: {category: 'blender'},}">Blender
                                  </router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li :class="{'wsshoplink-active': 5 == isActive}" @mouseenter="toggleClass(5)">
                      <span class="wsmenu-click02"
                        :class="{'ws-activearrow02':isArrowActive == 4}"
                        @click="toggleSubmenu(4)">
                        <i class="wsmenu-arrow"></i>
                      </span>
                        <a
                        href="#"><i
                          class="fas fa-tv"></i>Electronics Appliances</a>
                      <div class="wstitemright clearfix" :style="{display: isArrowActive ==4? 'block':''}">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-3 col-md-12">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Phones Accessories</li>
                                <li>
                                  <router-link :to="{name: 'category', params: {category: 'live-streaming'},}">
                                      Live Streaming
                                  </router-link>
                                </li>
                                <li>
                                  <router-link :to="{name: 'category', params: {category: 'wireless-earphone'},}">
                                      Wireless Earphone
                                  </router-link>
                                </li>
                                <li>
                                  <router-link :to="{name: 'category', params: {category: 'phone-radiator'},}">
                                      Phone Radiator
                                  </router-link>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Wearable Device</li>
                                <li>
                                  <router-link :to="{name: 'category', params: {category: 'activity-tracker'},}">
                                      Activity Tracker
                                  </router-link>
                                </li>
                             
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">
                                  Computer Accessories
                                </li>
                                <li>
                                  <router-link :to="{
                                    name: 'category', params: {category: 'hanging-light-bar'},
                                  }">
                                    Hanging Light Bar
                                  </router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
               
                    <li :class="{'wsshoplink-active': 7 == isActive}" @mouseenter="toggleClass(7)">
                      <span class="wsmenu-click02"
                      :class="{'ws-activearrow02': isArrowActive == 5}"
                        @click="toggleSubmenu(5)">
                        <i class="wsmenu-arrow">
                        </i>
                        </span>
                        <a
                        href="#"><i
                          class="fas fa-heartbeat"></i>Health Care Products</a>
                      <div class="wstitemright clearfix wstpngsml" 
                      :style="{display: isArrowActive ==5? 'block':''}">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-3 col-md-12">
                              <ul class="wstliststy02 clearfix">
                                <li class="wstheading clearfix">Personal Care</li>
                                <li>
                                  <router-link :to="{name: 'category', params: {category: 'oral-care'},}">
                                      Oral <span class="wstmenutag bluetag">Popular</span>
                                  </router-link>
                                  
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="wssearchbar clearfix">
              <form class="topmenusearch">
                <input placeholder="Search Product By Name, Category..."
                  v-model="searchWord">
                <button class="btnstyle" @click.prevent="submitSearch()"><i class="searchicon fas fa-search"></i></button>
              </form>
            </li>

            <li class="wscarticon clearfix">
              <router-link :to="{name: 'order.checkout'}">
                <svg 
                  class="icon svg-icon"    aria-hidden="true">
                  <use xlink:href="#icon-gouwuche"></use>
                </svg>
                
                <em class="roundpoint">
                   {{ $store.state.cart.length }}
                </em>
          
                <span class="hidetxt">
                  Items In Cart
                </span>
              </router-link>

            </li>

            <li aria-haspopup="true"          
              class="wsshopmyaccount" 
              v-if="$store.state.auth.userInfo">
                <span class="wsmenu-click" 
                  :class="{'ws-activearrow': isaccountActive == true }"
                  @click=" isaccountActive = !isaccountActive">
                  <i class="wsmenu-arrow"></i>
                </span>

                <a
                  href="#">
                  <svg class="icon svg-icon wsmenu-arrow" aria-hidden="true">
                  <use xlink:href="#icon-login"></use>
                  </svg> My&nbsp;Account
                </a>

              <ul class="sub-menu"
                :style="{display: isaccountActive == true && iswsActive == true?'block':''}">
                <li>
                  <router-link 
                    :to="{name: 'UserProfile', params:{user: $store.state.auth.userInfo.id},}">
                    View Profile
                  </router-link>
                </li>

                <li>
                  <router-link :to="{name: 'UserOrder', params: {user: $store.state.auth.userInfo.id},}">
                    My Order
                  </router-link>
                </li>

                <li>
                  <router-link :to="{name: 'UserAddress', params: {user: $store.state.auth.userInfo.id},}">
                    My Address
                  </router-link>
                </li>

                <li>
                  <a @click="signOut()">
                    Logout
                  </a>
                </li>
              </ul>
            </li>

            <li v-else class="wsshopmyaccount">
              <router-link class="nav-link" to="/login">
                <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-md-log-in"></use></svg
                >Sign In/Up
              </router-link>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Header",
  data() {
    return {
      /** 电脑端: 在单独 department 切换 */ 
      isActive: 1, 
      /** off-canvas 开关 */
      iswsActive: false,
      /** 移动端: 在单独 department 开关 */ 
      isArrowActive: 1,
      /** 移动端: 整个 department 显示与否*/
      iswholeDartmentActive: false,
      isaccountActive: false,
      issearchActive:  false,
      searchWord: '',
    };
  },
  methods: {
    signOut() {
      sessionStorage.clear();
      // {}, js 中 空对象和空是不等的;
      this.$store.commit('auth/setUserData', '');
      this.$router.replace('/login');
    },
    toggleClass(x) {
      this.isActive = x;
    },
    toggleSubmenu(x) {
      if(this.isArrowActive == x) {
        this.isArrowActive = -1;
      } else {
        this.isArrowActive = x;
      }
    },
    switchSearch(x) {
      this.issearchActive = x;
    },
    submitSearch() {
      let i = this.searchWord.trim().toLowerCase();
      this.$store.commit('menu/setsearchWord', i);
      this.$router.replace({name: 'products.index', query: {search: i}});
    },
  },
  watch: {
    $route(value) {
      if (value) {
        this.iswsActive = false;
      }
    },
  },
};
</script>
<style scoped>
@import 'https://use.fontawesome.com/releases/v5.7.2/css/all.css';
@import './css/webslidemenu.css';
@import './css/fade-down.css';
@import './css/white-gry.css';
@import './css/demo.css';

.icon {
  width: 2em;
  height: 2em;
  vertical-align: center;
  fill: #4889f3;
  overflow: hidden;
}

</style>
