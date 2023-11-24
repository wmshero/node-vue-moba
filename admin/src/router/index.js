import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Main.vue";
import CategoryEdit from "../views/Category/Edit.vue";
import CategoryList from "../views/Category/List.vue";
import ItemEdit from "../views/Item/Edit.vue";
import ItemList from "../views/Item/List.vue";
import HeroEdit from "../views/Hero/Edit.vue";
import HeroList from "../views/Hero/List.vue";
import ArticleEdit from "../views/Article/Edit.vue";
import ArticleList from "../views/Article/List.vue";
import AdEdit from "../views/Ad/Edit.vue";
import AdList from "../views/Ad/List.vue";
import AdminUserEdit from "../views/AdminUser/Edit.vue";
import AdminUserList from "../views/AdminUser/List.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isPublic: true,
    },
  },
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
      {
        path: "/items/create",
        component: ItemEdit,
      },
      {
        path: "/items/edit/:id",
        component: ItemEdit,
        props: true,
      },
      {
        path: "/items/list",
        component: ItemList,
      },
      {
        path: "/heroes/create",
        component: HeroEdit,
      },
      {
        path: "/heroes/edit/:id",
        component: HeroEdit,
        props: true,
      },
      {
        path: "/heroes/list",
        component: HeroList,
      },
      {
        path: "/articles/create",
        component: ArticleEdit,
      },
      {
        path: "/articles/edit/:id",
        component: ArticleEdit,
        props: true,
      },
      {
        path: "/articles/list",
        component: ArticleList,
      },
      {
        path: "/ads/create",
        component: AdEdit,
      },
      {
        path: "/ads/edit/:id",
        component: AdEdit,
        props: true,
      },
      {
        path: "/ads/list",
        component: AdList,
      },
      {
        path: "/admin_users/create",
        component: AdminUserEdit,
      },
      {
        path: "/admin_users/edit/:id",
        component: AdminUserEdit,
        props: true,
      },
      {
        path: "/admin_users/list",
        component: AdminUserList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next("/login");
  }
  next();
});

export default router;
