<template lang="html">
<div class="div-box">
  <Nav :color="bgd"></Nav>
  <Dialog @closeDialog="closeDialog" :application="application" v-if="show_dialog"></Dialog>
  <div class="adoption">
    <div class="ado-box">
      <div class="ado-title"><span>{{ado_title}}</span></div>
      <div class="ado-date">
        <span>日期：{{ado_date}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>发起人：{{ado_master}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>领养ID：{{ado_id}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>审核状态：{{ado_status}}</span>
      </div>
      <div class="title-one"> <p>基本情况：</p></div>
      <div class="ado-button" v-if="is_Logined&!is_Admin&ado_master!=user">
        <button type="button" name="button"  @click="showDialog()">申请领养</button>
      </div>
      <div class="ado-button" v-if="is_Logined&is_Admin&ado_status=='待审核'">
          <button type="button" name="button" @click="Review()">审核通过</button>
          <button type="button" name="button" @click="Refuse()">拒绝通过</button>
          <div class="backhome">
            <router-link :to="{ path:'/views/AdminHome'}">返回主页</router-link>
          </div>
      </div>
      <div class="ado-content" ><span v-html="ado_content"></span><br/></div>
    </div>
    <div class="ado-box">
      <div class="title" style="text-align:center;">
        <h2>正在申请的申请信息</h2>
      </div>
      <div class="list" v-for="item in application_list">
        <div class="row">
          <div class="user">
            <div class="user-icon">
              <img :src="item.user_icon" alt="">
            </div>
            <div class="user-id">
              <router-link :to="{path:'/views/UserPage/'+item.app_user}">
                {{item.app_user}}:
              </router-link>
            </div>
          </div>
          <div class="app-content">
            <p>
              {{item.app_content}}
            </p>
          </div>
          <div class="app-date">
            {{item.app_date}}
          </div>
          <div class="agree" @click="Agree(item.app_id)" v-if="ado_master==user">
            同意
          </div>
          <div class="disagree" @click="Disagree(item.app_id)"  v-if="ado_master==user">
            不同意
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
import Dialog from '@/components/Dialog.vue'
export default {
  name: 'AdoPage',
  data() {
    return{
      is_Logined:false,
      is_Admin: false,
      show_dialog: false,
      user:"",
      bgd: '#5f6975',
      ado_id: '',
      ado_master: '',
      ado_status: '',
      ado_title: '',
      ado_date: '',
      ado_img: '',
      ado_content: '',
      application:{
        app_user: "",
        app_adoption: "",
        app_content: "",
        app_date: ""
      },
      application_list:[{
        app_user: "",
        app_adoption: "",
        app_content: "",
        app_date: ""
      }]
    }
  },
  methods: {
    getUrl(){
      var str=location.href.split('/')
      for(var i in str){
        if(str[i]==='AdoPage'){
          var reg = /[0-9]+/
          return str[Number(i)+1].match(reg)[0]
        }
      }
    },
    getCookie: function (user_id) {
      var str =document.cookie.split(';')
      var arr
      for(var i in str) {
        arr =unescape(str[i])
        arr =arr.split('=')
        for(var j in arr) {
          if(user_id===arr[j]){
            console.log(arr[Number(j)+1])
            return arr[Number(j)+1]
          }
        }
      }
    },
    getAdoInfo(){
      const self = this
      this.ado_id=this.getUrl()
      this.user = this.getCookie("user_id")
      if(typeof(this.user) == "undefined") {
        this.user = this.getCookie("admin_id")
        if(typeof(this.user) == "undefined") {
          this.is_Logined = false
        }else{
          this.is_Logined = true
          this.is_Admin = true
        }
      }else{
        this.is_Logined = true
        this.is_Admin = false
      }
      //无效id
      if(typeof(this.ado_id) =="undefined"){
        self.$router.push('/views/UserNotFound')
      }else{
        axios.post('http://localhost:3000/getadoptioninfo',{ado_id: this.ado_id})
        .then(function (response) {
          self.ado_date=new Date(response.data.ado_date).toLocaleDateString()
          self.ado_id=response.data.ado_id
          self.ado_master=response.data.ado_master
          self.ado_status=response.data.ado_status
          self.ado_title=response.data.ado_title
          self.ado_img=response.data.ado_img
          self.ado_content=response.data.ado_content
          if((self.ado_status != "已通过"&&self.ado_status != "已完成") && self.is_Admin == false){
            self.$router.push("/views/UserNotFound/")
          }
        })
      }
    },
    Review () {
      const self = this
      axios.post('http://localhost:3000/reviewadoption', {ado_id:this.ado_id})
        .then(function (response) {
          alert(response.data)
        })
    },
    Refuse () {
      axios.post('http://localhost:3000/refuseadoption', {ado_id:this.ado_id})
        .then(function (response) {
          alert(response.data)
        })
    },
    showDialog () {
      this.application.app_user = this.user
      this.application.app_adoption = this.ado_id
      this.show_dialog = true
    },
    closeDialog: function (is_show) {
      this.show_dialog = is_show
    },
    getApplication () {
      const self = this
      axios.post('http://localhost:3000/getapplication',{ado_id:this.ado_id})
        .then(function (response) {
          self.application_list = response.data
          for(var i in self.application_list) {
            self.application_list[i].app_date = new Date(self.application_list[i].app_date).toLocaleDateString()
            self.application_list[i].user_icon = require('../assets/'+self.application_list[i].user_icon)
          }
        })
    },
    Agree (id) {
      axios.post('http://localhost:3000/agreeapplication',{app_id:id})
        .then(function (response) {
          alert(response.data)
          location.replace(location.href)
        })
    },
    Disagree (id) {
      axios.post('http://localhost:3000/disagreeapplication',{app_id:id})
        .then(function (response) {
          alert(response.data)
          location.replace(location.href)
        })
    }
  },
  mounted() {
      this.getAdoInfo()
      this.getApplication()
  },
  components: {
    Nav,Dialog
  }
}
</script>

<style lang="css">
p{
  word-wrap:break-word;
}
body{
  background-color: #FDFDC4;
}.passage>.quill-editor:not(.bubble) .ql-container,
.passage>.quill-editor:not(.bubble) .ql-container .ql-editor {
  min-height: 10rem;
  max-height: 25rem;
  padding-bottom: 1rem;
}
.adoption{
  position:absolute;
  top:100px;
  left:20%;
}
.editor {
  width:931.51px;
  display:flex;
  flex-direction:row;
  justify-content:center;
}
.passage-editor{
  position:absolute;
  top:100px;
  left:20%;
}
.passage>.quill-editor{
  width:850px;
}
.div-box{
  position: absolute;
  height: 100%;
  width: 100%;
}
.ado-box{
  margin: 15px;
  padding: 10px;
  width: 931.51px;
  min-height: 500px;
  box-shadow: 0px 5px 15px #777777;
  border-radius: 10px;
  background-color: #FFE8CF;
}
.ado-title{
  padding: 5px;
  margin: 15px;
  width: 300px;
  font-family: "微软雅黑";
  font-size: 2rem;
}
.ado-button{
  position: absolute;
  top: 15px;
  left: 700px;
}
.ado-button>button{
  cursor:pointer;
  width: 100px;
  height: 54px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
}
.backhome>a{
  position: absolute;
  top: 80px;
  width: 100px;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
}
.ado-date{
  top: 80px;
  left: 30px;
}
.title-one{
  left: 30px;
  margin-top: 25px;
  font-family: "微软雅黑";
  font-size: 1.2rem;

}
.ado-content{
  margin-left: 16px;
  width: 880px;
  min-height: 300px;
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
.row{
  margin-bottom:10px;
  display:flex;
  flex-direction:row;
  border:2px solid #000000;
  border-radius:5px;
}
.row>div{
  padding:0px 20px;
}
.user{
  display:flex;
  flex-direction:row;
}
.user-icon img{
  width:50px;
  height:50px;
  border-radius:50%;
  border:2px solid #ffffff;
}
.user-id,.app-content,.app-date,.agree,.disagree{
  font-size:1em;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.app-content{
  width:300px;
}
.agree,.disagree{
  cursor:pointer;
}
</style>
