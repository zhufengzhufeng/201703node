<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data">
        <img :src="item" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
    import Swiper from 'swiper';//会直接找到dist下的swiper.js
    import 'swiper/dist/css/swiper.css';//引入swipercss样式
    export default {
        props:['data'],//会挂载在当前组件的实例上
        data(){
            return {}
        },
        mounted(){
           new Swiper('.swiper-container', {
            loop: true,
            // If we need pagination
            pagination: '.swiper-pagination',
          });
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
  img{width: 100%}
</style>
