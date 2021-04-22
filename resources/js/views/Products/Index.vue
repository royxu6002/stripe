<template>
<section data-name="portfolio-three-column">    
<div class="container">
  <!-- Page Heading -->
  <h1 class="my-4">
    View all products
  </h1>

  <div class="row">
    <!-- begin the loop v-for; -->
    <div class="col-lg-4 col-sm-6 mb-4"
      v-for="product in productsFilteredBy"
      :key="product.id"
    >
      <div class="card h-100">
        <a href="#" v-if="product.images">
          <img class="card-img-top" :src="GLOBAL.baseUrl+product.images[0]" alt="">
        </a>

        <div class="card-body">
          <h5 class="card-title">
            <a href="#"
              class="mr-2"
              v-for="category in product.categories"
              v-text="category.name"
              :key="category.id"
              @click="setCategory(category.name)"
            >
            </a>
          </h5>
          <p>
            <router-link
              class="card-text"
              :to="{name: 'products.show', params: {
                slug: product.slug
              }}"
              v-text="product.name"
            >
            </router-link>
          </p>
          <h5
            v-text="formatCurrency(product.price)"
          >
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</template>
<script>
export default {
    data() {
      return {
        category: ''
      }
    },
    methods: {
        formatCurrency(amount) {
            amount = (amount / 100);
            return amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        },
        setCategory(name) {
          this.category = name;
        }
    }, 
    computed: {
        productsFilteredBy() {
            return this.$store.state.products.filter(product => JSON.stringify(product.categories).indexOf(this.category) > -1);
        }
    }
}
</script>
