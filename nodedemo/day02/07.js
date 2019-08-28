// fs
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// 读文件 readFile(url,options,callback)  异步
	// fs.readFile("./static/1.txt",(err,data)=>{
	// 	res.end(data)
	// })
	// 	fs.readFileSync()   同步
	// 写文件  writeFile(url,data,option,callback)
	// flag   a  append   r   read   w   write
	fs.writeFile("./static/2.txt","我是内容",{"flag":"a"},(err)=>{
		if(err){
			// throw 抛出
			throw err
		}
		res.end("success")
	})

}).listen(3000)