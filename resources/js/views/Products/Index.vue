<template>
<section data-name="portfolio-three-column">    
<div class="container">
  <!-- Page Heading -->
  <h1 class="my-4">
    View all products
  </h1>

   <div class="row mb-3 mt-4">
            <strong>
            <span >Category</span>
            </strong>
            <span class="mr-2">:</span>
             <span class="mr-2"
                    v-for="(category, index) in categories"
                    :key="index">
                    <router-link :to="{name: 'category', params: {category: category.slug}}">
                        {{ category.name }}
                    </router-link>
            </span>
        </div>
    

  <div class="row">
    <!-- 这是链接 /products 的展示页面, 目录展示页面在 文件夹 Category/Index.vue 下 -->
    <!-- begin the loop v-for; -->
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4"
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
              @click="SET_CATEGORY(category.name)"
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
import { mapGetters, mapMutations, mapState } from "vuex";

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
        ...mapMutations(['SET_CATEGORY']),
    }, 
    computed: {
        ...mapGetters(['productsFilteredBy']),
        ...mapState(['categories']),
    }
}
</script>
