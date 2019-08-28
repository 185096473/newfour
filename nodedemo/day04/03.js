// var http=require("http")
var querystring=require("querystring")
// 查询字符串
// console.log(querystring)
// 反序列化  转对象
// var obj=querystring.parse("name=tom&age=12")
// 序列化  转字符串
// var obj=querystring.stringify({"name":"tom","age":12})
// 转码 
// var obj=querystring.escape("name='小明'")
// 解码
var obj=querystring.unescape("name%3D'%E5%B0%8F%E6%98%8E'")
console.log(obj)