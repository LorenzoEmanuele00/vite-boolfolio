import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'About',
            component: AppAbout
        },
    ]
});

export { router };