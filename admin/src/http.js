import axios from "axios";
import Vue from "vue";
import { ElMessage } from "element-plus";

const http = axios.create({
  baseURL: "http://localhost:3000/admin/api",
});

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
