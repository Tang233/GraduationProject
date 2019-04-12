<template lang="html">
<div class="box":style="{backgroundColor:color}">
  <nav class="nav-box">
    <div class="first-menu">
      <div class="logo">

      </div>
      <div><router-link :to="{ path: '/views/home'}">首页</router-link></div>
      <div><a href="#">个人主页</a></div>
      <div><a href="#">我的领养</a></div>
      <div @mouseenter="secondMenu=true" @mouseleave="secondMenu=false">
        <a href="#">我的申请</a>
        <div class="sec-box">
          <div class="second-menu">
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
  </nav>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Nav',
  props:['color']
}
</script>

<style lang="css">


</style>
