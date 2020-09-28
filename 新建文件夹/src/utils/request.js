import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
export const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
request.interceptors.request.use(
  config => {
    // do something before request is sent
    // url拼接 uuid  token 通过请求头船都
    // 签名, 请求参数加密处理
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => { 
          // token 有问题;就重置token 并跳转到登陆也main
          store.dispatch('user/resetToken').then(() => {
            location.reload() // 刷新页面>>>url重新加载>>>路由全局导航守卫 权限控制
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 注意;响应拦截 服务器状态吗? 对于有问题的token,进行本地重置处理.并刷新也main

// 只要问道 权限控制;token 导航守卫 你就说;我在开中是这么使用用的
// axios 二次封装;做请求和响应拦截器;请求拦截器里面处理;token 通过请求头传递;
// 响应拦截器;处理服务端,有问题的状态吗.对于有问题的token 状态码同意处理.触发vuex 中action ,重置token,然后刷新页面.程序会进入到路由全局守卫,在路由全局守卫中,用token +meta + 用户信息;处理权限控制问题,没有权限跳转到登陆页面,获取权限信息.

export const serve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})