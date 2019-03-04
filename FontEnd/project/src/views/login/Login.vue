<template lang="html">
  <div class="login">
    <h3>登录</h3>
      <div ><input class="inputUsername" type="text" name="username" placeholder="请输入用户名"></div>
      <div ><input class="inputPassword" type="text" name="password" placeholder="请输入密码"></div>
      <div ><button class="loginButton" type="button" name="loginButton">登录</button></div>
      <span ">没有账号？马上注册</span>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="css">
.login{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.inputUsername{
  width: 200px;
  height: 25px;
  margin-top: 15px;
}
.inputPassword{
  width: 200px;
  height: 25px;
  margin-top: 15px;
}
.loginButton{
  width: 205px;
  height: 25px;
  margin-top: 15px;
}
</style>
