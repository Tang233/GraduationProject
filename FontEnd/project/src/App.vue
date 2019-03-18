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
html,body{
  height: 100%;
}
#app {
  padding: 0px;
  margin: 0px;
  position: absolute;
  top:0px;
  left: 0px;
  border: hidden;
}
</style>
