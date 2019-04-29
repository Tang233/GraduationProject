<template>
  <div class="dialog-background">
    <div class="horizontal-center" >
      <div class="vertical-center">
        <div class="dialog" >
          <div class="html">
            <div class="">
              <h3>请输入申请信息</h3>
              <div class="passage-content">
                <textarea rows="8" cols="80"v-model="application.app_content">不能超过140字</textarea>
              </div>
              <button type="button" name="button" @click="ApplyAdoption">提交申请</button>
            </div>
          </div>
        </div>
        <div class="curtain" @click="closeDialog">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
// import '@/css/base.css'
export default {
  name: 'Dialog',
  props: ['application'],
  data () {
    return {
    }
  },
  methods: {
    ApplyAdoption () {
      const self = this
      this.application.app_date = new Date().toLocaleDateString()
      axios.post('http://localhost:3000/applyadoption',this.application)
        .then(function (response) {
          self.$emit('closeDialog', false)
          alert(response.data)
          location.replace(location.href)
        })
    },
    closeDialog: function () {
      this.$emit('closeDialog', false)
    }
  }
}
</script>

<style >
.dialog-background{
  position: fixed;
  z-index: 5;
}
.curtain {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color: rgba(0,0,0,.7);
  z-index: 8;
}
.horizontal-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.vertical-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
}
.dialog {
  width:700px;
  height:300px;
  border-radius: 5px;
  background-color:#ffffff;
  z-index: 12;
}
.html {
  display:flex;
  flex-direction:row;
  justify-content:center;
}
.passage-title {
  text-align: center;
}
</style>
