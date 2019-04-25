<template lang="html">
<div class="apply-box">
  <div class="app-user">申请人：<input type="text"v-model="app_user">{{user_id}}</div>
  <div class="app-adoption">申请号：<input type="text" v-model="app_adoption"> </div>
  <div class="app-content">申请内容：</div>
  <div class="app-date">{{app_date}}</div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
