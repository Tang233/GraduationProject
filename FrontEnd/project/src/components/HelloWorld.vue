<template>
  <div class="hello">
    <Navigation :color="colorMsg"></Navigation>
  </div>
</template>

<script>
import Navigation from "@/components/NavDemo"
export default {
  name: 'HelloWorld',
  data () {
    return {
      colorMsg: '#e7e7e7'
    }
  },
  components: {
    Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
