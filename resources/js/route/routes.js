import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const guest = (to, from, next) => {
    if(!window.sessionStorage.getItem('cle_store_token')) return next();
    next('/');
};
  
const auth = (to, from, next) => {
    if(window.sessionStorage.getItem('cle_store_token')) return next();
    next({name: 'Login'});
};

const routes =  [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/products',
        name: 'products.index',
        component: () => import('../views/Products/Index.vue'),
    },
    {   
        path: '/product/:category',
        name: 'category',
        component: () => import('../views/Category/Index.vue'),

    },
    {
        path: '/products/:slug',
        name: 'products.show',
        component: () => import('../views/Products/Show.vue'),
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('../views/Order/Checkout.vue'),
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('../views/Order/Summary.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/User/Login.vue'),
        beforeEnter: guest,
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/User/Register.vue'),
        beforeEnter: guest,
    },
    {
        path: '/password/reset/:token/:email',
        name: 'Token',
        component: () => import('../views/User/Token.vue'),
    },
    {
        path: '/forgotpassword',
        name: 'Forgot',
        component: () => import('../views/User/Forgot.vue'),
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
        path: '/user/:user',
        component: () => import('../views/User/Show.vue'),
        children: [
            {
                path: '/user/:user/profile',
                name: 'UserProfile',
                component: () => import('../views/User/Profile.vue'),
            },
            {
                path: '/user/:user/address',
                name: 'UserAddress',
                component: () => import('../views/User/Address.vue'),
            },
            {
                path: '/user/:user/order',
                name: 'UserOrder',
                component: () => import('../views/User/Order.vue'),
            },
            {
                path: '/',
                redirect: '/user/profile'
            }
        ]
    },
    {
        path: '/user/:user/address/:address/edit',
        name: 'AddressEdit',
        component: () => import('../views/Invoiceaddress/Edit.vue'),
    },
    {
        path: '/user/:user/address/create',
        name: 'AddressCreate',
        component: () => import('../views/Invoiceaddress/Create.vue'),
    },
    {
        path: '/user/:user/caddress/:address/edit',
        name: 'CaddressEdit',
        component: () => import('../views/Consigneeaddress/Edit.vue'),
    },
    {
        path: '/user/:user/caddress/create',
        name: 'CaddressCreate',
        component: () => import('../views/Consigneeaddress/Create.vue'),
    },
    {
        path: '/user/:user/order/:order',
        name: 'OrderReview',
        component: () => import('../views/Order/Show.vue'),
    },
    {
        path: '/user/:user/order/:order/packinglist',
        name: 'OrderPacking',
        component: () => import('../views/Order/Package.vue'),
    }
    


];


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
});

export default router;