import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppProjectShow from "./pages/AppProjectShow.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

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
            path: '/projects',
            name: 'Projects',
            component: AppProjects
        },
        {
            path: '/project/:slug',
            name: 'ProjectShow',
            component: AppProjectShow
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFoundPage
        },
    ]
});

export { router };