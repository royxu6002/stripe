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
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
    <router-link 
      class="py-2 d-none d-md-inline-block"
      :to="{name: 'order.checkout'}"
      >Cart ( {{ $store.state.cart.length }} ) Items        
    </router-link>
  </nav>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
}
</style>
