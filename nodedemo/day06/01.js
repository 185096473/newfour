var express=require("express")
var app=express()
// 连接mongodb客户端
var mongoClient=require("mongodb").MongoClient
app.get("/add",(req,res)=>{
	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
		// 创建数据库
		var dbName=db.db("adminuser")
		// 连接集合
		dbName.collection("test").insert({"username":"jack"},function(err){
			if(err){
				throw err
			}
			res.send("插入成功")
			db.close()
		})
	
	})
})
app.get("/del",(req,res)=>{
	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
		var dbName=db.db("adminuser")
		dbName.collection("test").deleteOne({"username":"jack"},function(err){
			if(err){
				throw err
			}
			res.send("删除成功")
			db.close()
		})
	
	})
})
app.listen(3000)