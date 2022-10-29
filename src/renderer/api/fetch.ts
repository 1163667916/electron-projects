import axios from 'axios';

const baseURL = '';
const instance = axios.create({
  baseURL,
  timeout: 60000,
  proxy: {
    host: '127.0.0.1',
    port: 7777,
    // auth: {
    //   username: 'mikeymike',
    //   password: 'rapunz3l',
    // },
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
