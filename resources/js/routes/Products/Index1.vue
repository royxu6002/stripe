<template>
<section>
    <div class="container">
        <div v-if="!products.length">
            <div>
                <a href="">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
                </a>
                <div>
                    <h3>N/A</h3>
                    <h2>Loading</h2>
                    <p>$0.00</p>
                </div>
            </div>
        </div>

        <div v-else>
            <div
                class=""
                v-for="product in products"
                :key="product.id"
            >
                <router-link
                    :to="{name:'product.show', params:{
                        slug: product.slug
                    }}"
                >
                    <img src="https://dummyimage.com/420x260" alt="">

                </router-link>
                <div class="mt-4">
                    <h3
                        v-for="category in product.categories"
                        v-text="category.name"
                        :key="category.id"
                    >
                    </h3>
                    <h2
                        v-text="product.name"
                    >
                    </h2>
                    <p
                        v-text="formatCurrency(product.price)"
                    ></p>
                </div>
            </div>
            
        </div>
    </div>
</section>
</template>
<script>
export default {
    methods: {
        formatCurrency(amount) {
            amount = (amount / 100);
            return amount.toLocalString('en-US', {
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
