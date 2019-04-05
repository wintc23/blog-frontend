import store from '@/store'
import Vue from 'vue'

export function IsPC () {
  var userAgentInfo = navigator.userAgent
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export function getToken () {
  return localStorage.getItem('authToken', '')
}

export function setToken (token) {
  localStorage.setItem('authToken', token)
}

export function clearToken () {
  localStorage.removeItem('authToken')
  store.commit('userInfo/clearInfo')
}