## Table list
---
## USER

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|use_id|varchar|not null|用户ID|主键|
|user_pwd|varchar|not null|用户密码||
|user_email|varchar|null|用户邮箱||
|user_icon|varchar|null|用户头像||
|user_moblie|varchar|null|联系方式||

```
CREATE TABLE USER(
   use_id varchar(32) not null,
   user_pwd varchar(32) not null,
   user_email varchar(64) null,
   user_icon varchar(64) null,
   user_moblie vachar(16) null,
   CONSTRAINT PRIMARY KEY(user_id)
  );
```
---
## ADMINISTRATOR

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|admin_id|varchar|not null|管理员ID|主键|
|admin_pwd|varchar|not null|管理员密码||
|admin_rank|varchar|not null|管理员权限||

```
CREATE TABLE ADMIN(
   admin_id varchar(32) not null,
   admin_pwd varchar(32) not null,
   admin_rank varchar(5) not null default '1',
   CONSTRAINT PRIMARY KEY(admin_id),
  );
```
---
## FOSTERAGE

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|fost_id|varchar|not null|领养ID|主键|
|fost_master|varchar|not null|领养发起人|外键(user_id)|
|fost_title|varchar|not null|领养标题||
|fost_content|text|not null|领养内容||
|fost_status|varchar|not null|领养状态||


```
CREATE TABLE FOSTERAGE (
  fost_id varchar(32) not null,
  fost_master varchar(32) not null,
  fost_title varchar(128) not null,
  fost_content text not null,
  fost_image varchar(32) null,
  fost_status varchar(16) not null default '未审核',
  CONSTRAINT PRIMARY KEY(fost_id),
  CONSTRAINT FOREIGN KEY(fost_master) REFERENCES AS user(user_id),
  CONSTRAINT CHECK(fost_status in ('未审核','已通过','未通过','已领养'))
  );
```
---
## APPLICATION

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|app_id|varchar|not null|申请ID|主键|
|app_user|varchar|not null|申请人|外键(user)|
|app_status|varchar|not null|申请状态||

```
CREATE TABLE APPLICATION (
  app_id varchar(32) not null,
  app_user varchar(32) not null,
  app_status varchar(16) not null default '未通过',
  app_content varchar(256) null,
  CONSTRAINT PRIMARY KEY(app_id),
  CONSTRAINT FOREIGN KEY(app_user) REFERENCES AS user(user_id),
  CONSTRAINT CHECK(app_status in ('未通过','已通过'))
  );
```
---
