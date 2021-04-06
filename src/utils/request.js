import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // widthCredentials: true, // send cookies when cross-domin requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 发送请求前可以在这里做点什么
    if (store.getters.token) {
      // 让每个请求携带token
      // ['X-Token']用户设置的头文件的key值
      // 请根据实际需求修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 请求失败时可以在这里做点什么
    console.log(error) // 调式用
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 如果你想获取头文件和状态码等http信息，请return response => response

  // 自定义确定返回状态
  // 也可通过HTTP状态码判断
  response => {
    const res = response.data

    // 自定义code不是20000，则报错
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008：token错误; 50012：其它客户端已经登录了; 50014：token失效了
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        MessageBox.confirm('您已退出登录，您可以离开该页面或者重新登录', '确认登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
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

export default service