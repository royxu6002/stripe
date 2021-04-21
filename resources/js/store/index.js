import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        GET_CART(state, cart) {
            state.cart = cart;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
            if(productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++;
                localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
                return;
            }
            product.quantity = 1;
            // 如果直接存储 product 对象, computed 不能侦测到 cart 的改变, 通过 JSON.stringify转字符串, 在转 json 对象, 就可以被侦测的;
            // state.cart.unshift(product); 
            state.cart.unshift(JSON.parse(JSON.stringify(product)));
            localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
            localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
        },
        updateCart(state, cart) {
            state.cart = cart;
            localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
        },
        updateQuantity(state, {index, quantity}) {
            state.cart[index].quantity = quantity;
            localStorage.setItem('cle_takeout', JSON.stringify(state.cart));
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
        getCart({commit}) {
            let cart =  JSON.parse(localStorage.getItem('cle_takeout')||'[]');
            commit('GET_CART', cart)
        },
        clearCart({commit}){
            commit('updateCart', []);
        },
        setQuantity({commit}, payload) {
            commit('updateQuantity', payload);
        }
    },
    modules: {
        auth,
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})