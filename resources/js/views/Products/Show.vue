<template>
    <div class="container mx-auto mt-5">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(image, index) in product[0].images" :key=index>
                            <img :src="'http://shop.comlibra.com/' + image" alt="" style="width:100%">
                        </div>
                        
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h4
                    v-for="category in product[0].categories"
                    
                    :key="category.id"
                >
                <h2 v-text="category.name"></h2>
                </h4>

                <h1
                    v-text="product[0].name"
                >
                </h1>
                <p v-html="product[0].description"></p>
                <div>
                    <span
                        v-text="formatCurrency(product[0].price)"
                    ></span>
                </div>
                 <button @click="$store.commit('addToCart', product[0])">
                        Add To Cart
                    </button>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

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
        },
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        }
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container',{
            loop : true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    },
    watch: {
        product(value) {
            this.$nextTick(() => {
                var mySwiper = new Swiper('.swiper-container',{
                    loop : true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                })
            })
        }
    }

}
</script>
<style scoped>

</style>