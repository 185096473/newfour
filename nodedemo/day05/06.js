var express=require("express")
var app=express()
// 设置允许跨域访问
app.all("*",(req,res,next)=>{
	//允许所有域名进行访问
   res.header("Access-Control-Allow-Origin","*")
    // 定义请求头类型
   res.header("Access-Control-Allow-Headers","content-type")
    // 定义允许跨域访问的请求方式 
   res.header("Access-Control-Allow-Methods","GET","POST","PUT","PATCH","DELETE","OPTIONS")
    //继续执行  
   next()
})
app.listen(3000)