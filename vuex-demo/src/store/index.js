//vuex 是第三方的 npm install vuex --save
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//state就是store的数据，getters获取，是state的计算属性
const state = {
  count:1
};
const getters = {
  calc(state){ //第一个参数就是state,根据state推算出一个新值
    return state.count%2==0?'偶数':'奇数'
  }
};
//异步逻辑要写在action中，通过action在提交mutation中
//mutation只能做同步操作，不能写异步逻辑
const mutations = {
  increment(state,payload){ //mutation函数中的参数是state
    state.count+=payload;
  },
  decrement(state){
    state.count--;
  },
  multiplication(state,payload){
    state.count*=payload
  }
};
//将这个容器导出给main.js中实例使用
export default new Vuex.Store({
  state,
  mutations,
  getters
});
