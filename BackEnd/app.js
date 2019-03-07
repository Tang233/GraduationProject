const express = require('express')//引入express模块
const path=require("path");
const app = express()//把对象赋给app

// app.get('/', (req, res) => res.send('Root'))

app.get('/', function (req, res) {
  res.write("Root")
  res.end()
})

app.use('/login', function (req,res) {
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
	res.header( "Access-Control-Max-Age", "1000" ); //
	res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");


  res.send("login")
})

app.use("/register", function (req,res) {
  res.send("register")
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
