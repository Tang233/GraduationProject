<template>
  <div id="app">
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
</style>
