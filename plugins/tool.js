import Vue from 'vue'
import { Modal } from 'iview'
import { simpleTree } from 'simple-vue-tree'
import Avatar from '@/components/Avatar'
import 'simple-vue-tree/dist/lib/simple-tree.css'
import { IsPC } from '@/libs/tool'

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

Vue.prototype.$confirm = function confirm (text, func, ...args) {
  Modal.confirm({
    render: (h) => {
      return h('div', {
        domProps: {
          innerText: text
        },
        style: {
          'word-wrap': 'break-word'
        }
      })
    },
    onOk: () => {
      func(...args)
    }
  })
}

Vue.prototype.$camelCase = (data) => {
  let newData = {}
  for (let key in data) {
    let newKey = key.replace(/_([a-z])/g, (word, $1) => $1.toUpperCase())
    newData [newKey] = data[key]
  }
  return newData
}

Vue.prototype.$underlineCase = (data) => {
  let newData = {}
  for (let key in data) {
    let newKey = key.replace(/([A-Z])/g, (word, $1) => `_${$1.toLowerCase()}`)
    newData [newKey] = data[key]
  }
  return newData
}

Vue.prototype.$IsPC = IsPC()