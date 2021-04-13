module.exports = [
    {
        path: '/',
        name: 'products.index',
        component: () => import('./views/Products/Index.vue')
    },
    {
        path: '/products',
        redirect: '/'
    },
    {
        path: '/products/:slug',
        name: 'products.show',
        component: () => import('./views/Products/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./views/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./views/Order/Summary.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/User/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./views/User/Register.vue')
    },
    {
        path: '/password/reset/:token/:email',
        name: 'Token',
        component: () => import('./views/User/Token.vue')
    },
    {
        path: '/forgotpassword',
        name: 'Forgot',
        component: () => import('./views/User/Forgot.vue')
    },
    {
        path: '/resetpassword',
        name: 'Reset',
        component: () => import('./views/User/Reset.vue')
    },
    {
        path: '/users',
        name: 'Users.Index',
        component: () => import('./views/User/Index.vue')
    },
];