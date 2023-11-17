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
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
