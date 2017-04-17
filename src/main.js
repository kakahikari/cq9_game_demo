// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import helper from 'helper'

Vue.config.productionTip = false

// style
import 'assets/scss/style.scss'

/* eslint-disable no-new */
export const System = new Vue({
  methods: {
    i18n (str, language = this.$store.state.AUTH.language) {
      return helper.i18n(str, language)
    }
  }
}).$mount('#app')
