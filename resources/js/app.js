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

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        order: {}
    },
});

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");

