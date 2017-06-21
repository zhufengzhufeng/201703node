<template>
  <div id="app">
    hello vuex
    <Count></Count>
    <ChangeCount></ChangeCount>
  </div>
</template>

<script>
import Count from './components/Count.vue';
import ChangeCount from './components/ChangeCount';
export default {
  components:{
    Count,ChangeCount
  }
}
</script>

<style>

</style>
