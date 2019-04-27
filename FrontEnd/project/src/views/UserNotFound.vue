<template lang="html">
<div class="notfound-box">
  <Navigation :color="bgd"></Navigation>
  <div class="notfound">
    {{count}}秒后跳转
  </div>
</div>
</template>

<script>
import Navigation from "@/components/Nav"
export default {
  name:"NotFoundPage",
  data (){
    return {
      bgd:'#5f6975',
      count: 5,
      interval:0
    }
  },
  methods:{
    goBack(){
      const self = this
      self.interval=setInterval(function() {
        if(self.count == 0){
          clearInterval(this.interval)
          self.$router.push('/')
        }else{
          self.count--
        }
      },1000)
    }
  },
  mounted(){
    this.count=5
    this.goBack()
  },
  destroyed() {
    console.log("interval destroyed")
    clearInterval(this.interval)
    this.interval = null
  },
  components:{
    Navigation
  }
}
</script>

<style >
.notfound{
  position:relative;
  top:200px;
  display:block;
  width:400px;
  height:400px;
  margin:auto;
  background-image: url("../../images/404.jpg");
  background-size: 500px 473px;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
