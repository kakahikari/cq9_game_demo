<template lang="pug">
  #app.layout__container
    body-nav
    body-left-banner
    body-container
</template>

<script>
  import bodyNav from 'components/body-nav'
  import bodyLeftBanner from 'components/body-left-banner'
  import bodyContainer from 'components/body-container'

  export default {
    name: 'app',

    components: {
      bodyNav,
      bodyLeftBanner,
      bodyContainer
    }
  }
</script>
