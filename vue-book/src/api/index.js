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
//获取一本书
export function getOneBook(id) {
  return axios.get('/api/book?id='+id)
}
//修改图书
export function updateBook(id,data) {
  return axios.put('/api/book?id='+id,data)
}
