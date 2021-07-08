<template>
    <div class="container mx-auto mt-5">
        <div class="row">
            <div class="container">
                 <div
                    v-for="category in product[0].categories"
                    :key="category.id">
                    <h2 v-text="category.name + ' | ' + product[0].name"></h2>
                </div>
            </div>
        </div>
        <div class="row products-show">
            <div class="col-6">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide center" v-for="(image, index) in product[0].images" :key=index>
                            <img :src="GLOBAL.baseUrl + image" alt="" style="width:100%; max-width: 456px;">
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="col-6 products-more-show">
                <div 
                    v-for="(image, i) in product[0].images"
                    :key="i">
                    <img :src="GLOBAL.baseUrl + image" 
                        width="128"
                        alt="">
                </div>
            </div>
        </div>

        <div>
            <div class="col-12">   
                <p  class="mt-3"
                    v-html="product[0].description"></p>

                <div>
                    <strong>
                       SKU Options:
                    </strong>
                    </div>
                <div>
                    <div 
                        class="mr-2 btn mt-2 price-wrap center"
                        :class="{active: skuId === sku.id}"
                        v-for="(sku, ind) in product[0].skus"
                        :key="ind">
                        <img 
                            :src="GLOBAL.baseUrl+sku.image[0]" 
                            alt="" 
                            width="180px">
                        <br>
                        {{sku.title}}
                        <br>
                        {{formatCurrency(sku.price)}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    name: 'Products.pdf',
    data() {
        return {
            skuId: null,
            skuIndex: null,
            skuPrice: null,
            skuImage: null,
        }
    },
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
.active {
    background-color: #3490dc !important;
    border-color: #3490dc !important;
}
.price-wrap {
    border: 1px solid #ccc;
    /* background-color: #3490dc;;
    color: white; */
}
.products-show {
    display: flex;
    align-items: center;
}
.products-more-show {
    display: flex;
    flex-wrap: wrap;
    
}
</style>