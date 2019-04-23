<template lang="html">
<div class="div-box">
  <Nav :color="bgd"></Nav>
  <div class="ado-box">
      <div class="ado-title"><span>{{ado_title}}</span></div>
      <div class="ado-date">
        <span>日期：{{ado_date}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>发起人：{{ado_master}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>领养ID：{{ado_id}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>审核状态：{{ado_status}}</span>
      </div>
      <div class="ado-button">
         <button type="button" name="button">申请领养</button>
      </div>

      <div class="title-one"> <p>基本情况：</p></div>
      <div class="ado-content" ><span v-html="ado_content"></span><br/></div>
  </div>
  <div class="image-box">
    <div class="title-two"><p>宠物相片：</p></div>

    <div class="ado-image">
      <div><img src="../../images/d2.jpg"></div>
      <div><img src="../../images/d2.jpg"></div>
      <div><img src="../../images/d2.jpg"></div>
      <div><img src="../../images/d2.jpg"></div>
      <div>{{ado_img}}</div>
    </div>

      <div class="title-two"><p>宠物相片：</p></div>
      <div class="ado-image">
        <div>{{ado_img}}</div>
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
      ado_id: '000000',
      ado_master: 'baojian123',
      ado_status: '已通过',
      ado_title: '小黄-广州宠物领养',
      ado_date: '2019年4月12日',
      ado_img: '',
      ado_content: '类型：小狗   性别：公   年龄：3个月   地址：广州  联系方式：123456789'
    }
  },
  methods: {
    getUrl(){
      var str=location.href.split('/')
      for(var i in str){
        if(str[i]==='AdoPage'){
          return str[Number(i)+1]
        }
      }
    },
    getAdoInfo(){
      const self = this
      this.ado_id=this.getUrl()
      if(typeof(this.ado_id) =="undefined"){

      }else{
        axios.post('http://localhost:3000/getadoptioninfo',{ado_id: this.ado_id})
        .then(function (response) {
          self.ado_date=response.data.ado_date
          self.ado_id=response.data.ado_id
          self.ado_master=response.data.ado_master
          self.ado_status=response.data.ado_status
          self.ado_title=response.data.ado_title
          self.ado_img=response.data.ado_img
          self.ado_content=response.data.ado_content
        })
      }
    }
  },
  mounted() {
      this.getAdoInfo()
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
  height: 100%;
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
  left: 700px;
  width: 100px;
  height: 54px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
}
.ado-date{
  position: absolute;
  top: 80px;
  left: 30px;
}
.title-one{
  position: absolute;
  left: 30px;
  top: 115px;
  font-family: "微软雅黑";
  font-size: 1.2rem;

}
.ado-content{
  position: relative;
  left: 16px;
  top: 55px;
  width: 775px;
  height: 100px;
  border: 1px solid;
  border-radius: 10px;
  margin-top: 30px;
  padding: 7px;
}

.title-two{
  position: absolute;
  top: 280px;
  left: 30px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  font-weight: bold;

}
.ado-image{
  position: absolute;
  top: 315px;
  left: 25px;
  width: 775px;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.ado-image>div{
  border: 5px solid white;
}
</style>
