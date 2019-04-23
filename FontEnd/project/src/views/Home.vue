<template>
    <div class="home-box">
      <Nav :color="bgd"></Nav>
      <ButtonSet></ButtonSet>
      <div class="ado-table">
        <div class="ado-item"  v-for="item in ado_list">
          <div class="top">
            <h2>{{item.ado_title}}</h2>
          </div>
          <!-- {{item.ado_master}} -->
          <router-link :to="{ path: '/components/AdoPage/' + item.ado_id }">
            <div class="ado-img" v-html="item.ado_content">
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
      ado_list:[]
    }
  },
  methods: {
    getAdoption(){
    const self = this
    axios.post('http://localhost:3000/getadoption',{})
      .then(function (response) {
        var reg = /<img src="data:image\/jpeg;base64,[^\n]*">/;
        self.ado_list = response.data
        for(var i in self.ado_list){
          self.ado_list[i].ado_date = new Date(self.ado_list[i].ado_date).toLocaleDateString()
          self.ado_list[i].ado_content = self.ado_list[i].ado_content.match(reg)
          if (self.ado_list[i].ado_content!=null){
            self.ado_list[i].ado_content = self.ado_list[i].ado_content[0]
          }
        }
      })
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
