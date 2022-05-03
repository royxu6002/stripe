<template>
<section class="product-index-page">    
<div class="container">
  <!-- Page Heading -->
    <span  style="line-height: 28px; font-size: 16px;">All Categories ></span>
    <span> View all {{$route.params.category}} products</span>
     <div class="mb-4" style="border-top: 1px solid rgb(244, 244, 244);border-bottom: 1px solid rgb(244, 244, 244); line-height: 40px; ">
            <strong>
            <span>Category:</span>
            </strong>
             <span style="margin-left: 20px;"
                    v-for="(category, index) in categories"
                    :key="index">
                    <router-link :to="{name: 'category', params: {category: category.slug}}">
                        {{ category.name }}
                    </router-link>
            </span>
        </div>

  <div class="row">
    <!-- begin the loop v-for; -->
    <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
      v-for="(product, index) in productsFilteredBy"
      :key="index"
    >
      <div class="card h-100">
        <a href="#" v-if="product.images">
          <img class="card-img-top" :src="GLOBAL.baseUrl+product.images[0]" alt="">
        </a>

        <div class="card-body">
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
import { mapState } from 'vuex';

export default {
    name: 'category',
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
    }, 
    computed: {
        productsFilteredBy() {
          return this.$store.state.products.filter((product) => JSON.stringify(product.categories).indexOf(this.$route.params.category) > -1);
        },
        ...mapState(['categories']),
    }
}
</script>
