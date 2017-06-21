import * as Types from './mutation-types'
const mutations = {
  [Types.ADD_COLLECT](state,obj){
      state.collect.push(obj);
  },
  [Types.REMOVE_COLLECT](state){

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
