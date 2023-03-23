import Vue from 'vue'
import uView from 'uview-ui'
import App from './App'
import store from './store'
import bootstrap from './core/bootstrap'
import mixin from './core/mixins/app'
import './js_sdk/ican-H5Api/ican-H5Api'
import {
  navTo,
  showToast,
  showSuccess,
  showError,
  getShareUrlParams
} from './core/app'

Vue.config.productionTip = false

App.mpType = 'app'

// 载入uView库
Vue.use(uView)

// 全局mixin
Vue.mixin(mixin)

// 挂载全局函数
Vue.prototype.$toast = showToast
Vue.prototype.$success = showSuccess
Vue.prototype.$error = showError
Vue.prototype.$navTo = navTo
Vue.prototype.$getShareUrlParams = getShareUrlParams

// 实例化应用
const app = new Vue({
  ...App,
  store,
  created: bootstrap
})
app.$mount()
