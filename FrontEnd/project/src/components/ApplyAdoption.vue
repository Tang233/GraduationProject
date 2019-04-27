<template lang="html">

  <div class="apply-box">
    <div class="apply-title"><h2>领养申请</h2></div>
    <div class="app-user">申请人：<input type="text"v-model="app_user">{{user_id}}</div>
    <div class="app-adoption">申请号：<input type="text" v-model="app_adoption"></div>
    <span>申请内容：</span>
    <div class="app-content"><textarea name="name" rows="8" cols="80" v-model="ado_content"></textarea></div>
    <div class="app-date">申请时间：{{app_date}}</div>
    <div class="apply-btn">
      <button type="button" v-on:click="applyadoption">提交申请</button>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      app_user: '',
      user_id: '',
      app_adoption: '',
      app_content: '',
      app_date: '',
    }
  }
}
</script>

<style lang="css">
body{
  background-image: url("../../images/b2.jpg");
  background-size: 500px 471px;
  background-repeat: repeat;
}
.apply-box{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 700px;
  height: 900px;
  top: 100px;
  left: 325px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #777777;
  background-color: #99DDCC;
}
.apply-title{
  position: absolute;
  top: 20px;
  left: 290px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
.app-user{
  position: absolute;
  top: 100px;
  left: 50px;
  width: 300px;
  height: 50px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
.app-user>input{
  width: 200px;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  background-color: #99DDCC;
  border: 0px;
  border-bottom: 1px solid black;
}
.app-adoption{
  position: absolute;
  top: 170px;
  left: 50px;
  width: 300px;
  height: 50px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
.app-adoption>input{
  width: 200px;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 1.1rem;
  background-color: #99DDCC;
  border: 0px;
  border-bottom: 1px solid black;
}
span{
  position: absolute;
  top: 240px;
  left: 50px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
.app-content{
  position: absolute;
  top: 270px;
  left: 50px;
  width: 600px;
  height: 500px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
.app-content>textarea{
  width: 600px;
  height: 500px;
  font-family: "微软雅黑";
  font-size: 1.1rem;
  background-color: #99DDCC;
  border: 1px solid black;
}
.app-date{
  position: absolute;
  top: 800px;
  left: 50px;
  width: 300px;
  height: 50px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
.apply-btn>button{
  position: absolute;
  top: 800px;
  left: 400px;
  width: 200px;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
</style>
