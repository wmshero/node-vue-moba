import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Main.vue";
import CategoryEdit from "../views/CategoryEdit.vue";
import CategoryList from "../views/CategoryList.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/categories/create",
        component: CategoryEdit,
      },
      {
        path: "/categories/edit/:id",
        component: CategoryEdit,
        props: true,
      },
      {
        path: "/categories/list",
        component: CategoryList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
