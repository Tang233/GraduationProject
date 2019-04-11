<template>
<div class="userbox">

  <div class="icon-box":style="note">
  </div>
  <img src="../../images/icon.jpg" alt="">
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      note:{
        backgroundImage: "url(" + require("../../images/icon.jpg") + ")"
      }
    }
  }
}
</script>

<style lang="css">
.userbox{
  border: 1px solid;

}
.icon-box{
  
}
</style>
