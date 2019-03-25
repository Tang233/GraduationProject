<template>
    <div>
      <Nav :color="bgd"></Nav>

    </div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
export default {
  name:'Homepage',
  data(){
    return{
      bgd:'#5f6975'
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="css">
</style>
