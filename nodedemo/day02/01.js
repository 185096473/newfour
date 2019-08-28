var http=require("http")
// 创建服务器
http.createServer(function(req,res){
	// req=request 请求   res=response  响应
	// 结束响应
	// res.end("success")
	// argument   string   buffer 缓存区
	res.end((1+2+2+3).toString())
}).listen(3000)
// 端口  localhost  本地   http://127.0.0.1:3000     dns