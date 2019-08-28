// ejs   art-template
var express=require("express") 
var path=require("path")
var app=express()
//ejs  模板引擎
// set设置     engine  引擎
// 如何设置模板引擎
app.set("views",path.join(__dirname,"/view"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
	var list=["首页","新闻","关于"]
	res.render("index.ejs",{
		list:list
	})
})
app.listen(3000)