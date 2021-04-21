<template>
  <nav class="nav-container container">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">ICON</a>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/products" class="nav-link" data-toggle="dropdown">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link">Users</router-link>
      </li>
    </ul>
    
    <div class="nav-container-right">
        <router-link :to="{name: 'UserProfile', params: {user: $store.state.auth.userInfo.id}}" class="nav-link" v-if="$store.state.auth.userInfo">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-login"></use>
          </svg>
          <span>Profile</span>
        </router-link>
        
        <router-link to="/login" class="nav-link" v-else>
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-md-log-in"></use>
          </svg>Sign In/Up
        </router-link>

        <router-link 
          class="py-2 d-md-inline-block"
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
