<template>
  <div id="app">
    <div class="back">

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}
#app {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  position: absolute;
  top:0px;
  left: 0px;
  border: hidden;
}
.back{
  z-index:-1;
  position:fixed;
  top:0%;
  left:0%;
  bottom:0%;
  right:0%;
  background-color: #FDFDC4;
}
</style>
