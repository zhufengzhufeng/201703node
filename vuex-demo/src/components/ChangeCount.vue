<template>
    <div>
      <button @click="add">+</button>
      <button @click="minus">*</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {
            add(){
              this.$store.commit('increment')
            },
            minus(){
              this.$store.commit('multiplication')
            }
        }
    }
</script>
<style scoped>

</style>
