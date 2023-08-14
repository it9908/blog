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
        children: [
            {
                path: 'article',
                component: () => import('@/views/Article.vue')
            },
            {
                path: 'messages',
                component: () => import('@/views/MessageWall.vue')
            },
            {
                path: 'about',
                component: () => import('@/views/About.vue')
            },
            {
                path: 'details/:articleId',
                component: () => import('@/views/DetailPage.vue'),
                props: true
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
