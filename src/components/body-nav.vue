<template lang="pug">
  nav.body-nav
    ul.body-nav__ul
      li.body-nav__item home
      li.body-nav__item.flag(
        ":class"="{'js--actived': $store.state.language=='zh-CN'}"
        ":style"="{backgroundImage: 'url(static/images/flags/cn.png)'}"
        @click="changeLanguage('zh-CN')"
      )
        span 中
      li.body-nav__item.flag(
        ":class"="{'js--actived': $store.state.language=='EN'}"
        ":style"="{backgroundImage: 'url(static/images/flags/uk.png)'}"
        @click="changeLanguage('EN')"
      )
        span EN
</template>

<script>
  export default {
    name: 'body-nav',

    data () {
      return {
        MobileAvtive: false
      }
    },

    methods: {
      changeLanguage (language) {
        this.$store.dispatch('setLanguage', language)
      }
    }
  }
</script>
