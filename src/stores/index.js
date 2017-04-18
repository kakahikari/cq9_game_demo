import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULT_LNG } from 'helper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: ''
  },
  mutations: {
    SET_DEFAULT (state) {
      state.language = DEFAULT_LNG
    },
    SET_LANGUAGE (state, payload) {
      state.language = payload
    }
  },
  actions: {
    async setDefault ({commit, dispatch}) {
      const language = await readCookie('useLanguage')
      if (language == null) {
        commit('SET_DEFAULT')
      } else {
        dispatch('setLanguage', language)
      }
    },
    async setLanguage ({commit, dispatch}, param) {
      commit('SET_LANGUAGE', param)
      createCookie('useLanguage', param, 100)
    }
  }
})

export const createCookie = (name, value, days) => {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + value + expires + '; path=/'
}

export const readCookie = (name) => {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const eraseCookie = (name) => {
  createCookie(name, '', -1)
}
