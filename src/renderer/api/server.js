
import axios from "axios";
import url from "./url";

let baseURL = url.baseHttp;

const request = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
});

// 请求拦截

// 响应拦截

export default request;
