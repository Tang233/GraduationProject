<template lang="html">
  <div class="bgd-box":style="note">
    <div class="register-box">
      <h3>注册</h3>
      <div ><input class="input" type="text" placeholder="请输入用户名" v-model="newUname"></div>
      <div ><input class="input" type="text" placeholder="请输入密码" v-model="newPwd"></div>
      <div ><input class="input" type="text" placeholder="请再次输入密码" v-model="repeatPwd"></div>
      <div ><input class="input" type="text" placeholder="请输入邮箱" v-model="newEmail"></div>
      <div ><button type="button" v-on:click="Register">注册</button></div>
      <div class="login"><a href="/views/login">已有账号？马上登录</a></div>
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      newUname: '',
      newPwd: '',
      repeatPwd:'',
      newEmail:'',
      newIcon:'',
      user: {},
      message: '',
      note: {
        backgroundImage: "url(" + require("../../images/c1.jpg") + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }
    }
  },
  methods: {
    Register: function () {
      const self = this
      axios.post('http://localhost:3000/register',
      {new_id: this.newUname,
       new_pwd:this.newPwd,
       new_email:this.newEmail,
       new_icon:this.newIcon
      })
        .then(function (response) {
          self.user = response.data
          alert(self.user)
          self.$router.push('/login')
        })
    }
  }
}
</script>

<style lang="css">
.bgd-box{
  position: absolute;
  width: 100%;
  height: 100%;
}
.register-box{
  position: absolute;
  top: 90px;
  left: 39%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  opacity: 0.8;
}
h3{
  margin-bottom: 10px;
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
  width: 275px;
  height: 40px;
  margin: 0 auto;
  border: none;
  font-size: 16px;
  margin-bottom: 5px;
}
.login>a{
  color: black;
}
</style>
