## Table list
---
## user

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|user_id|varchar|not null|用户ID|主键|
|user_pwd|varchar|not null|用户密码||
|user_email|varchar|null|用户邮箱||
|user_icon|varchar|null|用户头像||
|user_moblie|varchar|null|联系方式|||

```
CREATE TABLE user(
   user_id varchar(32) not null,
   user_pwd varchar(32) not null,
   user_email varchar(64) null,
   user_icon varchar(64) null,
   user_moblie varchar(16) null,
   CONSTRAINT PRIMARY KEY (user_id)
  );
```
---
## administrator

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|admin_id|varchar|not null|管理员ID|主键|
|admin_pwd|varchar|not null|管理员密码||
|admin_rank|varchar|not null|管理员权限|||

```
CREATE TABLE admin(
   admin_id varchar(32) not null,
   admin_pwd varchar(32) not null,
   admin_rank varchar(5) not null default '1',
   CONSTRAINT PRIMARY KEY(admin_id)
  );
```
---
## adoption

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|ado_id|varchar|not null|领养ID|主键|
|ado_master|varchar|not null|领养发起人|外键(user_id)|
|ado_title|varchar|not null|领养标题||
|ado_image|varchar|null|宠物照片||
|ado_content|text|not null|领养内容||
|ado_status|varchar|not null|领养状态|||
|ado_date|date|not null|发送日期|||

```
CREATE TABLE adoption (
  ado_id varchar(32) not null,
  ado_master varchar(32) not null,
  ado_title varchar(128) not null,
  ado_image varchar(32) null,
  ado_content text not null,
  ado_date date not null,
  ado_status varchar(32) not null default '待审核',
  CONSTRAINT CHECK(ado_status in ('待审核','已通过','未通过','已领养')),
  CONSTRAINT PRIMARY KEY(ado_id),
  CONSTRAINT FOREIGN KEY(ado_master) REFERENCES user(user_id)
  );
```
---
## application

|字段|类型|是否为空|含义|约束条件|
|:-:|:-:|:-:|:-:|:-:|
|app_id|varchar|not null|申请ID|主键|
|app_user|varchar|not null|申请人|外键(user_id)|
|app_adoption|varchar|not null|申请领养ID|外键(ado_id)|
|app_content|text|not null|申请内容||
|app_status|varchar|not null|申请状态|||
|app_date|date|not null|发送日期|||

```
CREATE TABLE application(
  app_id varchar(32) not null,
  app_user varchar(32) not null,
  app_adoption varchar(32) not null,
  app_status varchar(16) not null default '未通过',
  app_content text not null,
  CONSTRAINT PRIMARY KEY(app_id),
  CONSTRAINT FOREIGN KEY(app_user) REFERENCES user(user_id),
  CONSTRAINT FOREIGN KEY(app_adoption) REFERENCES adoption(ado_id),
  CONSTRAINT CHECK(app_status in ('未通过','已通过'))
  );
```
