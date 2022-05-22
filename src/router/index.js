/* eslint-disable */


import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home_View.vue";
import LoginView from "../views/LoginView.vue";
import LandingView from "../views/LandingView.vue";
import CoursesView from "../views/CoursesView.vue";
import JobsView from "../views/JobsView.vue";
import ProfileForm from "@/views/ProfileForm.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/dash",
        name: "dahboard",
        component: LandingView,
    },
    {
        path: "/courses",
        name: "courses",
        component: CoursesView,
    },
    {
        path: "/jobs",
        name: "jobs",
        component: JobsView,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfileForm,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;