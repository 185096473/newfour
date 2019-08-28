var http=require("http")
var fd=require("formidable")
var path=require("path")
var fs=require("fs")
var sd=require("silly-datetime")
http.createServer((req,res)=>{
	if(req.url=="/send" && req.method=="POST"){
		console.log(chengle)
		var form=new fd.IncomingForm()
		form.uploadDir="./uploads"
		// form   uploadDir   上传目录
		// fields  文本域     files  文件域
		form.parse(req,function(err,fields,files){
			// files  path  name
			var oldpath=files.pic.path
			var extname=path.extname(files.pic.name)
			var tt=sd.format(new Date(),"YYYYMMDDHHmmss")
			var newpath="./uploads/"+tt+extname
			fs.rename(oldpath,newpath,(err)=>{
				if(err){
					throw err
				}
				console.log("succcess")
				res.end()
			})
		
		})
	}
	else{
		console.log(cuole)
	}
}).listen(3000)