<template>
  <nav class="nav-container container">
      <router-link to="/home" class="nav-link">
        <img src="https://comlibra.com/images/logo.svg" width="66">
      </router-link>
      
    <div class="nav-container-right">
        <ul style="display: flex; justify-content: space-between;">
         <li>
            <router-link 
              class="nav-link" 
              :to="{name: 'order.checkout'}">
              <svg class="icon svg-icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche"></use>
            </svg> ( {{ $store.state.cart.length }} ) Items 
            </router-link>
          </li>
          <li  v-if="$store.state.auth.userInfo">
             <router-link class="nav-link" :to="{name: 'UserProfile', params: {user: $store.state.auth.userInfo.id}}">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-login"></use>
              </svg>
              <span>Profile</span>
            </router-link>
          </li>
          <li v-else>
            <router-link  class="nav-link" to="/login" >
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-md-log-in"></use>
              </svg>Sign In/Up
            </router-link>
          </li>
           <li>
            <!-- <router-link to="/products" class="nav-link" >
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-chanpin"></use>
              </svg>
              <span>Products</span>
            </router-link> -->
            <a class="nav-link" href="#">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-chanpin"></use>
              </svg>
              <span>Products</span>
            </a>
            
            <div class="submenu">
              <ul>
                <!-- 动态从数据库里面那产品分类, 或者考虑用数组排重来拿到数据 -->
                <li v-for="(cat, index) in categories" :key=index>
                  <router-link :to="{name: 'category', params: {category: cat.slug}}">
                    {{ cat.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
    </div> 
  </nav>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Header",
  methods : {
    ...mapMutations(['SET_CATEGORY']),
  },
  computed: {
    ...mapState(['categories'])
  }
};
</script>
<style scoped>
.nav-container{
  display: flex;
  justify-content: space-between;
}

.nav-container-right{
  display: flex;
  justify-content: space-between;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: center;
  fill: rgba(138, 114, 245, 0.68);
  overflow: hidden;
}

.nav-container-right ul {
  list-style: none;
}
.nav-container-right ul li {
  position: relative;
}
.nav-container-right ul li:hover a{
  background-color: #3490dc;
  color: #fff;
}
.nav-container-right ul li:hover .icon {
  fill: rgb(254, 254, 255);
}

.submenu {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  z-index: 100;
}

.nav-container-right>ul>li:hover .submenu{
  height: auto;
}

.submenu>ul {
  list-style: none;
  margin: 0 !important;
  transform: translateY(-100%);
  transition: all 1s ease;
  padding: 0;
  height: 0;
} 

.nav-container-right>ul>li:hover .submenu>ul {
  transform: translateY(0);
}

.submenu>ul>li {
  float: left !important;
  border-top: 1px solid rgb(255, 255, 255);
  width: 100%;
}

.submenu>ul>li>a {
  display: block;
  background-color: #3490dc;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 1s ease-in-out;
}

.submenu>ul>li>a:hover {
  background-color: rgba(138, 114, 245, 0.68);
}


</style>
