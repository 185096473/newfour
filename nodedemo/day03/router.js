// router.js    路由
function showIndex(req,res){
      res.end("首页")
}
function showNew(req,res){
    res.end("new")
}
function showAbout(req,res){
     res.end("About")
}
module.exports={
	showIndex:showIndex,
	showNew:showNew,
	showAbout:showAbout
}