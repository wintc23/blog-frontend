import Vue from 'vue'
import Avatar from '@/components/Avatar'
import 'simple-vue-tree/dist/lib/simple-tree.css'
import { simpleTree } from 'simple-vue-tree'

Vue.component('avatar', Avatar)

Vue.prototype.$bus = new Vue()
Vue.prototype.$formatTime = function (timeStamp) {
  let formatNum = (num) => {
    return num < 10 ? '0' + num : num
  }
  let date = new Date((timeStamp + 8 * 3600) * 1000)
  let year = date.getFullYear()
  let month = formatNum(date.getMonth() + 1)
  let day = formatNum(date.getDate())
  let hour = formatNum(date.getHours())
  let minute = formatNum(date.getMinutes())
  let sText = `${year}-${month}-${day} ${hour}:${minute}`
  return sText
}

Vue.component('simple-tree', simpleTree)
