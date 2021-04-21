<template>
<section data-name="portfolio-three-column">    
<div class="container">
  <!-- Page Heading -->
  <h1 class="my-4">Product index pages
    <small>List all products in cart!</small>
  </h1>

  <div class="row">
    <!-- begin the loop v-for; -->
    <div class="col-lg-4 col-sm-6 mb-4"
      v-for="product in $store.state.products"
      :key="product.id"
    >
      <div class="card h-100">
        <a href="#" v-if="product.images">
          <img class="card-img-top" :src="GLOBAL.baseUrl+product.images[0]" alt="">
        </a>

        <div class="card-body">
          <h4 class="card-title">
            <a href="#"
              v-for="category in product.categories"
              v-text="category.name"
              :key="category.id"
            >
            </a>
          </h4>
          <router-link
            class="card-text"
            :to="{name: 'products.show', params: {
              slug: product.slug
            }}"
            v-text="product.name"
          >
          </router-link>
          <h3
            v-text="formatCurrency(product.price)"
          >
          </h3>
        </div>
      </div>
    </div>

  </div>
  <!-- /.row -->

  <!-- Pagination -->
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </a>
    </li>
  </ul>

</div>
</section>
</template>
<script>
export default {
    methods: {
        formatCurrency(amount) {
            amount = (amount / 100);
            return amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        }
    }, 
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
}
</script>
