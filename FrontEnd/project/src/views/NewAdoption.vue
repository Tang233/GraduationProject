<template id="">
  <div class="">
    <Navigation :color="bgd"></Navigation>
      <PassageEditor></PassageEditor>
  </div>
</template>

<script type="text/javascript">
import axios from "axios"
import PassageEditor from "@/components/PassageEditor.vue"
import Navigation from "@/components/Nav.vue"
export default{
  name: "NewAdoption",
  data () {
    return {
      bgd:'#5f6975',
      user_id:""
    }
  },
  methods:{
    getCookie: function (name) {
      var str = document.cookie.split(";")
      var arr
      for (var i in str) {
        arr = unescape(str[i])
        arr = arr.split('=')
        for(var j in arr) {
          if(arr[j] == name){
            return arr[Number(j)+1]
          }
        }
      }
    }
  },
  mounted(){
    this.user_id = this.getCookie("user_id")
    if(typeof(this.user_id) =="undefined"){
      alert("你尚未登陆,请登陆后再使用此功能")
      this.$router.push("/")
    }
  },
  components:{
    PassageEditor,Navigation
  }
}
</script>

<style scoped>

</style>
