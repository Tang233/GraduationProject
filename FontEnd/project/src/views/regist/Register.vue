<template lang="html">
  <div class="register-box">
    <h3>注册</h3>
    <div ><input class="input" type="text" placeholder="请输入用户名" v-model="newUsername"></div>
    <div ><input class="input" type="text" placeholder="请输入密码" v-model="newPassword"></div>
    <div ><button type="button">注册</button></div>
    <div><a href="#">已有账号？马上登录</a></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.register-box{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input{
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px;
}

button{
  display: block;
  width: 250px;
  height: 40px;
  margin: 0 auto;
  border: none;
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
