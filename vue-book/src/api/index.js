//1.引入 axios
import axios from 'axios';

export function getSliders() {
  return axios.get('/api/slider');
}
