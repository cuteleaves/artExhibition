import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 手动配置element ui
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
//前面的￥massage是自己命名的，后面的Massage是组件名字
Vue.prototype.$massage=Message
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
import '../css/all.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')