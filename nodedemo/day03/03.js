var http=require("http")
var router=require("./router")
http.createServer((req,res)=>{
      if(req.url=="/"){
		  router.showIndex(req,res)
	  }else if(req.url=="/new"){
		  router.showNew(req,res)
	  }else if(req.url=="/about"){
		  router.showAbout(req,res)
	  }else{
		  res.end("404")
	  }
}).listen(3000)