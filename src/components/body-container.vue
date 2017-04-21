<template lang="pug">
  section.body-container
    .body-container__header
      .body-container__logo
      .body-container__search
      .body-container__sort
        span.all(@click="changeSort('all')") All
        span(@click="changeSort('new')") {{ $root.i18n('New') }}
        span(@click="changeSort('recommend')") {{ $root.i18n('Recommend') }}
    v-bar(wrapper="body-container__wrapper")
      .body-container__body
        template(v-for="node in nodes")
          .body-container__node
            .body-container__node__img(":style"="{'background-image': 'url('+node.src+')'}")
            span(if="node.tag!=''") {{ node.tag }}
</template>

<script>
  import VBar from 'v-bar'

  export default {
    name: 'body-container',

    data () {
      return {
        sort: 'all',
        nodes: [
          { src: 'static/images/games/01.png', tag: 'new' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: '' },
          { src: 'static/images/games/01.png', tag: '' },
          { src: 'static/images/games/01.png', tag: '' },
          { src: 'static/images/games/01.png', tag: '' },
          { src: 'static/images/games/01.png', tag: '' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: 'recommend' },
          { src: 'static/images/games/01.png', tag: '' }
        ]
      }
    },

    methods: {
      changeSort (val) {
        this.sort = val
      }
    },

    components: {
      VBar
    }
  }
</script>
