const devBaseHttp = "http://localhost:3000"; // 后端服务地址-开发环境
const prodBaseHttp = "http://localhost:3000"; // 后端服务地址-生产环境

const BASE_URL_ENV = {
  development: {
    baseHttp: devBaseHttp,
  },
  production: {
    baseHttp: prodBaseHttp,
  },
};

export default BASE_URL_ENV[process.env.NODE_ENV]