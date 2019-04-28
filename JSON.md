# JSON FORMAT

## Sever Hostname:https://localhost:3000/
## Web Hostname: https://localhost:8080/
## Database name: projectdb

## Send to Server:

Function: Login
```
Method: POST
Path: /login
JSON: {
 user_id: "",
 user_pwd: ""
}
```

Function: Register
```
Method: POST
Path: /register
JSON: {
  new_id: "",
  new_pwd: "",
  new_email: "",
  new_icon: "",
  new_moblie: ""
}
```
Function: AdminLogin
```
Method: POST
Path: /adminlogin
JSON: {
 admin_id: "",
 admin_pwd: ""
}
```

Function: Get User Info By Id
```
Method: POST
Path: /getuserinfo
JSON: {
  user_id: ""
}
return JSON: {
  user_id: "",
  user_pwd: "",
  user_email: "",
  user_icon: "",
  user_mobile: ""
}
```

Function: New Adoption
```
Method:POST
Path: /newadoption
JSON: {
  ado_master:"",
  ado_title:"",
  ado_content: "",
  ado_image:"",
  ado_date: new Date().toLocaleDateString()
}
```

Function: Apply Adoption
```
Method: POST
Path:/applyadoption
JSON: {
  app_user: "",
  app_adoption: "",
  app_content: "",
  app_date: new Date().toLocaleDateString()
}
```

Function: Review Adoption
```
Method: POST
Path:/reviewadoption
JSON: {
  ado_id:""
}
```

Function: Refuse Adoption
```
Method: POST
Path:/refuseadoption
JSON: {
  ado_id:""
}
```

Function: Get Application
```
Method: POST
Path:/getapplication
JSON: {
  app_adoption: ""
}
return JSON: [{
  app_id: "",
  app_user: "",
  app_adoption: "",
  app_content: "",
  app_status: "",
  app_date: ""
  }]

```

Function: Get Adoption By ID
```
Method: POST
Path:/getadoptioninfo
JSON:{
  ado_id:""
}
return JSON:{
  ado_id: "",
  ado_master: "",
  ado_title: "",
  ado_image: "",
  ado_content: "",
  ado_status: "",
  ado_date: ""
}
```

Function: Get User Application
```
Method: POST
Path: /getuserapplication
JSON:{
  user_id:""
}
return JSON:[{
  app_id: "",
  app_user: "",
  app_adoption: "",
  app_content: "",
  app_status: "",
  app_date: ""
}]
```

Function: Get User Adoption
```
Method: POST
Path: /getuseradoption
JSON:{
  user_id:""
}
return JSON:[{
  ado_id: "",
  ado_master: "",
  ado_title: "",
  ado_content: "",
  ado_status: "",
  ado_date: ""
}]
```

Function: Agree Application
```
Method: POST
Path: /agreeapplication
JSON:{
  app_id:""
}
```

Function: Disagree Application
```
Method: POST
Path: /disagreeapplication
JSON:{
  app_id:""
}
```

---

## Get From Server:

Function: Get unreviewed adoption
```
Method: GET
Path: /getunreviewed
JSON:{}
return JSON:[{
  ado_id: "",
  ado_master: "",
  ado_title: "",
  ado_image: "",
  ado_content: "",
  ado_status: "",
  ado_date:""
}]
```

Function: Get reviewed adoption
```
Method: GET
Path: /getadoption
JSON:{}
return JSON:[{
  ado_id: "",
  ado_master: "",
  ado_title: "",
  ado_image: "",
  ado_content: "",
  ado_status: "",
  ado_date:""
}]
```

Function:
