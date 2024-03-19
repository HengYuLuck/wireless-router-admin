import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '../components/PageNotFound.vue';
import home from '../view/home/home.vue';
import Layout from '../layout/Layout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/layout',
        },
        {
            name: 'home',
            path: '/home',
            component: home,
        },
        {
            name: 'layout',
            path: '/layout',
            component: Layout,
        },
        {
            path: '/:pathMatch(.*)*', // 这个路由规则要放在最后
            name: 'pageNotFound',
            component: PageNotFound,
        },
    ],
    scrollBehavior() {
        // 始终滚动到顶部
        return {
            top: 0,
            behavior: 'smooth',
        };
    },
});

export default router;
