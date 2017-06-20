<template>
    <nav>
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-14052229"></i>
        <span>添加</span>
      </router-link>
    </nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped lang="less">
  nav{
    height: 60px;
    background: #fff;
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    align-items: center;
    a{
      i{font-size: 20px;}
      display: flex;
      flex:1;
      flex-direction: column;
      align-items: center;
    }
    .active{
      color: orangered;
    }
  }
</style>
