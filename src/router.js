import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppProject from "./pages/AppProject.vue";
import AppProjectShow from "./pages/AppProjectShow.vue"

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
        {
            path: '/project',
            name: 'Project',
            component: AppProject
        },
        {
            path: '/project/:slug',
            name: 'ProjectShow',
            component: AppProjectShow
        }
    ]
});

export { router };