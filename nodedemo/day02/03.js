var http=require("http")
http.createServer((req,res)=>{
	// 解决favicon的问题
	 if(req.url=="/favicon.ico"){
		  return
	 }
	 res.end(req.url)
}).listen(3000)