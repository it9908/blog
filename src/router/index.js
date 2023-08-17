import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
    // 其他路由
    {
        path: '*',
        component: () => import('../views/404/NotFound.vue')
    },
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/article',
        meta: {
            title: '首页',
        },
        children: [
            {
                path: 'article',
                name: 'Articles',
                meta: {
                    title: '文章',
                },
                component: () => import('@/views/Article.vue'),
            },
            {
                path: 'article/:currentPage',
                name: 'Articles2',
                meta: {
                    title: '文章',
                },
                component: () => import('@/views/Article.vue'),
                props:true
            },
            {
                path: 'messages',
                meta: {
                    title: '留言墙'
                },
                component: () => import('@/views/MessageWall.vue')
            },
            {
                path: 'about',
                meta: {
                    title: '关于本站'
                },
                component: () => import('@/views/About.vue')
            },
            {
                path: 'details/:articleId/:currentPage',
                name: 'Details',
                meta: {
                    title: '详情内容'
                },
                component: () => import('@/views/DetailPage.vue'),
            },
        ]
    },

    {
        path: '/login',
        component: () => import('../views/Login.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
