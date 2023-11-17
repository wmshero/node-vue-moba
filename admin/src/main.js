import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-plus";
import "element-plus/dist/index.css";
import http from "./http";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.config.globalProperties.$axios = http;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(Element).mount("#app");
