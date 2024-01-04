// 模块化管理
let apiModules  = {}

let moduleMaps = require.context('./modules', false, /\.js$/)

moduleMaps.keys().forEach(key => {
  apiModules = {
    ...apiModules,
    ...moduleMaps(key).default
  }
});

export default apiModules