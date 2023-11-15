import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-plus";
import "element-plus/theme-chalk/index.css";
import http from "./http";

const app = createApp(App);
// app.use(http);

// app.provide("$axios", http);
app.config.globalProperties.$axios = http;

// app.config.globalProperties.$axios = axios.create({
//   baseURL: "https://api.example.com", // 设置你的API基础URL
//   timeout: 5000, // 设置请求超时时间
//   // 其他Axios配置选项
// });

app.use(router).use(Element).mount("#app");
