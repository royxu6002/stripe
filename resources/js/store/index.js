import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

let shopcart = JSON.parse(window.localStorage.getItem('cle_takeout')||'[]');

export default new Vuex.Store({
    state: {
        products: [],
        cart: shopcart,
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
    },
    modules: {
        auth,
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})