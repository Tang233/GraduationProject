<template lang="html">
<div class="box":style="{backgroundColor:color}">

    <div class="first-menu">

      <div class="logo"><img src="../../images/logo.png"></div>
      <div class="homepage"><router-link :to="{ path: '/views/home'}">首页</router-link></div>
      <div class="userpage"><router-link :to="{ path: '/views/userPage'}">个人主页</router-link></div>
      <div class="myado"><a href="#">我的领养</a></div>

      <div class="sec-box" @mouseenter="secondMenu=true" @mouseleave="secondMenu=false">
        <a href="#">我的申请</a>
        <div style="position:absolute; top:100%;">
          <div class="sec-menu" v-if="secondMenu">
            <div><a href="#">申请领养</a></div>
            <div><a href="#">申请发表领养帖</a></div>
          </div>
        </div>
      </div>

      <div class="nav-right">
        <div class="button"><router-link :to="{ path: '/views/login' }">登录</router-link></div>
        <div class="button"><router-link :to="{ path: '/views/regist' }">注册</router-link></div>
      </div>
    </div>

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
a{
  text-decoration: none;
  color: black;
  font-family: "微软雅黑";
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
.logo>img{
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
.first-menu>div>a{
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
.nav-right>div>a{
  position:relative;
  text-decoration: none;
  color: black;
  border: 1px solid;
  border-radius: 10px;
  top: 15px;
  margin: 15px;
  padding: 5px;
}
</style>
