// four=》nodedemo=》day01=>01.js
//http  模块
// require  加载  引入   加载http模块    服务模块
var http=require("http")
http.createServer(function(req,res){
	// req=request请求    res=response  响应
	// res.end结束响应
    res.end("success")
}).listen(3000)
