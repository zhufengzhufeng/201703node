import * as Types from './mutation-types'
const mutations = {
  [Types.ADD_COLLECT](state,obj){
    //1.先判断传递过来的对象是否存在，不存在则放入
      let flag = state.collect.some(item=>item.id === obj.id);
      !flag && state.collect.push(obj);
      localStorage.setItem('collects',JSON.stringify(state.collect));
  },
  [Types.REMOVE_COLLECT](state,id){
      state.collect = state.collect.filter(item=>item.id!==id);
      localStorage.setItem('collects',JSON.stringify(state.collect));
  }
};
export default mutations


/*
let a = {
  b:'c'
}
let obj = {
  [a.b]:1
}
*/
