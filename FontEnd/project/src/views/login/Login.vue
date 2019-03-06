<template lang="html">
  <div>
    <div class="login" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <div ><input class="input" type="text" placeholder="请输入用户名" v-model="username"></div>
        <div ><input class="input" type="text" placeholder="请输入密码" v-model="password"></div>
        <div ><button type="button" v-on:click="login">登录</button></div>
        <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <div ><input class="input" type="text" placeholder="请输入用户名" v-model="newUsername"></div>
      <div ><input class="input" type="text" placeholder="请输入密码" v-model="newPassword"></div>
      <div ><button type="button" v-on:click="register">注册</button></div>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>

export default {
  data(){
          return{
              showLogin: true,
              showRegister: false,
              showTishi: false,
              tishi: '',
              username: '',
              password: '',
              newUsername: '',
              newPassword: ''
          }
      },
      methods:{
          ToRegister(){
          this.showRegister = true
          this.showLogin = false
          },
          ToLogin(){
            this.showRegister = false
            this.showLogin = true
          }
      }

}
</script>

<style lang="css">
.login{
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

p{color:red;}

.register{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

Button{
  display: block;
  width: 250px;
  height: 40px;
  margin: 0 auto;
  border: none;
  font-size: 16px;
  margin-bottom: 5px;
}
span{
  cursor: pointer;
}
span:hover{
  color:#41b883;
}
</style>
