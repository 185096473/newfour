var mongoClient=require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017"
function ConnectDB(callback){
     mongoClient.connect(url,(err,mongo)=>{
		//  mongo   客户端
		 var dbName=mongo.db("adminuser")
		 if(err){
			 callback(err,null)
		 }
		 callback(err,mongo,dbName)
	 })
	
}
exports.add=function(collectionName,json,callback){
	ConnectDB(function(err,mongo,dbName){
		dbName.collection(collectionName).insert(json,function(err,result){
			if(err){
				callback(err,null)
			}
			callback(err,result)
			mongo.close()
		})
	})  
}
exports.find=function(collectionName,json,callback){
	ConnectDB(function(err,mongo,dbName){
		// 因为插入数据里面是以数组形式存在
		dbName.collection(collectionName).find(json).toArray(function(err,result){
			if(err){
				callback(err,null)
			}
			callback(err,result)
			mongo.close()
		})
	})
}
