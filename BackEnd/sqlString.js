var sqlString = {
  GET_ADOPTION: "select * from adoption where ado_status = '已通过' order by ado_date desc",
  GET_UNREVIEWED: "select * from adoption where ado_status = '待审核' order by ado_date desc",
  GET_ROW: "select count(*) as count from ",
  FIND_APPLICATION: "select application.*,user.user_icon from user, application where app_adoption = ? and app_status = '待通过' and user_id = app_user order by app_date desc;",
  FIND_ADOPTION_BY_ID: "select * from adoption where ado_id = ?",
  FIND_USER_BY_ID: "select * from user where user_id = ?",
  FIND_ADMIN_BY_ID: "select * from admin where admin_id = ?",
  FIND_USER_ADOPTION: "select * from adoption where ado_master = ?",
  FIND_USER_APPLICATION: "select * from application where app_user = ? order by app_date desc;",
  INSERT_USER: "insert into user(user_id,user_pwd,user_email,user_icon) values(?,?,?,?);",
  NEW_ADOPTION: "insert into adoption(ado_id,ado_master,ado_title,ado_image,ado_content,ado_status,ado_date) values(?,?,?,?,?,?,?)",
  APPLY_ADOPTION: "insert into application(app_id, app_user, app_adoption, app_content, app_status, app_date) values(?,?,?,?,?,?)",
  REVIEW_ADOPTION: "update adoption set ado_status = '已通过' where ado_id = ?",
  REFUSE_ADOPTION: "update adoption set ado_status = '未通过' where ado_id = ?",
  AGREE_APPLICATION: "update application set app_status = '已通过' where app_id =?",
  DISAGREE_APPLICATION: "update application set app_status = '未通过' where app_id =?",
  FINISH_ADOPTION: "update adoption set ado_status = '已完成' where ado_id = ?",
  CHANGE_USERINFO: "update user set user_mobile = ?,user_email=? where user_id =?",
  CHANGE_PASSWORD: "update user set user_pwd = ? where user_id =?"
}
module.exports = sqlString
