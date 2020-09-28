import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import app from './modules/app'
// import settings from './modules/settings'
// import user from './modules/user'
// import shop from './modules/shop'

Vue.use(Vuex)
// require.context作用 自动化导入模块,返回 webpackContext函数
// 参一：匹配模块文件夹
// 参二：是否深度匹配子目录 true false
// 参三：正则；作用：匹配需要被自动化导入的【模块文件】
const modulesFiles = require.context('./modules', true, /\.js$/)
// modulesFiles.keys() 作用；自动化导入【文件路径】 数组 ['./app.js','./setting.js']
// reduce(callback,options) 遍历数据；把文件模块对象；都累加到参二对象中
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // console.log(modules,modulePath)
  // 正则匹配 ./app.js 等  将app 作为分组  $1 = app
  // 将./app.js 字符 替换为 app 并返回
  // >>> moduleName =  app
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  // modulesFiles('app') 返回 Module 对象  
  const value = modulesFiles(modulePath)
  // Modele.defalut 返回 export default 暴露的对象
  modules[moduleName] = value.default 
  return modules
}, {})
// console.log(modules)

const store = new Vuex.Store({
  modules, 
  getters
})
export default store
