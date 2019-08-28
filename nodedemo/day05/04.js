// cookie-parser
var express = require("express")
// 可以存储二级域名或更多
/**
 * www.ddd.com
 * www.ddd.com.cn
 */
var cookie = require("cookie-parser")
var app = express()
app.use(cookie())
app.get("/set", (req, res) => {
	//存储
	res.cookie("username", "admin", {domain:"www.ddd.com", maxAge: 90000, httpOnly: true })
	res.send("cookie设置成功")
})
app.get("/get", (req, res) => {
	var data = req.cookies.username
	var data = req.cookies.name
	console.log(data)
	res.send({ "data":"3434" })
})
app.listen(3000)


