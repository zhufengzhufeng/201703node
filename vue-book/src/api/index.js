//1.引入 axios,不支持jsonp,需要下载第三方jsonp库
import axios from 'axios';

export function getSliders() {
  return axios.get('/api/slider');
}

export function getHot() {
  return axios.get('/api/hot');
}

export function getBook() {
  return axios.get('/api/book')
}
//添加图书 需要传递一个data数据
export function addBook(data) {
  return axios.post('/api/book',data)
}

export function removeBook(id) {
  return axios.delete('/api/book?id='+id)
}
