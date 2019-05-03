<template>
<div class="body-style" >
  <Nav :color="bgd"></Nav>

  <div class="user-box"v-if="seen">
    <div class="icon-box">
      <img :src="iconURL" alt="">
    </div>

    <div class="userinfo-box">
      <div class="user-name">用户名：{{user_id}}</div>
      <div class="user-email">邮箱：{{user_email}}</div>
      <div class="user_mobile">联系方式：{{user_mobile}}</div>
      <div class="modify">
        <button type="button" v-on:click="modifypage">修改信息</button>
      </div>
      <div class="changepassword">
        <button type="button"> <a :href="url">修改密码</a> </button>
      </div>
    </div>
  </div>

  <div class="user-box" v-if="!seen">
    <div class="icon-box">
      <img :src="iconURL" alt="">
    </div>

    <div class="userinfo-box" v-if="!seen">
      <div class="user-name">用户名：{{user_id}}</div>
      <div class="user-email">邮箱：<input type="text" v-model="muser_email"></div>
      <div class="user_mobile">联系方式：<input type="text" v-model="muser_mobile"></div>
      <div class="modify-btn">
        <button type="button" v-on:click="sendmodify">确认修改</button>
      </div>
    </div>
  </div>

  <div class="apply-info" >
    <div class="table" v-for="item in adoption_list">
      <div class="row">
        <div class="column">
          {{item.ado_id}}
        </div>
        <div class="column">
          {{item.ado_title}}
        </div>
        <div class="column">
          {{item.ado_status}}
        </div>
        <div class="column">
          {{item.ado_date}}
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
export default {
  name: 'UserPage',
  data(){
    return{
      iconURL:"",
      user_id: '',
      user_email: '',
      user_mobile: '',
      bgd:'#5f6975',
      muser_email: '',
      muser_mobile: '',
      seen: true,
      url: 'http://localhost:8080/views/ChangePwd',
      adoption_list:[]
    }
  },
  methods: {
    getUrl(){//个人主页ID
      var str =location.href.split('/')
      for(var i in str){
        if(str[i]==='UserPage'){

          return str[Number(i)+1]
        }
      }
    },
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
    getUserInfo: function () {
      const self=this
      this.user_id = this.getUrl()
      if(typeof(this.user_id) == 'undefined'){
        self.$router.push('/views/UserNotFound')
      }
      else{
        var name=this.getCookie("user_id")
        if(this.user_id==name){
          this.seen = true
        }
        else{
          // seen=false
          // this.sendmodifyInfo()
        }
        axios.post('http://localhost:3000/getuserinfo', {user_id: this.user_id})
        .then(function (response) {
          if(typeof(response.data)=='number'){
            self.$router.push('/views/UserNotFound')
          }else{
            self.iconURL = require("../assets/"+response.data.user_icon)
            self.user_id=response.data.user_id
            self.user_email=response.data.user_email
            self.user_mobile=response.data.user_mobile
            console.log(self.user_id)
            console.log(self.user_email)
            console.log(self.user_mobile)
          }
        })
      }
    },
    modifypage: function () {
      this.seen = false
    },
    sendmodify(){
      const self = this
      axios.post('http://localhost:3000/changeuserinfo',
      { muser_mobile: this.muser_mobile,
        muser_email: this.muser_email,
        user_id: this.user_id
      }).then(function (response) {
        alert("修改成功")
      })
    },
    getAdoption() {
      const self = this
      axios.post("http://localhost:3000/getuseradoption",{user_id:this.user_id})
        .then(function (response) {
          self.adoption_list = response.data
          for( var i in self.adoption_list) {
            self.adoption_list[i].ado_date = new Date(self.adoption_list[i].ado_date).toLocaleDateString()
          }
        })
    }
  },
  mounted () {
    this.getUserInfo()
    this.getAdoption()
  },
  components: {
    Nav
  }
}
</script>

<style lang="css">
.body-style{
  width: 100%;
  height: 100%;
  border: hidden;
  background-color: #FEFDCA;
}

.user-box{
  position: absolute;
  width: 60%;
  height: 200px;
  left: 20%;
  top:100px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #3A3F4B;
  background-color: #FFE8CF;
  z-index:2;
}

.icon-box{
  position: absolute;
  height: 150px;
  width: 150px;
  top: 15%;
  left: 10%;
}
.icon-box>img{
  position: absolute;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 7px solid white;
}
.userinfo-box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  padding: 5px;
  width: 500px;
  height: 100px;
  top: 25%;
  left: 35%;
}
.modify>button{
  position: absolute;
  width: 80px;
  height: 30px;
  top: 100px;
  font-family: "微软雅黑";
  font-size: 1rem;
}
.modify-btn>button{
  position: absolute;
  width: 80px;
  height: 30px;
  top: 110px;
  font-family: "微软雅黑";
  font-size: 1rem;
}
.changepassword>button{
  position: absolute;
  width: 80px;
  height: 30px;
  top: 100px;
  left: 100px;
  font-family: "微软雅黑";
  font-size: 1rem;
}
.apply-info{
  position: absolute;
  width: 60%;
  height: 90%;
  top: 350px;
  left: 20%;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #3A3F4B;
  background-color: #FFE8CF;
}
.row{
  display: flex;
  flex-direction: row;
}
</style>
