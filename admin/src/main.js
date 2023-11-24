import { createApp } from "vue";

import Element from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import App from "./App.vue";
import router from "./router";
import http from "./http";
// import mixin from "./plugins/mixin";

const app = createApp(App);

app.config.globalProperties.$axios = http;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// app.mixin = mixin;
app.component("QuillEditor", QuillEditor);
app.use(router).use(Element).mount("#app");
