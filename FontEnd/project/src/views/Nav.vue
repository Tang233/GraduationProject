<template lang="html">
  <div class="div-box":style="{backgroundColor:color}">
    <nav class="nav-style">
      <ul class="first-menu">
        <li><router-link :to="{ path: '/views/home'}">首页</router-link></li>
        <li><a href="#">个人主页</a></li>
        <li><a href="#">我的领养</a></li>
        <li><a href="#">我的申请</a>
          <ul class="sec-menu">
            <li><a href="#">申请领养</a></li>
            <li><a href="#">申请发表领养帖</a></li>
          </ul>
        </li>
        <li>
          <router-link :to="{ path: '/views/login' }">登录</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/views/regist' }">注册</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Navigation',
  props:['color']
}
</script>

<style lang="css">
.div-box{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  position: fixed;
}
.nav-style{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  background-color: blue;
}
.first-menu{
  width: 100%;
  margin: 0px;
  top: 0px;
  left: 0px;
  padding: 0 20px;
  display: inline-table;
  position: relative;
  background: rgba(0, 0, 0, 0);
}
.sec-menu{
  display: none;
  background:#5f6975;
  position:absolute;
  top:100%;
  padding:0;
}
nav ul li{
  list-style-type: none;
  float: left;
}
nav ul li a {
    display:block;
    padding:25px 40px;
    text-decoration:none;
    font-family:"微软雅黑";
}
nav ul li:hover > ul {
    display:block;
}
nav ul li:hover {
    background:linear-gradient(to bottom,#4f5964,#5f6975);
}
nav ul li:hover a {
    color:#FFF;
}
nav ul ul li {
    float:none;
    border-top:1px solid #6b727c;
    border-bottom:1px solid #575f6a;
}
nav ul ul li a:hover {
    background:#4b545f;
}
</style>
