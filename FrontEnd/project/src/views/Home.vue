<template>
    <div class="home-box">
      <Nav :color="bgd"></Nav>
      <div class="search">
        搜索关键字:<input type="text" name="" value="" v-model="keyword">
        <button type="button" name="button" @click="Search">搜索</button>
      </div>
      <div class="ado-table">
        <div class="ado-item"  v-for="item in results">
          <div class="top">
            <h2>{{item.ado_title}}</h2>
          </div>
          <!-- {{item.ado_master}} -->
          <router-link :to="{ path: '/components/AdoPage/' + item.ado_id }">
            <div class="ado-img" v-html="item.ado_image">
            </div>
          </router-link>
          <div class="bottom">
            <div class="author">
              来自
              <router-link :to="{ path: '/views/UserPage/' + item.ado_master }">
                {{item.ado_master}}
              </router-link>
            </div>
            <div class="date">
              {{item.ado_date}}
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
import ButtonSet from '@/components/ButtonSet'
export default {
  name:'Homepage',
  data(){
    return{
      bgd:'#5f6975',
      ado_list: [],
      results: [],
      keyword: ""
    }
  },
  methods: {
    getCookie(name) {
      var arr = document.cookie.split(';')
      console.log(arr)
      for(var i in arr) {
        var str = unescape(arr[i])
        str = str.split('=')
        if(str[0]==name){
          return str[1]
        }
      }
    },
    getAdoption(){
    const self = this
    console.log(this.getCookie('user_id'))
    // console.log
    axios.post('http://localhost:3000/getadoption',{})
      .then(function (response) {
        var reg = /<img src="data:image\/[a-z]*;base64,[^\n]*">/;
        self.ado_list = response.data
        for(var i in self.ado_list){
          self.ado_list[i].ado_date = new Date(self.ado_list[i].ado_date).toLocaleDateString()
          self.ado_list[i].ado_image = self.ado_list[i].ado_content.match(reg)

          if (self.ado_list[i].ado_image!=null){
            self.ado_list[i].ado_image = self.ado_list[i].ado_image[0]
          }
          else{
            self.ado_list[i].ado_image = '<img src='+require('../../images/icon.jpg')+'>'
            // alert(self.ado_list[i].ado_content)
          }
        }
        self.results=self.ado_list
      })
    },
    Search(){
      var flag=false
      this.results=[]
      var reg = new RegExp("[^\n]*"+this.keyword+"[^\n]*","gim")
      for(var i in this.ado_list) {
        for(var j in this.ado_list[i]) {
          if(j=="ado_image"){
            continue
          }
          if(j=="ado_content") { //剔除去图片
            var temp =/<img src="data:image\/[a-z]*;base64,[^\n]*">/
            var d= this.ado_list[i][j].match(temp)
            for(var k in d) {
              this.ado_list[i][j]=this.ado_list[i][j].replace(d[k],"")
            }
          }
          var arr = this.ado_list[i][j].match(reg)
          if(arr!=null){
            flag=true
            this.results.push(this.ado_list[i])
            break
          }
        }
      }
      if(flag==false) {
        this.results=[]
      }
    }
  },
  mounted () {
    this.getAdoption()
  },
  components: {
    Nav, ButtonSet
  }
}
</script>

<style lang="css">

.home-box{
  position: absolute;
  width: 100%;
  height: 100%;
}
.search{
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 80px;
  left: 17%;
}
.ado-table{
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  top: 120px;
  left: 17%;
  width: 900px;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
}
.ado-item{
  margin: 10px;
  width: 260px;
  min-height: 280px;
  padding:5px;
  border-radius: 10px;
  background-color: #FFE8CF;
  border: 1px solid;
  display:flex;
  flex-direction:column;
}
.top{
  text-align:center;
}
.ado-img{
  width:200px;
  height:220px;
}
.ado-img>img{
  margin: 10px 30px;
  width:200px;
  height:200px;
}
.bottom{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}
.author>a{
  color:#aaaaaa;
  font-size:1em;
}
h2{
  word-wrap:break-word;
}
</style>
