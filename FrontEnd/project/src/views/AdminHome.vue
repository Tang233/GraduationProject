<template lang="html">
<!-- <myCanvas :dotsNum="dotsNum" :isColor="false"></myCanvas> -->
  <div class="AdminHome">
    <div class="left-nav">
      <div class="home"><router-link :to="{ path:'/views/AdminHome'}">首页</router-link></div>
    </div>
    <div class="main">
      <h1>未审核领养信息</h1>
      <div class="row table-header">
        <div class="column">
          领养信息ID
        </div>
        <div class="column">
          发布者
        </div>
        <div class="column">
          发布日期
        </div>
        <div class="column">
          标题
        </div>
        <div class="column">
          审核状态
        </div>
      </div>
      <div class="adoption-list"v-for="item in adoption">
          <div class="adoption-item">
          <div class="row">
            <div class="column">
              {{item.ado_id}}
            </div>
            <router-link :to="{ path:'/views/UserPage/'+ item.ado_master }">
              <div class="column">
                {{item.ado_master}}
              </div>
            </router-link>
            <div class="column">
              {{item.ado_date}}
            </div>
            <router-link :to="{ path:'/components/AdoPage/'+ item.ado_id }">
              <div class="column">
                {{item.ado_title}}
              </div>
            </router-link>
            <div class="column">
              {{item.ado_status}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminHome',
  data(){
    return{
      admin_id: "",
      adoption:[{
        ado_id: "",
        ado_master: "",
        ado_title: "",
        ado_content: "",
        ado_status: "",
        ado_date: "",
      }]
    }
  },
  methods:{
    getCookie(){
      var str = document.cookie.split(";")
      var arr
      for(var i in str) {
        arr = unescape(str[i])
        arr = arr.split("=")
        for(var j in arr) {
          if(arr[j] == "admin_id"){
            return arr[Number(j)+1]
          }
        }
      }
    },
    getUnreviewed () {
      const self = this
      this.admin_id = this.getCookie("admin_id")
      if(typeof(this.admin_id) =="undefined"){
        this.$router.push("/views/UserNotFound")
      }
      axios.get('http://localhost:3000/getunreviewed')
        .then(function(response) {
          self.adoption = response.data
          for(var i in self.adoption) {
            self.adoption[i].ado_date = new Date(self.adoption[i].ado_date).toLocaleDateString();
          }
        })
    }
  },
  mounted () {
    this.getUnreviewed()
  }
}
</script>

<style lang="css">
.AdminHome{
  position:absolute;
  top:0%;
  left:0%;
  right:0%;
  bottom:0%;
  display:flex;
  flex-direction:row;
  background-color: white;
}
.left-nav{
  width:200px;
  background-color:#3490DE;
  box-shadow: 0px 5px 5px #777777;
}
.home{
  position: absolute;
  top: 10px;
  left: 70px;
  font-family: "微软雅黑";
  font-size: 1.4rem;
  text-align: center;
}
.home>a{
  text-decoration: none;
  color: white;
}
.adoption_list{
  width:1000px;
  display:flex;
  flex-direction:column;
}
.adoption-item a{
  text-decoration: none;
  font-size:1em;
  color:#777777;
}
.adoption-item a>.column{
  background-color:#e7e7e7;
  color:#777777;
  border-bottom:1px solid #777777;
}
.row {
  display:flex;
  flex-direction:row;
}
.table-header>.column{
  background-color: #521262;
  color:#ffffff;
}
.column{
  text-align:center;
  width:150px;
  padding:0px 15px;
  background-color:#444444;
  color: #eeeeee;
  border-bottom:1px solid #eeeeee;
}
</style>
