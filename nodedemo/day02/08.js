var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// rename  改名
	// fs.rename("./static/1.txt","./static/a.txt",(err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	res.end("success")
	// })
	// unlink  删除文件
	fs.unlink("./static/a.txt",(err)=>{
		if(err){
			throw err
		}
		res.end("success`")
	})
}).listen(3000)