<template id="">
  <avatar-cutter
  v-if="showCutter"
  return-type="url" // uploadAvatar回调函数返回的数据类型，'url'返回图片链接，'file'返回封装好的文件数据
  @cancel="showCutter = false"
  @enter="uploadAvatar" // 裁剪完成后的回调函数
>
</avatar-cutter>
</template>

<script>
import avatar-cutter from "/vue-avator-tailor"
export default {
  data () {
    return {
      showCutter:true
    }
  },
  methods:{
    uploadAvatar() {
      
    }
  },
  components:{
    avatar-cutter
  }
}
</script>

<style media="screen">

</style>
