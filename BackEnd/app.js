const express = require('express')//引入express模块
const mysql = require('mysql');     //引入mysql模块
const app = express()//把对象赋给app
var bodyParser=require('body-parser');//对post请求进行解析
var cookieParser = require('cookie-parser');
var https = require('https');
var qs = require('querystring');
var cors = require('cors');

var sqlStr = require('./sqlString');


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
    database:'projectdb'
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

//用户登录
app.post('/login',function ( req , res ) {
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header( "Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString=sqlStr.FIND_USER_BY_ID;
  console.log(sqlString)
  var user_id=req.body.user_id;
  var user_pwd=req.body.user_pwd;

  connection.query(sqlString,[user_id],function(err, results){

    if(results.length){
      console.log(results[0].user_id);
      console.log(results[0].user_pwd);
        if(user_pwd==results[0].user_pwd){
          res.cookie('user','user_id='+user_id,cookieConfigure);
          console.log("登录成功！");
          res.write("登录成功！");
        }
        else{
          console.log("密码错误！");
          res.write("密码错误！");
        }
    }
    else{
      console.log("账号错误！");
      res.write("账号错误！");
    }
    res.send();
  });
})

//注册
app.post('/register', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header( "Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.FIND_USER_BY_ID;

  var new_id=req.body.new_id;
  var new_pwd=req.body.new_pwd;
  var repeat_pwd=req.body.new_pwd;
  var new_email=req.body.new_email;
  var new_icon=req.body.new_icon;
  var new_mobile=req.body.new_mobile;

  connection.query(sqlString,[new_id],function(err, results){
    console.log(new_id);
    console.log(typeof(results));
    if(results.length){
        console.log("用户已存在，请登录");
        res.write("用户已存在，请登录");
        res.end();
    }
    else{
      if(new_pwd==repeat_pwd){
        if(new_id!=""){
          if(new_pwd!=""){
            res.cookie('user','user_id='+new_id,cookieConfigure);
      			// console.log("注册成功");
      			// res.write("注册成功");
      			sqlString= sqlStr.INSERT_USER;
      			connection.query(sqlString,[new_id,new_pwd,new_email,new_icon,new_mobile],function(results){
        			console.log('插入成功:'+results);
              res.send("插入成功");
    			  });
          }
        }
      }
      else if(results.new_id=""){
        console.log("用户名为空，请重新输入");
        res.write("用户名为空，请重新输入");
        res.end();
      }
      else{
        console.log("两次密码不一致，请重新输入");
        res.write("两次密码不一致，请重新输入");
        res.end();
      }
    }
  });
})

//管理员登录
app.post('/adminlogin', function (req, res ) {
  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header( "Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString=sqlStr.FIND_ADMIN_BY_ID;
  console.log(sqlString)
  var admin_id=req.body.admin_id;
  var admin_pwd=req.body.admin_pwd;

  connection.query(sqlString,[admin_id],function(err, results){
    if(results.length){
      console.log(results[0].admin_id);
      console.log(results[0].admin_pwd);
        if(admin_pwd==results[0].admin_pwd){
          res.cookie('admin','admin_id='+admin_id,cookieConfigure);
          console.log("登录成功！");
          res.write("登录成功！");
        }else{
          console.log("密码错误！");
          res.write("密码错误！");
        }
    }else{
      console.log("账号错误！");
      res.write("账号错误！");
    }
    res.send();
  });
})
45365001
//添加领养信息
// app.post('/newadoption', function (req, res) {
//
//   res.header('Access-Control-Allow-Origin', req.header('Origin'));
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
//   res.header( "Access-Control-Max-Age", "1000" ); //
//   res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
//
//   var sqlString = sqlStr.GET_ROW +"adoption";
//   connection.query(sqlString,[],function (err, results) {
//     var sqlString = sqlStr.NEW_ADOPTION;
//
//     var ado_id = 100000+results[0].count+1;
//
//     var ado_master = req.body.ado_master;
//     var ado_title = req.body.ado_title;
//     var ado_image = req.body.ado_image;
//     var ado_content = req.body.ado_content;
//     var ado_status = '待审核';
//     var ado_date = req.body.ado_date;
//     var arr = [ado_id,ado_master,ado_title,ado_image,ado_content,ado_status]
//     for (var i in arr){
//       console.log(arr[i])
//     }
//     connection.query(sqlString,[ado_id,ado_master,ado_title,ado_image,ado_content,ado_status,ado_date],function(err, results) {
//       if(err) {
//         console.log(err.message)
//       }
//       console.log("新建领养信息成功");
//       res.end("新建领养信息成功")
//     })
//   })
//
// })

//获取用户信息通过ID
app.use('/getuserinfo', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.FIND_USER_BY_ID
  var user_id = req.body.user_id;
  if(user_id ==''){
    res.send("404")
  }else{
    connection.query(sqlString,[user_id],function (err, results) {
      if(results.length == 0){
        res.send("404")
      }else{
        var json = results[0]
        // for(var i in results){
        //   console.log(json)
        //   console.log(results[i])
        // }
        res.write(JSON.stringify(json))
        res.end()
      }
    })
  }
})

//获取所有未审核的领养信息
app.use('/getunreviewed', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.GET_UNREVIEWED;

  connection.query(sqlString, [], function (err, results) {
    var json = results;
    console.log(json)
    res.write(JSON.stringify(json));
    res.end();
  })
})

//获取所有已审核的领养信息
app.use('/getadoption', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.GET_ADOPTION;

  connection.query(sqlString, [], function (err, results) {
    var json = results
    // for(var i in results) {
    //   for(var j in results[i]){
    //     json[i][j] = results[i][j]
    //     console.log(json[i][j])
    //   }
    //   json.data
    // }
    res.write(JSON.stringify(json));
    res.end();
  })
})

//申请领养
app.use('/applyadoption', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.FIND_ADOPTION_BY_ID
  var app_user = req.body.app_user
  var app_adoption = req.body.app_adoption
  var app_content = req.body.app_content
  var app_status = '待审核'
  var app_date = req.body.app_date
  connection.query(sqlString,[app_adoption],function (err, results) {
    var sqlString = sqlStr.GET_ROW+"application"
    connection.query(sqlString, [], function (err, results) {
      var sqlString = sqlStr.APPLY_ADOPTION
      var app_id = 100000+results[0].count

      connection.query(sqlString, [app_id, app_user, app_adoption, app_content, app_stauts], function (err, results) {
        // for (var i in results) {
        //   json[i] = results[i]
        // }
        var json = results
        res.write(JSON.stringify(json))
        res.end()
      })
    })
  })
})

//获取申请
app.use('/getapplication', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.FIND_APPLICATION

  var app_adoption = req.body.app_adoption

  connection.query(sqlString, [app_adoption], function (err, results) {
    var json = results
    res.write(JSON.stringify(json))
    res.end()
  })
})

//审核通过领养
app.use('/reviewadoption', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.REVIEW_ADOPTION

  var ado_id = req.body.ado_id

  connection.query(sqlString, [ado_id], function (err, results) {
    res.send('审核通过')
  })
})

//拒绝通过领养信息
app.use('/refuseadoption', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.REFUSE_ADOPTION

  var ado_id = req.body.ado_id

  connection.query(sqlString, [ado_id], function (err, results) {
    res.send('审核未通过')
  })
})

//获取领养信息通过ID
app.use('/getadoptioninfo', function (req, res) {

  res.header('Access-Control-Allow-Origin', req.header('Origin'));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type,Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header("Access-Control-Max-Age", "1000" ); //
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

  var sqlString = sqlStr.FIND_ADOPTION_BY_ID

  var ado_id = req.body.ado_id

  connection.query(sqlString, [ado_id], function (err, results) {
    if (results.length > 0) {
      var json = results[0]
      res.write(JSON.stringify(json))
      res.end()
    }
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
