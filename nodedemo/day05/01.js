var express=require("express")
var router=require("./router.js")
var IndexRouter=require("./IndexRouter")
var app=express()
app.use("/news",router)
app.use("/Index",IndexRouter)
app.listen(3000)