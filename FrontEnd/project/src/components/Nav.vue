<template lang="html">
<div class="box":style="{backgroundColor:color}">
    <ButtonSet></ButtonSet>
    <div class="first-menu">

      <div class="logo">
        <router-link :to="{path: '/'}">
          <img src="../../images/logo.png">
        </router-link>
      </div>
      <div class="item homepage"><router-link :to="{ path: '/'}">首页</router-link></div>
      <div class="item userpage"><a :href="url">个人主页</a></div>
      <!-- <div class="userpage"><router-link :to="{ path: '/views/UserPage/' + id}">个人主页</router-link></div> -->
      <div class="item myado"><router-link :to="{path:'/UserApplication'}">我的领养</router-link></div>

      <div class="item sec-box" @mouseenter="secondMenu=true" @mouseleave="secondMenu=false">
        <a href="#">我的申请</a>
        <div style="position:absolute; top:100%;">
          <div class="sec-menu" v-if="secondMenu">
            <div><router-link :to="{path:'/NewAdoption'}">申请领养</router-link></div>
            <div><a href="#">申请发表领养帖</a></div>
          </div>
        </div>
      </div>

      <div class="nav-right" v-if="!is_Logined">
        <div class="button"><router-link :to="{ path: '/login' }">登录</router-link></div>
        <div class="button"><router-link :to="{ path: '/register' }">注册</router-link></div>
      </div>
      <div class="nav-right" v-if="is_Logined&!is_Admin">
        <div class="user-icon" :title="id">
          <a :href="url">
            <img :src="iconURL" alt="">
          </a>
        </div>
        <div class="button">
          <a href="#" @click="Logout">
            注销
          </a>
        </div>
      </div>
      <div class="nav-right" v-if="is_Logined&is_Admin">
        <div class="user-icon" :title="id">
          欢迎管理员:{{user}}
        </div>
        <div class="button">
          <a href="#" @click="Logout">
            注销
          </a>
        </div>
      </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import ButtonSet from  './ButtonSet.vue'
export default {
  name:'Nav',
  props:['color'],
  data () {
    return {
      user:"",
      secondMenu: false,
      id: "",
      is_Logined: false,
      is_Admin: false,
      url:"http://localhost:8080/views/UserPage/",
      iconURL: require("../assets/icon.jpg")
    }
  },
  methods:{
    Logout() {
      document.cookie = 'user=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      location.replace(location.href)
    },
    getCookie(name){
      const self =this
      var str = document.cookie.split(';')
      var arr
      for (var i in str){
        arr = unescape(str[i])
        arr = arr.split('=')
        for(var j in arr)
        if(arr[j] == name){
          self.id = arr [Number(j)+1]
          self.is_Logined = true
          self.url +=self.id
          return arr[Number(j)+1]
        }
      }
    }
  },
  mounted(){
    // console.log("lala"+this.user_id)
    this.user = this.getCookie("user_id")
    if(typeof(this.user) == "undefined") {
      this.user = this.getCookie("admin_id")
      if(typeof(this.user) == "undefined") {
        this.is_Logined = false
      }else{
        this.is_Logined = true
        this.is_Admin = true
      }
    }else{
      this.is_Logined = true
      this.is_Admin = false
    }
  },
  components:{
    ButtonSet
  }
}
</script>

<style lang="css">
a{
  text-decoration: none;
  color: black;
  font-family: "微软雅黑";
}
.box a{
  font-size: 1.3rem;
}
.first-menu{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 5px 5px #777777;
  background-color: #A8E6CF;
}
.logo{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: pink;
}
.logo>a>img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: pink;
}
.first-menu>div{
  font-family: "微软雅黑";
  font-size: 1.3rem;
  text-decoration: none;

}
.first-menu>.item>a{
  position: absolute;
  width: 150px;
  height: 60px;
  top: 15px;
  text-align: center;
  text-decoration: none;
  color: black;
}
.sec-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 150px;
  height: 200px;
}
.sec-menu{
  position: relative;
  box-shadow: 0px 5px 5px #777777;
  background-color: #A8E6CF;
  z-index: 999;
}
.sec-menu>div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 148px;
  height: 58px;
  z-index: 999;

}

.nav-right{

  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav-right>.button>a{
  position:relative;
  text-decoration: none;
  color: black;
  border: 1px solid;
  border-radius: 10px;
  top: 15px;
  margin: 15px;
  padding: 7px;
}
.user-icon{
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.user-icon img{
  width:50px;
  height:50px;
  border-radius:50%;
  border:2px solid #ffffff;
}
.user-icon>a{
  width:54px;
  height:54px;
  border-radius:50%;
}
</style>
