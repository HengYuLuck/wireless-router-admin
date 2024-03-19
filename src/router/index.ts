import {createRouter, createWebHistory} from 'vue-router';
import PageNotFound from '../components/PageNotFound.vue';
import home from '../view/home/home.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'home',
            path: '/home',
            component: home,
        },
        {
            path: '/:pathMatch(.*)*',
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
