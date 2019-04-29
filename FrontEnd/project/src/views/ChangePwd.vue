<template lang="html">
  <div class="bgimage">
    <Nav :color="bgd"></Nav>
    <div class="change-box">
      <div class="title"><h2>修改密码</h2></div>
      <div class="userid">用户名：{{user_id}}</div>
      <div class="userpwd">原密码：<input type="text" v-model="user_pwd"></div>
      <div class="newpwd">新密码：<input type="text" v-model="new_pwd"></div>
      <div class="repeatpwd">重复密码：<input type="text" v-model="repeat_pwd"></div>
      <div class="newpwd-btn">
        <button type="button" v-on:click="ModifyPwd">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
export default {
  name: 'ChangePwd',
  data(){
    return{
      user_id: '',
      user_pwd: '',
      new_pwd: '',
      repeat_pwd: '',
      bgd:'#5f6975'
    }
  },
  methods: {
    getCookie: function (user_id) {//用户ID
      var str =document.cookie.split(';')
      var arr
      for(var i in str) {
        arr =unescape(str[i])
        arr =arr.split('=')
        for(var j in arr) {
          if(user_id===arr[j]){
            console.log(arr[Number(j)+1])
            return arr[Number(j)+1]
          }
        }
      }
    },
    ModifyPwd: function () {
      const self=this
      var userid=this.getCookie(user_id)
      axios.post('http://localhost:3000/changepwd',{})
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="css">
.bgimage{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFC3;
}
.change-box{
  position: absolute;
  width: 400px;
  height: 400px;
  top: 100px;
  left: 480px;
  display: flex;
  flex-direction: column;
  background-color: #FFA5A5;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #777777;

}
.title{
  position: absolute;
  left: 150px;

}
.userid{
  position: absolute;
  top: 40px;
  left: 20px;
  font-family: "微软雅黑";
  font-size: 1.1rem;

}
.userpwd{
  position: absolute;
  top: 80px;
  left: 20px;
  width: 300px;
  height: 30px;
  background-color: #FFA5A5;
  font-family: "微软雅黑";
  font-size: 1.1rem;

}
.newpwd{
  position: absolute;
  top: 120px;
  left: 20px;
  width: 300px;
  height: 30px;
  font-family: "微软雅黑";
  font-size: 1.1rem;
}
input{
  position: absolute;
  width: 200px;
  height: 25px;
  font-family: "微软雅黑";
  font-size: 1.1rem;
  border: 0px;
  background-color: #FFA5A5;
  border-bottom: 1px solid black;
}
.repeatpwd{
  position: absolute;
  top: 160px;
  left: 20px;
  width: 300px;
  height: 30px;
  font-family: "微软雅黑";
  font-size: 1.1rem;
}
.newpwd-btn>button{
  position: absolute;
  top: 220px;
  left: 150px;
  width: 100px;
  height: 30px;
  font-family: "微软雅黑";
  font-size: 1.1rem;
  background-color: #FFA5A5;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
