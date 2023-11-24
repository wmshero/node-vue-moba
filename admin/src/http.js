import axios from "axios";
import Vue from "vue";
import { ElMessage } from "element-plus";
import router from "./router";

const http = axios.create({
  baseURL: "http://localhost:3000/admin/api",
});

http.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config;
  },
  (err) => {
    const {
      data: { message },
      statusCode,
    } = err.response;
    if (statusCode === 401) {
      router.push("/login");
    }
    return ElMessage.error(message);
  }
);
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const {
      data: { message },
    } = err.response;
    return ElMessage.error(message);
  }
);
export default http;
