var path=require("path")
// console.log(path)
// extname 获取后缀名   
// path  提供一些工具函数，主要处理文件和目录
// var obj=path.extname("./static/form.html")
// console.log(obj)
// basename 返回一个真实路经的最后一段
// var base=path.basename("/a/b/c/d/q.html")
// var base1=path.basename("/a/b/c/d/q",".html")
// console.log(base)
// console.log(base1)
// normalize  规范路径的输出
// var obj=path.normalize("///////a/b////c////////d")
// console.log(obj)
// isAbsolute 判断是否是绝对路径   true  false
// join  拼接完整的路径
// var obj=path.join("a","b","c","d","a") 
// console.log(obj)
// dirname   返回当前文件所在的目录名称
// var obj=path.dirname("/a/b/c/d.txt")
// console.log(obj)
// format   root  dir  base
// format  就是把对象转换为字符串  路径读取时会读取dir和base
// var obj=path.format({
// 	root:"/aaa",   //root 根
// 	dir:"/b/c",    //目录
// 	base:"1.txt"   //文件路径
// })   //unix windows32
// console.log(obj)
// var obj=path.parse("/a/b/c")
// console.log(obj)
// resolve  从右向左依次解析，知道返回一个完整的路径
var obj=path.resolve("/a/b","/c","/d")
console.log(obj)


