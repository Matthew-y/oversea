
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue'),
        meta: {
            title: '用户登录'
        }
    },
    {
        path: '/manageSys',
        name: 'manageSys',
        component: () => import('../pages/manageSys/index.vue'),
        redirect: '/manageSys/user',
        children: [
            {
                path: '/manageSys/user',
                name: 'user',
                component: () => import('../pages/manageSys/user.vue'),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.path === '/login') return next()
    if(!localStorage.getItem('token')) return next('/login')
    next()
})

export default router
