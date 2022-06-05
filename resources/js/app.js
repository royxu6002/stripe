//  这里已经包含了 axios, jquery
require('./bootstrap'); 
require('./css/iconfont');

import Vue from "vue";
import router from "./route/routes";
import store from "./store/index";


import baseUrl from "./api/baseUrl";
Vue.prototype.GLOBAL = baseUrl;
import billFrom from "./api/billFrom";
Vue.prototype.BILLFROM = billFrom;

axios.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${window.sessionStorage.getItem('cle_store_token')}`;
    return config;
}, (err) => {
    return Promise.reject(err);
});

import App from "./App.vue";
Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.dispatch('getProducts')
            .then(_ => {})
            .catch((error) => console.error(error));
        store.dispatch('getCart');
        store.dispatch('getCategories');
    }
}).$mount("#app");

