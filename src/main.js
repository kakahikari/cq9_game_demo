// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from 'stores'
import helper from 'helper'
import App from './App'

Vue.config.productionTip = false

// style
import 'assets/scss/style.scss'

/* eslint-disable no-new */
export const app = new Vue({
  mounted () {
    this.$store.dispatch('setDefault', {context: this})
  },
  methods: {
    i18n (str, language = this.$store.state.AUTH.language) {
      return helper.i18n(str, language)
    }
  },
  store,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
