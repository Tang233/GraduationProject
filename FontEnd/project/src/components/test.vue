<template lang="html">
<div class="box">
  <nav class="nav-box">
    <ul class="fir">
      <li> <a href="#">导航一</a> </li>
      <li> <a href="#">导航二</a>
        <ul class="sec">
          <li> <a href="#">二级菜单</a> </li>
          <li> <a href="#">二级菜单</a> </li>
        </ul>
      </li>
      <li> <a href="#">导航三</a> </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.box{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  position: fixed;
  background-color: green;
}
/*导航栏样式*/
.nav-box{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  background-color: lightblue;
}

/* 一级导航栏的样式 */
.fir{
  display: inline-table;
}

/* 一级导航栏的菜单的样式 */
.fir li{
  float: left;
  display: block;
  padding: 25px 40px;
  list-style-type: none;
  background-color: lightpink;
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
}

/* 二级菜单每一项的样式 */
.sec li{
  float: none;
  display: block;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 30px;
  text-align: center;
}

/* 鼠标悬停在二级菜单的其中一项时颜色变化 */
.sec li:hover{
  background-color: yellow;
}

/* 二级菜单链接样式 */
.sec li a{
  text-decoration: none;
  width: 40px;
}


</style>
