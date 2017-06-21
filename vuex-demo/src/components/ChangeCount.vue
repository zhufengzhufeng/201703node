<template>
    <div>
      {{calc}}
      <button @click="add(5)">+</button>
      <button @click="minus">*</button>
    </div>
</template>
<script>
  import {mapMutations,mapGetters} from 'vuex';
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapGetters(['calc'])
        },
        components: {},
        methods: {
            //经过辅助函数 increment方法就会被挂载在 实例上
          ...mapMutations(['increment','decrement']),
            add(id){
              this.increment(id);
              //this.$store.commit('increment');//在上午的时候 我们要手动commit
            },
            minus(){
              this.$store.commit('multiplication',3)
            }
        }
    }
</script>
<style scoped>

</style>
