const path = require("path");

// 资源路径
const resourceURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8282/"
    : `file://${path.resolve(__dirname, "../../../dist/")}/`;

// 渲染进程
const rendererURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8282/index.html"
    : `file://${path.resolve(__dirname, "../../../dist/")}/index.html`;


console.log(process.env.NODE_ENV, resourceURL, rendererURL);

module.exports = { resourceURL, rendererURL };
