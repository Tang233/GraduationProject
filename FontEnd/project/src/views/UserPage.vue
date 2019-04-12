<template>
<div class="body-style">
  <Nav :color="bgd"></Nav>
  <div class="user-box">
    <div class="icon-box">
      <img src="../../images/icon.jpg" alt="">
    </div>

    <div class="userinfo-box">
      <div class="user-name">用户名：{{user_id}}</div>
      <div class="user-email">邮箱：{{user_email}}</div>
      <div class="user_mobile">联系方式：{{user_mobile}}</div>
    </div>
  </div>

  <div class="apply-info">{{user_apply}}</div>

</div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
export default {
  name: 'UserPage',
  data(){
    return{
      user_id: 'baojian123',
      user_email: '1825949538@qq.com',
      user_mobile: '15817017250',
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
  background-color: #FEFDCA;
}
.body-style{
  width: 100%;
  height: 100%;
  border: hidden;
  background-color: #FEFDCA;
}

.user-box{
  position: absolute;
  width: 60%;
  height: 200px;
  left: 20%;
  top:100px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #3A3F4B;
  background-color: #FFE8CF;
}

.icon-box{
  position: absolute;
  height: 150px;
  width: 150px;
  top: 15%;
  left: 10%;

}
.icon-box>img{
  position: absolute;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}
.userinfo-box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  padding: 5px;
  width: 500px;
  height: 100px;
  top: 25%;
  left: 30%;
}

.apply-info{
  position: absolute;
  width: 60%;
  height: 100%;
  top: 350px;
  left: 20%;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #3A3F4B;
  background-color: #FFE8CF;
}
</style>
