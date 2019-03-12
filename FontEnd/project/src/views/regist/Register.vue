<template lang="html">
  <div class="register-box">
    <h3>注册</h3>
    <div ><input class="input" type="text" placeholder="请输入用户名" v-model="newUname"></div>
    <div ><input class="input" type="text" placeholder="请输入密码" v-model="newPwd"></div>
    <div ><input class="input" type="text" placeholder="请再次输入密码" v-model="repeatPwd"></div>
    <div ><input class="input" type="text" placeholder="请输入邮箱" v-model="newEmail"></div>
    <div ><input class="input" type="text" placeholder="请设置您的头像" v-model="newIcon"></div>
    <div ><button type="button" v-on:click="Register">注册</button></div>
    <div><a href="/views/login">已有账号？马上登录</a></div>
    <p>{{message}}</p>
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
      message: ''
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
        })
    }
  }
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
