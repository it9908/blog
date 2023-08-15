import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/article',
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'article',
                meta: {
                    title: '文章'
                },
                component: () => import('@/views/Article.vue')
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
                path: 'details/:articleId',
                meta: {
                    title: 'xxx'
                },
                component: () => import('@/views/DetailPage.vue'),
                props: true
            }
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
