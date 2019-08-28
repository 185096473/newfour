var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    fs.readdir("./album",(err,data)=>{
		// for(let i=0;i<data.length;i++){
		// 	fs.stat("./album/"+data[i],(err,stats)=>{
		// 		if(stats.isDirectory()){
		// 			console.log(data[i])
		// 		}
		// 	})
		// }
		// 提升版
		// 迭代处理函数     函数自己调用自己


		res.end()
	})
}).listen(3000)


/**
 * let
 * const  常量  恒定  不可更改    Math.PI    Math.sin    Math.cos   Math.tan 
 *  块级作用域
 *  不能重复定义
 *  暂时性死区
 * {
 *     
 * }
 * 
 * 
 */