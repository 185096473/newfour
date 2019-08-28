var express=require("express")
var app=express()
var db=require("./db")
app.get("/add",(req,res)=>{
    db.add("test",{"username":"rrr"},(err)=>{
		if(err){
			throw err
		}
		res.send("插入成功")
	})
})
app.get("/find",(req,res)=>{
    db.find("test",{"username":"rrr"},(err,data)=>{
		if(err){
			throw err
		}
		res.send({"data":data})
	})
})
app.listen(3000)