// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'


new Vue({
  el: '#app',
  ...App,
  store,//注入store后每一个人的实例上都会$store这个属性
});
