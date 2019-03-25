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
.nav-box{
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  background-color: lightblue;
}
.fir{
  display: inline-table;
}
.sec{
  position: absolute;
  padding: 0px;
  top: 100%;
}
ul li{
  float: left;
  display: block;
  padding: 25px 40px;
  list-style-type: none;
  background-color: lightgreen;
  position: relative;
}
ul li ul{
  list-style-type: none;

  position: absolute;
}
ul li:hover ul{
  display: block;
}
ul li ul li{
  float: none;
  display: block;
  top: 0px;
  padding: 0px;

}
ul li ul li:hover{
  background-color: lightyellow;
}
</style>
