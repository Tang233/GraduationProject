<template>
    <div>
      <Navigation :color="bgd"></Navigation>
        
    </div>
</template>

<script>
import axios from 'axios'
import Navigation from '@/views/Nav'
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
