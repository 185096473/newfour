var http=require("http")
//fs  file  system   文件系统
var fs=require("fs")
http.createServer(function(req,res){
	// 响应头
   res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
   if(req.url=="/"){
	    res.end("首页")
   }else if(req.url=="/red"){
	   fs.readFile("./static/red.html",function(err,data){
		   res.end(data)
	   })
   }else if(req.url=="/green"){
	   fs.readFile("./static/green.html",function(err,data){
		   res.end(data)
	   })
	}else if(req.url=="/red.css"){
		res.writeHead(200,{"Content-type":"text/css"})
		fs.readFile("./static/red.css",function(err,data){
			res.end(data)
		})
	}else if(req.url=="/11.jpg"){
		res.writeHead(200,{"Content-type":"image/jpg"})
		fs.readFile("./static/11.jpg",function(err,data){
			res.end(data)
		})
	}
	//  var type=req.url
	//  switch(type){
	// 	case "/": res.end("首页");
	// 	case "/red": 
	// 	fs.readFile("./static/red.html",function(err,data){
	// 		res.end(data)
	// 	});
	// 	case "/green":
	// 	fs.readFile("./static/green.html",function(err,data){
	// 		res.end(data)
	// 	});
	//  }


}).listen(3000)