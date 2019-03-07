const express = require('express')//引入express模块
const path=require("path");
const app = express()//把对象赋给app

const files=express.static(path.join("D:\GraduationProject\GraduationProject\FontEnd\project\src\views\login","login"))
// app.get('/', (req, res) => res.send('Root'))

app.get('/', function (req, res) {
  res.write("Root")
  res.end()
})

app.use('/login', function (req,res) {
  res.send("login")
})

app.use("/register", function (req,res) {
  res.send("register")
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
