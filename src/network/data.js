import axios from "./axios";

export const getMenu = (prams) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: prams
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData',
    method:'get'
  })
}

export const getUser = (params) => {
  return axios.request({
    url: '/user/getUser',
    method:'get',
    params
  })
}
