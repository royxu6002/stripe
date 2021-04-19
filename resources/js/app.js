require('./bootstrap');

import Vue from "vue";
import router from "./route/routes";
import store from "./store/index";

import baseUrl from "./api/baseUrl";
Vue.prototype.GLOBAL = baseUrl;

axios.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${window.sessionStorage.getItem('cle_store_token')}`;
    return config;
}, (err) => {
    return Promise.reject(err);
});

import App from "./App.vue";

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

