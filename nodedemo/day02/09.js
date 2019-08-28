var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
	if (req.url == "/favicon.ico") {
		return
	}
	// 创建文件夹   mkdir
	// fs.mkdir("./static/aa",(err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	res.end("success")
	// })
	// 删除文件夹
	// fs.rmdir("./static/aa", (err) => {
	// 	if (err) {
	// 		throw err
	// 	}
	// 	res.end("success")
	// })
	// 读取文件夹  readdir
	// fs.readdir("./static",(err,data)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	res.end(data.toString())
	// })
	// 判断是否是文件夹  exists
	// fs.exists("./static/aa",(exists)=>{
	// 	if(exists){
	// 		console.log("文件夹已存在")
	// 	}else{
	// 		fs.mkdir("./static/aa",(err)=>{
	// 			res.end("success")
	// 		})
	// 	}
	// })
	// stat  判断是文件夹还是文件
	fs.stat("./static/2.txt",(err,stats)=>{
		// console.log(stats.isD irectory())
		console.log(stats.isFile())
		res.end("222")
	})
}).listen(3000)