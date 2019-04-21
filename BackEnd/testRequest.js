var http=require('http');
// var querystring=require('querystring');
// //发送 http Post 请求
// var postData=querystring.stringify({IsBus:false,
//   Filter:"0",
//   Catalog:"",
//   IsGaoTie:false,
//   IsDongChe:false,
//   CatalogName:"",
//   DepartureCity:"hangzhou",
//   ArrivalCity:"guangzhou",
//   HubCity:"",
//   DepartureCityName:"杭州",
//   ArrivalCityName:"广州",
//   DepartureDate:"2018-05-17",
//   DepartureDateReturn:"2018-05-19",
//   ArrivalDate:"",
//   TrainNumber:""})
// function _TEXT(wrap) {
//     return wrap.toString().match(/\/\*\s([\s\S]*)\s\*\//);
// }

// var options={
  //    hostname:'hotel.tuniu.com',
  //    port:80,
  //    path:'http://trains.ctrip.com/TrainBooking/Ajax/SearchListHandler.ashx?Action=getSearchList',
  //    method:'POST',
  //    headers:{
    //     //'Content-Type':'application/x-www-form-urlencoded',
    //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Content-Length':Buffer.byteLength(postData)
    //   }
    // }
postData = {
  // ado_master: "Jerry",
  // ado_title: "haha",
  // ado_image: "123",
  // ado_content: "kaljsdflk",
  // ado_date: new Date().toLocaleDateString()
}

var options = {
  hostname: 'localhost',
  port: 3000,
  path: '/getunreviewed',
  method: 'POST',
  json: true,
  rejectUnauthorized: true,
  headers: {
    'Accept': 'application/json;version=2.0',
    'Content-Type': 'application/json'
  }
}
var req=http.request(options, function(res) {
    console.log('Status:',res.statusCode);
    console.log('headers:',JSON.stringify(res.headers));
    res.setEncoding('utf-8');
    res.on('data',function(chun){
        console.log('body分隔线---------------------------------\r\n');
        console.info(chun);
    });
    res.on('end',function(){
        console.log('No more data in response.********');
    });
});
req.on('error',function(err){
    console.error(err);
});
req.write(JSON.stringify(postData));
req.end();
