require('./bootstrap');


import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import App from "./App.vue";

// 全局组件 Header, Footer;
import Header from "./components/Header";
Vue.component("Header", Header);
import Footer from "./components/Footer";
Vue.component("Footer", Footer);

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
});

let shopcart = JSON.parse(window.localStorage.getItem('cle_takeout')||'[]');

const store = new Vuex.Store({
    state: {
        products: [],
        cart: shopcart,
        order: {}
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
            if(productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++;
                window.localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
                return;
            }
            product.quantity = 1;
            state.cart.push(product);
            window.localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
            window.localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
            window.localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
        }
    },
    actions: {
        getCategories({commit}) {
            axios.get('/api/products')
            .then((response) => {
                commit('updateProducts', response.data);
            })
            .catch((error) => console.error(error));
        },
        clearCart({commit} ){
            commit('updateCart', []);
        }
    }
});

const app = new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.dispatch('getCategories')
            .then(_ => {})
            .catch((error) => console.error(error));
    }
}).$mount("#app");

