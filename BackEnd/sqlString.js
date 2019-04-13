var sqlString = {
  GET_ADOPTION: "select * from adoption where ado_status = '已审核'",
  GET_UNREVIEWED: "select * from adoption where ado_status = '未审核'",
  GET_ADOPTION_BY_ID: "select * from adoption where ado_id = ?",
  GET_ROW: "select count(*) as count from ",
  FIND_USER_BY_ID: "select * from user where user_id = ?",
  INSERT_USER: "insert into user(user_id,user_pwd,user_email,user_icon) values(?,?,?,?);",
  NEW_ADOPTION: "insert into adoption(ado_id,ado_master,ado_title,ado_image,ado_content,ado_status) values(?,?,?,?,?,?)",
  APPLY_ADOPTION: "insert into application(app_id, app_user, app_adoption, app_content, app_status) values(?,?,?,?,?)"
}
module.exports = sqlString
