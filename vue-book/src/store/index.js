import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
Vue.use(Vuex);
const state = {
  collect:[] //存放所有的商品
};
export default new Vuex.Store({
  state,
  getters,
  mutations
});
