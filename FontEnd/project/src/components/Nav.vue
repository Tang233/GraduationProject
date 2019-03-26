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
.box{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  position: fixed;
}
/*导航栏样式*/
.nav-box{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  background-color: #FFE2E2;
}

/* 一级导航栏的样式 */
.first-menu{
  left: 0px;
  top: 0px;
  right: 0px;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 5px 5px #ABB2BF;
}
/* logo样式 */
.logo{
  width: 80px;
  height: 70px;
  background-color:#BAD7DF;
}

/* 一级导航栏的每一项的样式 */
.first-menu>div{
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content:center;
  font-size: 1.2em;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
}

/* 一级菜单链接的样式 */
.first-menu>div a{
  color:black;
  text-decoration: none;
  padding: 20px 0px 20px 0px;
}

/* 二级菜单盒子 */
.sec-box{
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 140px;
  height: 140px;
  background-color: #FFE2E2;
  box-shadow:5px 5px 5px #ABB2BF;
}

/* 二级菜单的样式 */
.sec-menu{
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content:center;
  background-color: #FFE2E2;

}

.sec-menu>div{
  display: flex;
  flex-direction:column;
  position: relative;
  justify-content:space-around;

}
/* 二级菜单每一项的样式,调整宽高 */
.nav-right{
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  font-size: 1.2em;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
}
.nav-right>div{
  color:black;
  text-decoration: none;
  padding: 20px 0px 20px 0px;
}
/* 鼠标悬停在二级菜单的其中一项时颜色变化 */


/* 二级菜单链接样式 */

</style>
