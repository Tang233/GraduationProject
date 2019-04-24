<template lang="html">
<!-- <myCanvas :dotsNum="dotsNum" :isColor="false"></myCanvas> -->


</template>

<script>
import myCanvas from 'vue-atom-canvas'
export default {
  name: 'AdminHome',
  components: {
    myCanvas
  },
  data(){
    return{
      dotsNum: '50',
      isColor: 'true',
      roundColor: '#999',
      lineColor: '#ccc'
    }
  }
}
</script>

<style lang="css">
</style>
