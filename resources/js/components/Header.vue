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
        <router-link :to="{name: 'UserProfile', params: {user: $store.state.auth.userInfo.id}}" class="nav-link" v-if="$store.state.auth.userInfo">Profile</router-link>
        <router-link to="/login" class="nav-link" v-else>Sign In</router-link>
        <router-link 
          class="py-2 d-md-inline-block"
          :to="{name: 'order.checkout'}">
          Cart ( {{ $store.state.cart.length }} ) Items        
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
</style>
