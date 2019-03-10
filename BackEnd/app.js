const express = require('express')//引入express模块
const mysql = require('mysql');     //引入mysql模块
const app = express()//把对象赋给app
var bodyParser=require('body-parser');//对post请求进行解析
var cookieParser = require('cookie-parser');
var https = require('https');
var qs = require('querystring');
var cors = require('cors');


var cookieConfigure={maxAge:3000,path:'/',httpOnly:false};
app.use(bodyParser.json());
// app.use(cookieParser())
app.use(cors({origin:true, credentials:true}));
// app.get('/', (req, res) => res.send('Root'))
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'0000',
    database:'expressdb'
});
connection.connect();
var sql = 'SELECT * FROM user';
var str = " ";
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str = JSON.stringify(result);
    //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    //console.log(result);   //数据库查询结果返回到result中
    console.log(str);
});
app.get('/',function (req,res) {
  console.log(123);
  var str="123"
    res.send(str);  //服务器响应请求
});
// connection.end();

// app.get('/', function (req, res) {
//   res.write("Root")
//   res.end()
// })


//登录
app.post('/login', function (req,res) {
  console.log("login:");
  // res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header( "Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");


  var sqlString="select * from user where user_id = ?;";

	// req.body=JSON.parse(req.body);
	var user_id=req.body.user_id;
	var user_pwd=req.body.user_pwd;
	connection.query(sqlString,[user_id],function(err,results){
    console.log(user_id);
    console.log(results);
		if(results.length){
			if(user_pwd==results[0].user_pwd){
				res.cookie('user','user_id='+user_id,cookieConfigure);
				console.log("登陆成功");
				res.write("登陆成功");
			}else{
				console.log("密码错误");
				res.write("密码错误");
			}
		}else{
			console.log("找不到用户名");
			res.write("找不到用户名");
		}
		res.send();
	});
});

//注册
app.post('/register', function (req,res) {
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header( "Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString="select * from user where user_id = ?;";

  var new_id=req.body.new_id;
  var new_pwd=req.body.new_pwd;
  var repeat_pwd=req.body.repeat_pwd;
  var new_email=req.body.new_email;
  var new_icon=req.body.new_icon;

  connection.query(sqlString,[new_id],function(err,results){
    console.log(new_id);
    console.log(results);
    if(results.length){
        console.log("用户已存在，请登录");
        res.write("用户已存在，请登录");
    }
    else{
      if(results.new_pwd==results.repeat_pwd)
      {
        if(results.new_id!=""){
          if(results.new_pwd!=""){
            res.cookie('user','user_id='+new_id,cookieConfigure);
      			console.log("注册成功");
      			res.write("注册成功");
      			sqlString='insert into user(user_id,user_pwd,user_email,user_icon) values(?,?,?,?);'
      			connection.query(sqlString,[new_id,new_pwd,new_email,new_icon],function(results){
      			console.log('插入成功:'+results);
    			   });
          }
        }
      }
      else if(results.new_id=""){
        console.log("用户名为空，请重新输入");
        res.write("用户名为空，请重新输入");
      }
      else{
        console.log("两次密码不一致，请重新输入");
        res.write("两次密码不一致，请重新输入");
      }
    }
    res.send("123");
  });
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
