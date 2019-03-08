<template>
    <div class="login-box">
        <h3>登录</h3>
        <div ><input class="input" type="text" placeholder="请输入用户名" v-model="username"></div>
        <div ><input class="input" type="text" placeholder="请输入密码" v-model="password"></div>
        <div ><button type="button">登录</button></div>
        <div><a href="#">没有账号？马上注册</a></div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          username: '',
          password: '',
          user: {}
        }
      },
      methods: {
      getUsinfo: function () {
        const self = this
        var id = this.getCookie('user_id')
        axios.post('http://localhost:3000/login', {user_id: id})
          .then(function (response) {
            self.user = response.data
          })
    }
    }
  }
</script>

<style lang="css">
.login-box{
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
