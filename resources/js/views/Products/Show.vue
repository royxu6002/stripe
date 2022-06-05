<template>
    <div class="container mx-auto mt-5">
        <div class="row mb-3">
            <span class="mr-2">
                <router-link to="/home">Home </router-link>
            </span>
            <span class="mr-2">/</span>
             <span class="mr-2"
                    v-for="category in product[0].categories"
                    :key="category.id">
                    <router-link :to="{name: 'category', params: {category: category.slug}}">
                        {{ category.name }}
                    </router-link>
            </span>
            <span class="mr-2">/</span>
            <span
                v-text="product[0].name">
            </span> 
        </div>

        <div class="row">
        
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
               <!-- <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(image, index) in product[0].images" :key=index>
                            <img :src="GLOBAL.baseUrl + image" alt="" style="width:100%">
                        </div>
                    </div> -->
                    <!-- 如果需要分页器 -->
                    <!-- <div class="swiper-pagination"></div> -->
                    <!-- 如果需要导航按钮 -->
                    <!-- <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                --> 

                <!-- 适用carousel 更加直观的展示产品 -->
                <div class="carousel col-12">
                    <div class="carousel-inner  col-12">
                        <div class="carousel-item col-12">
                            <a href="">
                                <img :src="GLOBAL.baseUrl +product[0].images[position]" alt="" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="carousel-indicators col-12">
                        <div class="carousel-thumbnail" 
                            v-for="(image, index) in product[0].images" 
                            :key=index
                            @mouseenter="changeThumbnail(index)">
                            <a href="">
                                <img :src="GLOBAL.baseUrl + image" alt="">
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                 <p
                    v-text="product[0].name">
                </p>                

                <div class="price-label">
                     <span
                        v-if="skuPrice"
                        v-text="formatCurrency(skuPrice)"
                    ></span>
                    
                    <span
                        v-if="!skuPrice"
                        v-text="formatCurrency(product[0].price)"
                    ></span>
                </div>
                <hr>
                <div class="mt-3">
                    <p>
                        <strong>
                            Options:
                        </strong>
                    </p>
                     <div 
                        class="mr-2 btn mt-2 price-wrap"
                        :class="{active: skuId === sku.id}"
                        v-for="(sku, ind) in product[0].skus"
                        :key="ind"
                        @click="selectSku(sku, ind)">{{sku.title}}
                    </div>
                </div>
               

                <div class="mt-3">
                    <div v-if="skuPrice">
                        <img 
                            :src="GLOBAL.baseUrl+skuImage" 
                            alt="" 
                            width="180px">
                    </div>
                   
                </div>

                <div class="mt-4">
                     <button 
                        class="btn btn-primary btn-block add-cart btn-lg"
                        @click="addToCart(product[0].skus[skuIndex], product[0].name )">
                            ADD TO CART
                    </button>
                </div>
                
                <hr>
                <div>
                    <strong>Descriptions:</strong>
                    <p  class="mt-3"
                    v-html="product[0].description"></p>
                </div>
               
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    data() {
        return {
            skuId: null,
            skuIndex: null,
            skuPrice: null,
            skuImage: null,
            position: 0,
        }
    },
    computed: {
        product() {
            return this.$store.state.products.filter(p => p.slug == this.$route.params.slug );
        },
    },
    methods: {
        formatCurrency(amount) {
            amount = (amount / 100);
            return amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        },
        selectSku(sku, index) {
            this.skuId = sku.id;
            this.skuPrice = sku.price;
            this.skuIndex = index;
            this.skuImage = sku.image[0];
        },
        addToCart(sku, name, price) {
            if(!this.skuId) {
                alert('Please select a SKU to add to cart');
                return;
            }
            this.$store.commit('addToCart', { 'sku': sku, 'name': name })
        },
        changeThumbnail(i) {
            this.position = i;
        }
    },

    // 这是用 swiper来
    // mounted() {
    //     var mySwiper = new Swiper('.swiper-container',{
    //         loop : true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //             disabledClass: 'my-button-disabled',
    //         },
    //     })
    // },
    // watch: {
    //     product(value) {
    //         this.$nextTick(() => {
    //             var mySwiper = new Swiper('.swiper-container',{
    //                 loop : true,
    //                 pagination: {
    //                     el: '.swiper-pagination',
    //                 },
    //                 navigation: {
    //                     nextEl: '.swiper-button-next',
    //                     prevEl: '.swiper-button-prev',
    //                     disabledClass: 'my-button-disabled',
    //                 },
    //             })
    //         })
    //     }
    // }

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
.price-label {
    font-weight: 700;
    font-size: 26px;
}

.swiper-button-prev.swiper-button-next {
    height: 24px !important;
}
.carousel-inner .carousel-item{
    height: 100%;
    display: block;
}
.carousel-item img {
    width: 100%;
    height: auto;
}
.carousel-indicators  {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
}
.carousel-thumbnail {
     border: 1px solid rgb(244, 244,244);
}
.carousel-thumbnail img{
    width:  60px;
    height: 60px;
    float: left;
   
}

</style>