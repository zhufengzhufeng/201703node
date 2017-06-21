<template>
    <div>
      数量：{{count}}
    </div>
</template>
<script>
  //辅助函数
    import {mapState} from 'vuex';
    export default {
        data(){
            return {}
        },
        computed:{
          ...mapState(['count']) //默认拿到的结果是一个对象 对象里有count属性，解构放在computed中即可
        },  // {count:0}
        /*computed: {
            count(){
                return this.$store.state.count //可以在计算属性中简化别名
            }
        },*/
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
