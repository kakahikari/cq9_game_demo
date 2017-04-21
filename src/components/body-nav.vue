<template lang="pug">
  nav.body-nav
    ul.body-nav__ul
      li.body-nav__item home
      li.body-nav__item(":class"="{'active': $store.state.language=='zh-CN'}" @click="changeLanguage('zh-CN')") 简
      li.body-nav__item(":class"="{'active': $store.state.language=='zh-TW'}" @click="changeLanguage('zh-TW')") 繁
      li.body-nav__item(":class"="{'active': $store.state.language=='EN'}" @click="changeLanguage('EN')") EN
</template>

<script>
  export default {
    name: 'body-nav',

    methods: {
      changeLanguage (language) {
        this.$store.dispatch('setLanguage', language)
      }
    }
  }
</script>
