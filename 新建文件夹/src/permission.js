//  做权限验证处理
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar 进度条
import 'nprogress/nprogress.css' // progress bar style进度条样式
import { getToken } from '@/utils/auth' // get token from cookie 在cookies中存token
import getPageTitle from '@/utils/get-page-title'  // 获取页面标题

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start() // 开始执行进度条

  // documennt dom 文档对象
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) { // 第一层验证;验证token 
    if (to.path === '/login') { 
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done() // 结束进度条
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {// 第二层验证 验证用户信息
        next()
      } else {
        try {
          console.log('get user info')
          // get user info
          await store.dispatch('user/getInfo')  // 触发action store/modules/user/getInfo

          next()  // 如果可以过去用户信息;放行
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken') // 触发重置token
          Message.error(error || 'Has Error')    // 提示错误
          next(`/login?redirect=${to.path}`)     // 跳转奥登陆页面
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    // '/login'.indexng(to.path) !== -1 true >>> to.path==/login 跳转的挡路
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)  // 其他页面虽然没有权限但是也会到登陆也爱民
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  // NProgress.done()
})
/**
 * 权限验证流程
 * 1: 判断是否有token
 * 有token
 * 1.1 在看是不是到登陆页面  是 跳转到首页 
 *     否:获取用户信息; 能 过  不能 重置顶token.并跳转到登陆页面
 * 没有
 * 再次判断是否跳转的登陆 是.跳转 不是 重定向到 登陆
 */
// vue 权限控制做过吗? token 知道吗? 