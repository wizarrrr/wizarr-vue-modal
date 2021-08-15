import { createWebHistory, createRouter} from "vue-router";

import ViewDefaultDocumentation from "../view/ViewDefaultDocumentation";


const routes = [
    {
        path: "/installation",
        component: ViewDefaultDocumentation
    },
    {
        path: "/methods",
        component: ViewDefaultDocumentation
    },
    {
        path: "/navigation-guards",
        component: ViewDefaultDocumentation
    },
    {
        path: "/details",
        component: ViewDefaultDocumentation
    },
    {
        path: "/best-practices",
        component: ViewDefaultDocumentation
    },
    {
        path: "/",
        redirect: "/installation"
    },
    {
        path: '/:pathMatch(.*)*', redirect: "/installation"
    }
];

const router = createRouter({
    history: createWebHistory("/docs.html"),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
});

export default router;