<template>
    <div class="login-box">
        <h3>登录</h3>
        <div ><input class="input" type="text" placeholder="请输入用户名" v-model="username"></div>
        <div ><input class="input" type="text" placeholder="请输入密码" v-model="password"></div>

        <div ><button type="button" v-on:click="Login">登录</button></div>
        <div><a href="#">没有账号？马上注册</a></div>
        <p>{{cookie}}</p>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
      data(){
        return{
          username: '',
          password: '',
          user: {},
          cookie: '123'
        }
      },
      methods: {
      Login: function () {
        const self = this
        axios.post('http://localhost:3000/login', {user_id: this.username, user_pwd:this.password})
          .then(function (response) {
            self.user = response.data
            alert(self.user)
          })
      },
      getCookie: function (column) {
        var str = document.cookie.split(';')
        var arr
        for (var i in str) {
          arr = unescape(str[i])
          arr = arr.split('=')
          for (var j in arr) {
            if (column === arr[j]) {
              console.log(arr[Number(j) + 1])
              return arr[Number(j) + 1]
            }
          }
        }
      }
    },
    mounted () {
      this.cookie = this.getCookie('user_id')
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
