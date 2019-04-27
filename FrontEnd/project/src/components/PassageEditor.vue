<template lang="html">
  <div class="passage-editor">
    <div class="preview">
      <div class="ado-box">
        <div class="ado-title"><span>{{adoption.ado_title}}</span></div>
        <div class="ado-date">
          <span>日期：{{adoption.ado_date}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>发起人：{{adoption.ado_master}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="title-one"> <p>基本情况：</p></div>
        <div class="ado-button">
          <button type="button" name="button">申请领养</button>
        </div>

        <div class="ado-content" ><span v-html="adoption.ado_content"></span><br/></div>
      </div>
    </div>
    <!-- <div class="preview" v-html="content"></div> -->
    <div class=" editor">
      <div class="passage">
        <h3>标题：</h3><input type="text" name="" value="" v-model="adoption.ado_title">
        <quillEditor v-model="adoption.ado_content" :options="editorOption"></quillEditor>
      </div>
    </div>
    <!-- <button @click="getContent()" type="button" name="button">查看内容</button> -->
    <button @click="submitContent()" type="button" name="button">提交内容</button>
  </div>
</template>

<script>
import axios from 'axios'
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Quill.register('modules/ImageDrop', ImageDrop)
Quill.register('modules/ImageResize', ImageResize)
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  name: 'PassEditor',
  // props:['content'],
  data () {
    return {
      content: '',
      updateUrl: '',
      adoption:{
        ado_master: "",
        ado_title: "",
        ado_content: "",
        ado_image: "",
        ado_date: new Date().toLocaleDateString()
      },
      editorOption: {
        modules: {
          ImageResize: {},
          ImageExtend: {
            name: 'img',
            size: 2, // 单位为M, 1M = 1024KB
            action: '',
            headers: (xhr) => {
            },
            response: (res) => {
              return res.info
            }
          },
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        }
      }
    }
  },
  methods: {
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
    },
    getContent: function () {
      // alert(this.content)
    },
    submitContent: function () {
      const self = this
      self.ado_date = new Date().toLocaleDateString()
      self.ado_master = this.getCookie("user_id")
      if(self.adoption.ado_title == ""){
        alert("标题不能为空")
        return
      }else{
        if(self.adoption.ado_content == ""){
          alert("内容不能为空")
          return
        }
      }
      axios.post("http://localhost:3000/newadoption",this.adoption)
        .then(function (response) {
          alert("发布成功，请等待审核")
          self.$router.push("/")
        })
    }
  },
  mounted () {
    this.adoption.ado_master = this.getCookie('user_id')
  },
  components: {
    quillEditor
  }
}
</script>

<style lang="css">
.passage>.quill-editor:not(.bubble) .ql-container,
.passage>.quill-editor:not(.bubble) .ql-container .ql-editor {
  min-height: 10rem;
  max-height: 25rem;
  padding-bottom: 1rem;
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
  margin: 5px;
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
.ado-button>button{
  position: absolute;
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
</style>
