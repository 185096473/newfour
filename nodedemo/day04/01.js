var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
// console.log(ejs)
/**
 * ejs  模板引擎
 * 定义：嵌入javascript的模板引擎
 * 特点：
 * 
 * render  渲染    compile  编译    template  模板
 * ejs.render(tempalte,data)  tempalte  模板   data 数据
 * index.ejs
 * <% %>  编译
 * <%=%>   输出
 * <%# %>  注释
 * <%_ %>   去除首位空格
 * <% _%>    去除末尾空格
 * 
 * include  包含  
 * 
 * 重点：
 * rener  渲染   两个参数  
 *  第一个代表模板  第二个代表数据(数据类型必须是对象)
 * 字符：
 * <%%>
 */
http.createServer((req,res)=>{
	//  var datas={
	// 	   num:8
	//  }
	var list=["首页","新闻","关于"]
	var str="我想买一个iphone<%= datas %>s"
	fs.readFile("./views/index.ejs",(err,data)=>{
		var template=data.toString()
		 var str=ejs.render(template,{list:list})
		 res.end(str)
		//  console.log(str)
	})
}).listen(3000,function(){
	console.log("服务已经挂起")
})