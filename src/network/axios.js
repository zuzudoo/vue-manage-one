import axios from 'axios'
import config from '@/config/index'

// 对当前的环境变量进行一个判断
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }
  interceptors(instance) {
    //添加一个请求拦截器
    instance.interceptors.request.use(config => {
      //在请求之前做一些事
      return config;
    }, err => {
      //请求错误的时候做一些事
      return Promise.reject(err);
    });

    //添加一个响应拦截器
    instance.interceptors.response.use(response => {
      // console.log(response,'response');
      //对返回的数据做一些处理
      return response;
    }, err => {
      console.log(err,'err');
      //对返回的错误做一些处理
      return Promise.reject(err);
    });

  }
  request(options) {
    const instance = axios.create()
    options = {...this.getInsideConfig(),...options}
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)