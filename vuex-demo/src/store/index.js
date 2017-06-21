//vuex 是第三方的 npm install vuex --save
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  count:1
};

const mutations = {
  increment(state){ //mutation函数中的参数是state
    state.count++;
  },
  decrement(state){
    state.count--;
  },
  multiplication(state){
    state.count*=2
  }
};

//将这个容器导出给main.js中实例使用
export default new Vuex.Store({
  state,
  mutations
});
