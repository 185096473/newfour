// 1.实现登录注册功能
/***
 * 客户端=>前端
 *   <form>
 *       submit=> username    password  
 *   </form>

 * 服务端
 *    接收 username  password
 *  
 * 假设一个数据库
 *   username=admin   password=123
 *  
 * 数据库  mysql  mongodb
 * 
 * 
 */
var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	// data比作是一个数据库
    var data=[
		{
			"username":"admin",
			"password":123
		},{
			"username":"super",
			"password":456
		},{
			"username":"tom",
			"password":123
		}
	]
	var userInfo=url.parse(req.url,true).query
	if(userInfo.username==data[0].username&&userInfo.password==data[0].password){
		  res.end("success")
	}else{
		res.end("fail")
	}
}).listen(3000)