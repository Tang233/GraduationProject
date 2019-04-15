<template>
    <div class="home-box">
      <Nav :color="bgd"></Nav>

      <div class="ado-table">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
body{
  background-color: #FDFDC4;
}
.home-box{
  position: absolute;
  width: 100%;
  height: 100%;

}
.ado-table{
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  top: 90px;
  left: 17%;
  width: 900px;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
}
.ado-table>div{
  margin: 10px;
  width: 260px;
  height: 270px;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
}
</style>
