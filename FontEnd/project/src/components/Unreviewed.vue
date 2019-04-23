<template lang="html">
  <div class="box">
    <myCanvas :dotsNum="dotsNum" :isColor="false"></myCanvas>
    <div class="unreviewed-box">
      <div class="ado-title">{{ado_title}}</div>
      <div class="ado-date">日期：{{ado_date}}</div>
      <div class="ado-master">发起人：{{ado_master}}</div>
      <div class="ado-id">领养ID：{{ado_id}}</div>
      <div class="ado-status">审核状态：{{ado_status}}</div>
      <div class="ado-content">基本情况：{{ado_content}}</div>
      <div class="ado-img">{{ado_img}}</div>
      <button class="pass" v-on:click="passado">通过</button>
      <button class="nopass" v-on:click="nopass" >不通过</button>
    </div>
  </div>
</template>

<script>
import myCanvas from 'vue-atom-canvas'
export default {
  name: 'Unreviewed',
  components: {
    myCanvas
  },
  data(){
    return{
      dotsNum: '50',
      isColor: 'true',
      roundColor: '#999',
      lineColor: '#ccc',
      ado_title: '小黄广州宠物领养',
      ado_date: '2019年4月12日',
      ado_master: 'ian',
      ado_id: '123456',
      ado_status: '未审核',
      ado_content: '类型：小狗   性别：公   年龄：3个月   地址：广州  联系方式：12345678',
      ado_img: ''
    }
  },
methods: {
    passado: function() {

    }
  }
}
</script>

<style lang="css">
.unreviewed-box{
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 30px;
  top: 100px;
  left: 300px;
  width: 700px;
  height: 1000px;
  background-color: #C8E7EC;
  border-radius: 10px;
  box-shadow: 0px 10px 7px #777777;
}
.ado-title{
  position: absolute;
  padding-bottom: 20px;
  font-family: "微软雅黑";
  font-size: 2rem;
  top: 20px;
}
.ado-date{
  position: absolute;
  top: 70px;
}
.ado-master{

  position: absolute;
  top: 100px;
}
.ado-id{
  position: absolute;
  top: 130px;
}
.ado-status{
  position: absolute;
  top: 160px;
}
.ado-content{
  position: absolute;
  top: 190px;
}
.ado-img{
  position: absolute;
  top: 220px;
  width: 700px;
  height: 600px;
  border: 5px solid white;
}
.pass{
  position: absolute;
  top: 850px;
  left: 100px;
  width: 200px;
  height: 50px;
  font-family: "微软雅黑";
  font-size: 1.2rem;

}
.nopass{
  position: absolute;
  top: 850px;
  left: 490px;
  width: 200px;
  height: 50px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
}
</style>
