import axiosWithAuth from './axiosWithAuth';

export default function(url) {
  return axiosWithAuth().get(url)
}