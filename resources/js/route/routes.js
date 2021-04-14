import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const guest = (to, from, next) => {
    if(!window.sessionStorage.getItem('cle_store_token')) return next();
    next('/');
};
  
const auth = (to, from, next) => {
    if(window.sessionStorage.getItem('cle_store_token')) return next();
    console.log('here');
    next({name: 'Login'});
};

const routes =  [
    {
        path: '/',
        name: 'products.index',
        component: () => import('../views/Products/Index.vue')
    },
    {
        path: '/products',
        redirect: '/'
    },
    {
        path: '/products/:slug',
        name: 'products.show',
        component: () => import('../views/Products/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('../views/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('../views/Order/Summary.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/User/Login.vue'),
        beforeEnter: guest
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/User/Register.vue'),
        beforeEnter: guest
    },
    {
        path: '/password/reset/:token/:email',
        name: 'Token',
        component: () => import('../views/User/Token.vue')
    },
    {
        path: '/forgotpassword',
        name: 'Forgot',
        component: () => import('../views/User/Forgot.vue')
    },
    {
        path: '/resetpassword',
        name: 'Reset',
        component: () => import('../views/User/Reset.vue'),
    },
    {
        path: '/users',
        name: 'Users.Index',
        component: () => import('../views/User/Index.vue'),
        beforeEnter: auth,
    },
    {
        path: '/user',
        name: 'Show',
        component: () => import('../views/User/Show.vue'),
    }
];


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;