<template id="">
  <div class="">
    <Navigation :color="bgd"></Navigation>
      <PassageEditor :content="adoption.ado_content"></PassageEditor>
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
      adoption:{
        ado_master: "",
        ado_title: "",
        ado_content: "123123123",
        ado_image: "",
        ado_date: new Date().toLocaleDateString()
      }
    }
  },
  methods:{
    Submit(content) {
      const self = this
      self.ado_date = new Date().toLocaleDateString()
      self.ado_master = getCookie("user_id")
      self.ado_content = content
      axios.post("http://localhost:3000/newadoption",this.adoption)
        .then(function (response) {
          alert("发布成功，请等待审核")
        })
    }
  },
  components:{
    PassageEditor,Navigation
  }
}
</script>

<style scoped>

</style>
