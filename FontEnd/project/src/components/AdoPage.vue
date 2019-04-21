<template lang="html">
<div class="div-box">
  <Nav :color="bgd"></Nav>
  <div class="ado-box">
      <div class="ado-title"><span>{{ado_title}}</span></div>
      <div class="ado-button">
         <button type="button" name="button">申请领养</button>
      </div>
      <p>基本情况：</p>
      <div class="ado-content"><span>{{ado_content}}</span></div>
  </div>
  <div class="image-box">
    <p>宠物相片：</p>
    <div class="ado-image">
      <img src="../../images/d2.jpg">
      <img src="../../images/d2.jpg">
      <img src="../../images/d2.jpg">
      <img src="../../images/d2.jpg">
      {{ado_img}}
    </div>
    <div class="text">
      {{ado_master}}
      {{ado_id}}
      {{ado_status}}
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
export default {
  name: 'AdoPage',
  data() {
    return{
      bgd: '#5f6975',
      ado_id: '',
      ado_master: '',
      ado_status: '',
      ado_title: '小黄-广州宠物领养',
      ado_img: '',
      ado_content: '类型：小狗   性别：公   年龄：3个月   地址：广州  联系方式：123456789'
    }
  },
  methods: {
    getUrl(){
      var str=location.href.spilt('/')
      for(var i in str){
        if(str[i]==='AdoPage'){
          return str[Number(i)+1]
        }
      }
    },
    getAdoInfo(){
        const self=this
        this.ado_id=this.getUrl()
        axios.post('http://localhost:3000/getadoption',{ado_id: this.ado_id})
        .then(function (response) {
          self.ado_id=response.data.ado_id
          self.ado_master=response.data.ado_master
          self.ado_status=response.data.ado_status
          self.ado_title=response.data.ado_img
        })
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
p{
  font-family: "微软雅黑";
  font-size: 1.2rem;
  position:relative;
  margin: 25px 15px 10px 15px;
  width: 100px;

}
.div-box{
  position: absolute;
  height: 100%;
  width: 100%;

}
.ado-box{
  position: absolute;
  top: 100px;
  left: 20%;
  margin: 5px;
  padding: 10px;
  width: 60%;
  box-shadow: 0px 5px 15px #777777;
  border-radius: 10px;
  background-color: #FFE8CF;
}
.ado-title{
  position: absolute;
  padding: 5px;
  margin: 15px;
  width: 300px;
  font-family: "微软雅黑";
  font-size: 2rem;
}
.ado-button>button{
  position: relative;
  top: 15px;
  left: 500px;
  width: 100px;
  height: 54px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
}
.ado-content{
  position: relative;
  left: 16px;
  width: 775px;
  height: 100px;
  border: 1px solid;
  border-radius: 10px;
  padding: 7px;
}
.image-box{
  position: absolute;
  top: 400px;
  left: 20%;
  margin: 5px;
  padding: 10px;
  width: 60%;
  box-shadow: 0px 5px 15px #777777;
  border-radius: 10px;
  background-color: #FFE8CF;
}
.ado-image{
  position: relative;
  left: 16px;
  width: 775px;
  height: 600px;
  border: 5px solid white;
}
.ado-image>img{
  float: left;
}
.text{
  border: 1px solid;
}
</style>
