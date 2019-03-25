<template lang="html">
<div class="box":style="{backgroundColor:color}">
  <nav class="nav-box">
    <ul class="fir">
      <li><router-link :to="{ path: '/views/home'}">首页</router-link></li>
      <li><a href="#">个人主页</a></li>
      <li><a href="#">我的领养</a></li>
      <li><a href="#">我的申请</a>
        <ul class="sec">
          <li><a href="#">申请领养</a></li>
          <li><a href="#">申请发表领养帖</a></li>
        </ul>
      </li>
      <li><router-link :to="{ path: '/views/login' }">登录</router-link></li>
      <li><router-link :to="{ path: '/views/regist' }">注册</router-link></li>
    </ul>
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

  background:rgba(255, 0, 0, 0.3);
}

/* 一级导航栏的样式 */
.fir{
  padding: 0px;
  margin: 0px;
  display: inline;
}

/* 一级导航栏的菜单的样式 */
.fir li{
  float: left;
  display: block;
  padding: 20px 40px;
  list-style-type: none;
  background:rgba(255, 255, 0, 0.3);
  position: relative;
  font-family: "微软雅黑";
  font-size: 20px;
}

/* 一级菜单链接的样式 */
.fir li a{
  text-decoration: none;
}
/* 鼠标悬停在一级菜单时二级菜单的样式 */
ul li:hover ul{
  display: block;
}

/* 二级菜单的样式 */
.sec{
  position: absolute;
  padding: 0px;
  top: 100%;
  left: 0px;
  list-style-type: none;
  display: none;
}

/* 当鼠标悬停二级导航栏时 */
.sec:hover
{
  display: block;
}

/* 二级菜单每一项的样式,调整宽高 */
.sec li{
  float: none;
  display: block;
  width: 60%;
  height: 30%;
  text-align: center;
  position: relative;

}

/* 鼠标悬停在二级菜单的其中一项时颜色变化 */
.sec li:hover{
  background-color: #e7e7e7;
}

/* 二级菜单链接样式 */
.sec li a{
  text-decoration: none;
  width: 100px;
}


</style>
