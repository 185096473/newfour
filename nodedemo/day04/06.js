var express=require("express")
var bodyParser=require("body-parser")
var app=express()
// 使用静态资源
app.use(express.static("static"))
// 使用中间件
// 针对post方式处理字符串
app.use(bodyParser.urlencoded({extended:false}))
// 针对post方式处理json
app.use(bodyParser.json())
/**
 * 中间件：路由中间   第三方中间件
 *  body-parser  处理post请求    
 * 
 */
app.get("/",(req,res)=>{
	res.send("首页")
})
app.get("/list",(req,res)=>{
	console.log(req.query)
	res.send("列表接收传输过来的username为"+req.query.username)
})
app.post("/dopost",(req,res)=>{
	  console.log(req.body)
	  res.send("dopost"+req.body.username)
})
app.listen(3000)