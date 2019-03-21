<template>
    <div>
      <Navigation: color="bgd"></Navigation>
        <h3>欢迎 {{name}}</h3>
        <a href="#" @click="quit">注销登录</a>
</template>

<script>
import axios from 'axios'
import Navigation from '@/views/Nav.vue'
export default {
  name:'Homepage',
  data(){
    return{
      bgd:'#5f6975'
    }
  },
  components: {
    Navigation
  }

}
</script>

<style lang="css">
</style>
