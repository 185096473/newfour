var express=require("express")
// express=createAppllication
var app=express()
// context   执行上下文   
// app.use("/",(req,res)=>{
// //    res.send({"success":"ok","data":{"list":[{id:1,name:"tom"},{id:2,name:"jack"}]}})
// })
/**
 * express:
 * 1.路由路径不区分大小写
 * 2.获取动态路由参数  params   =》get
 * 3.use 使用
 * 4.get  请求方式
 * 5.post  请求方式
 * 6.express支持链式调用
 * 
 */ 
// app.use("/about/:id",(req,res)=>{
// 	res.send(req.params.id)
// })
app.get("/get",(req,res)=>{
	res.send("get")
})
app.get("/second",(req,res)=>{
	res.send("second")
})

app.listen(3000)

/**
 * 1.res.end和res.send的区别
 * 
 */