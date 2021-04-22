<template>
  <nav class="nav-container container">
      <router-link to="/home" class="nav-link">
        <img src="https://comlibra.com/images/logo.svg" width="66">
      </router-link>
      
    
    <div class="nav-container-right">
         <router-link to="/products" class="nav-link" >
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-chanpin"></use>
          </svg>
          <span>Products</span>
         </router-link>

        <router-link class="nav-link" :to="{name: 'UserProfile', params: {user: $store.state.auth.userInfo.id}}" v-if="$store.state.auth.userInfo">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-login"></use>
          </svg>
          <span>Profile</span>
        </router-link>
        
        <router-link  class="nav-link" to="/login" v-else>
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-md-log-in"></use>
          </svg>Sign In/Up
        </router-link>

        <router-link 
          class="nav-link" 
          :to="{name: 'order.checkout'}">
          <svg class="icon svg-icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg> ( {{ $store.state.cart.length }} ) Items        
        </router-link>
    </div>
    
  </nav>
</template>
<script>
export default {
  name: "Header",
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
  fill: rgba(153, 135, 235, 0.68);
  overflow: hidden;
}
</style>
