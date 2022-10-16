import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/HomeView.vue";
import { Lesson, VirtualRenderList } from "../views/Lesson";

const Route = {
  Home: {
    name: "Home",
    path: "/",
  },
  Lesson: {
    name: "lesson",
    path: "/lesson",
    One: {
      name: "virtual-render",
      path: "/virtual-render",
    },
  },
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Route.Home.path,
      name: Route.Home.name,
      component: Home,
    },
    {
      path: Route.Lesson.path,
      name: Route.Lesson.name,
      component: Lesson,
    },
    {
      path: Route.Lesson.One.path,
      name: Route.Lesson.One.name,
      component: VirtualRenderList,
    },
  ],
});

export default router;
