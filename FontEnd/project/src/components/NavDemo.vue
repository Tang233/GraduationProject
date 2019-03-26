<template lang="html">
<div class="box":style="{backgroundColor:color}">
  <nav class="nav-style">
    <div class="first-menu">
      <div class="logo">
        LOGO
      </div>
      <div><router-link :to="{ path: '/views/home'}">首页</router-link></div>
      <div><a href="#">个人主页</a></div>
      <div><a href="#">我的领养</a></div>
      <div  @mouseenter="secondMenu=true" @mouseleave="secondMenu=false">
        <a href="#">我的申请</a>
        <div style="position:absolute;top:100%;">
          <div class="sec-menu" v-if="secondMenu">
            <div><a href="#">申请领养</a></div>
            <div><a href="#">申请发表领养帖</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-right">
      <div class="">
        <div class="button">
          <router-link :to="{ path: '/views/login' }">登录</router-link>
        </div>
      </div>
      <div class="">
        <div class="button">
          <router-link :to="{ path: '/views/regist' }">注册</router-link>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Nav',
  props:['color'],
  data () {
    return {
      secondMenu: false
    }
  }
}
</script>

<style lang="css">
.nav-style{
  position: fixed;
  top:0%;
  left:0%;
  right:0%;
  height:80px;
  background-color:#e7e7e7;
  display:flex;
  justify-content:space-around;
  box-shadow: 0px 5px 7px #777777;
}
.logo{
  height:100%;
  width: 70px;
  background-color:blue;
}
.first-menu{
  height:100%;
  display:flex;
  flex-direction:row;
  width:1200px;
  font-size: 1.2em;
}
.first-menu>div{
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-left:30px;
  padding-right:30px;
}
.first-menu a{
  color:black;
}
.sec-menu{
  position:relative;
  right:30px;
  /* top:100%; */
  width:136.8px;

}
.sec-menu>div{
  height:50px;
  padding:0px 30px 0px 30px;
  background-color:#aaaaaa;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.nav-right{
  float:right;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
}
.nav-right>div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding: 0px 10px 0px 10px;
}
.button{
  padding:10px;
  background:blue;
  border-radius:5px;
}
a{
  text-decoration:none;
}
.button a {
  color: #ffffff;
}
</style>
