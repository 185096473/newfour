var http=require("http")
// 创建服务器
http.createServer(function(req,res){
	// res.end((1+2+3+4+5).toString())
	// 解决中文乱码
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	res.end("我爱中国")
}).listen(3000) 
// listent监听端口
