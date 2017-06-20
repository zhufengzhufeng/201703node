<template>
    <div>
      <!--保持缓存 缓存页面-->
      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
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
  .content{
    margin-bottom: 65px;
  }
</style>
