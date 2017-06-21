import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containers/Home'
import List from 'containers/List'
import Add from 'containers/Add'
import Collect from 'containers/Collect'
import Update from 'containers/Update'
Vue.use(Router);//router是一个vue插件 需要use一下才可以使用
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/update/:id',  // this.$route.params.id   /update/1
      component: Update
    },
    { //404路由
      path: '*',
      redirect: '/home'
    }
  ],
  linkActiveClass: 'active'//设置选中的颜色
})
