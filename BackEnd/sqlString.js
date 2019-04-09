var sqlString = {
  GET_ROW: "select count(*) from ",
  GET_AUDIT: "select * from adoption where ado_status = '未审核'",
  FIND_USERID: "select * from user where user_id = ?;",
  INSERT_USER: "insert into user(user_id,user_pwd,user_email,user_icon) values(?,?,?,?);",
  NEW_ADOPTION: "insert into adoption(ado_id,ado_master,ado_title,ado_image,ado_content,ado_status) into values(?,?,?,?,?,?)",

}
module.exports = sqlString
