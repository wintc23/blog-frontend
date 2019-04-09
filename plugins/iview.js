import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/zh-CN' // Change locale, check node_modules/iview/dist/locale

export default () => {
  Vue.use(iView, {
    locale
  })
}
import 'iview/dist/styles/iview.css'