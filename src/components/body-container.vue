<template lang="pug">
  section.body-container
    .body-container__header
      logo.body-container__logo
      .body-container__search
        span.body-container__search__icon(@click="toggleSearch()")
        input(v-if="searchActive" @blur="setSearch(false)" v-model="search")
      .body-container__sort
        span.all(@click="changeSort('all')" v-if="!searchActive") All
        span(@click="changeSort('new')" ":class"="{'js--actived': sort=='new'}") {{ $root.i18n('New') }}
        span(@click="changeSort('recommend')" ":class"="{'js--actived': sort=='recommend'}") {{ $root.i18n('Recommend') }}
    v-bar(wrapper="body-container__wrapper" ref="vBar")
      .body-container__body
        .body-container__body__top-btn(@click="goTop()")
        template(v-for="node in nodes")
          .body-container__node
            .body-container__node__img(":style"="{'background-image': 'url('+node.src+')'}")
            .body-container__node__tag
              span(v-if="node.new") {{ $root.i18n('New') }}
              span(v-if="node.recommend") {{ $root.i18n('Recommend') }}
</template>

<script>
  import GameService from 'services/gameService'
  import VBar from 'v-bar'
  import logo from 'components/logo'

  export default {
    name: 'body-container',

    data () {
      return {
        sort: 'all',
        list: [],
        recommend: ['1', '7', '8', '10', '14', '17', '19', '20'],
        searchActive: false,
        search: ''
      }
    },

    computed: {
      nodes () {
        const language = this.$store.state.language
        if (language !== '' && language !== undefined) {
          let out = []
          this.list.forEach((node, index, array) => {
            let row = {
              src: 'static/images/games/' + language + '/' + node.gamecode + '.png',
              gamename: node.gamename
            }
            if (this.recommend.indexOf(node.gamecode) > -1) {
              row.recommend = 1
            }
            if (array.length - index < 7) {
              row.new = 1
            }
            out.push(row)
          })
          if (this.sort !== 'all') {
            out = out.filter(node => node[this.sort] === 1)
          }
          if (this.search !== '') {
            out = out.filter(node => this.$root.i18n(node.gamename).toLowerCase().indexOf(this.search.toLowerCase()) > -1)
          }
          return out.reverse()
        } else {
          return []
        }
      }
    },

    mounted () {
      GameService.getGameList({context: this}).then((res) => {
        this.list = res
      })
    },

    methods: {
      changeSort (val) {
        this.sort = val
      },
      toggleSearch () {
        this.searchActive = !this.searchActive
      },
      setSearch (val) {
        this.searchActive = val
        if (!val) this.search = ''
      },
      goTop () {
        this.$refs.vBar.$el.getElementsByClassName('bar--wrapper')[0].scrollTop = 0
      }
    },

    components: {
      VBar,
      logo
    }
  }
</script>
