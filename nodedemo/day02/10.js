/**
 *  模块化  common
 *  exports   module.exports
 *  require  引入  加载
 *  es6 
 *  export    export default
 * 
 *  import     导入    
 * exports和module.exports的区别？
 *   本身都是一个数组
 *   exports指向module.exports同时exports是module.exports的引用
 *   exports和module.exports默认是一个空对象
 * node_modules  项目依赖 =》npm  包管理工具
 */
var bar=require("bar")
console.log(bar)