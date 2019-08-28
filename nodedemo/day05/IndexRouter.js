// 接口编写文件   IndexRouter  负责首页接口的编写
var express=require("express")
var router=express.Router()
router.get("/reg",(req,res)=>{
	res.send({"success":"ok","data":[{"username":"rose","age":12},{"username":"jack","age":20}]})
})

module.exports=router
