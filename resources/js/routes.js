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
    }
];