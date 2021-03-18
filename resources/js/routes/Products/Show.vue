<template>
    <div class="container mx-auto">
        <div class="row mx-auto">
            <div class="col-4 col-md-4">
                <img src="http://placehold.it/700x400" alt="">
            </div>

            <div class="col-4 col-md-4">
                <h2
                    v-for="category in product[0].categories"
                    v-text="category.name"
                    :key="category.id"
                >
                </h2>
                <h1
                    v-text="product[0].name"
                >
                </h1>
                <p
                    v-text="product[0].description"
                ></p>
                <div>
                    <span
                        v-text="formatCurrency(product[0].price)"
                    ></span>

                    <button @click="$store.commit('addToCart', product[0])">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        product() {
            return this.$store.state.products.filter(p => p.slug == this.$route.params.slug );
        }
    },
    methods: {
        formatCurrency(amount) {
            amount = (amount / 100);
            return amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        }
    }
}
</script>
