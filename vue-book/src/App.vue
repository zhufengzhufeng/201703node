<template>
    <div>
      <router-view></router-view>
      <tab></tab>
    </div>
</template>
<script>
import Tab from 'components/Tab'
export default {
  components:{
    Tab
  }
}
</script>
<style scoped>
/*每个组件都保管着 自己的样式 与其他人无关*/
</style>
