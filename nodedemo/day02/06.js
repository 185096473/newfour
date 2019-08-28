var http=require("http")
var url=require("url")
var fs=require("fs")
http.createServer((req,res)=>{
	 var obj=url.resolve("http://127.0.0.1:3000","/green")
	 var query=url.parse(obj,true)
	//  obj=http://127.0.0.1:3000/red
	if(query.path=="/green"){
        fs.readFile("./static/green.html",(err,data)=>{
			res.end(data)
		})
	}else if(query.path=="/blue"){
		fs.readFile("./static/blue.html",(err,data)=>{
			res.end(data)
		})
	}
}).listen(3000)