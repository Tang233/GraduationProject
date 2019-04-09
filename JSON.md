# JSON FORMAT

## Sever Hostname:https://localhost:3000/
## Web Hostname: https://localhost:8080/
## Database name: projectdb
## 向服务器发送:

Function: Login
```
Method: POST
Path: /login
JSON:{
 user_id:"",
 user_pwd:""
}
```

Function:Register
```
Method: POST
Path: /register
JSON:{
  new_id: "",
  new_pwd: "",
  new_email: "",
  new_icon: ""
}
```

Function: New Adoption
```
Method: POST
Path: /newadoption
JSON:{
  ado_master: "",
  ado_title: "",
  ado_image: "",
  ado_content: "",
  ado_status: ""
}
```

Function: Get adoption
```
Method: POST
Path: /getaudit
JSON:{}
return JSON:{
ado_id: "",
ado_master: "",
ado_title: "",
ado_image: "",
ado_content: "",
ado_status: ""
}
```
---
## 从服务器获取:
