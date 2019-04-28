<template id="">
  <div class="">
    <Nav :color="bgd"></Nav>
    <div class="app-box">
      <div class="title" style="text-align:center;">
        <h2>我的申请信息</h2>
      </div>
      <div class="table" v-for="item in application_list">
        <div class="row">
          <div class="">
            {{item.app_adoption}}
          </div>
          <div class="">
            {{item.app_content}}
          </div>
          <div class="">
            {{item.app_date}}
          </div>
          <div class="">
            {{item.app_status}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Nav from "@/components/Nav.vue"
import axios from'axios'
export default {
  name:'Homepage',
  data(){
    return{
      bgd: '#5f6975',
      user_id: "",
      application_list:[]
    }
  },
  methods: {
    getCookie(name) {
      var str = document.cookie.split(";")
      var arr
      for(var i in str) {
        arr = unescape(str)
        arr = arr.split("=")
        for(var j in arr) {
          if(arr[j] ==name) {
            return arr[Number(j)+1]
          }
        }
      }
    },
    getUserApplication() {
      const self = this
      this.user_id = this.getCookie("user_id")
      if(typeof(this.user_id) == "undefined" ){
        alert("你尚未登陆")
        this.$router.push("/")
      }
      else{
        axios.post('http://localhost:3000/getuserapplication',{user_id:this.user_id})
        .then(function (response) {
          self.application_list = response.data
          for(var i in self.application_list) {
            self.application_list[i].app_date = new Date(self.application_list[i].app_date).toLocaleDateString()
          }
        })
      }
    }
  },
  mounted () {
    this.getUserApplication()
  },
  components:{
    Nav
  }
}
</script>

<style media="screen">
.app-box{
  position:absolute;
  top:100px;
  left:20%;
  padding: 10px;
  width: 931.51px;
  min-height: 500px;
  box-shadow: 0px 5px 15px #777777;
  border-radius: 10px;
  background-color: #FFE8CF;
}
.row{
  display:flex;
  flex-direction:row;
}
</style>
