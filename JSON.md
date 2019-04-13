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
Method: POST
Path: /newadoption
JSON: {
  ado_master: "",
  ado_title: "",
  ado_image: "",
  ado_content: "",
  ado_status: ""
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
  ado_status: ""
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
  ado_status: ""
}]
```

Function: