<template lang="pug">
  section.body-container
    .body-container__header
      logo.body-container__logo
      .body-container__search
        span.body-container__search__icon(@click="toggleSearch()" ":class"="{'js--actived': searchFocus}")
        transition(name="input")
          input(v-if="searchActive" v-model="search" @focus="setSearchFocus(true)" @blur="setSearchFocus(false)")
        span.body-container__search__close(v-if="searchActive" @click="toggleSearch()" ":class"="{'js--actived': searchFocus}")
      .body-container__sort
        span.all(@click="changeSort('all')" ":class"="{'js--actived': sort=='all'}") All
        span(@click="changeSort('new')" ":class"="{'js--actived': sort=='new'}") {{ $root.i18n('New') }}
        span(@click="changeSort('recommend')" ":class"="{'js--actived': sort=='recommend'}") {{ $root.i18n('Recommend') }}
    v-bar(wrapper="body-container__wrapper" ref="vBar")
      .body-container__body
        .body-container__body__top-btn(@click="goTop()")
        .body-container__body__game-selected(v-if="$store.state.gameSelectedActive")
          .body-container__body__game-selected__wrapper(@click="gameSelectedCancel()")
          .body-container__body__game-selected__container
            .close(@click="gameSelectedCancel()")
            span {{ $root.i18n('Please select game mode') }}
            div
              a.normal(
                ":href"="'https://h5.c.cqgame.games/' + $store.state.selectedGameCode + '?token=guest' + '&language=' + $store.state.language.toLowerCase()"
                target="blank"
              ) {{ $root.i18n('Normal game') }}
              a.featured(
                ":href"="'https://h5.c.cqgame.games/' + $store.state.selectedGameCode + '?token=guest' + '&language=' + $store.state.language.toLowerCase()"
                target="blank"
              ) {{ $root.i18n('Featured game') }}
        transition-group(name="node-transition" tag="ul")
          li.body-container__node(
            v-for="node in nodes"
            v-bind:key="node"
            ":class"="'game'+node.gamecode"
            @click="gameSelected(Number(node.gamecode))"
          )
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
        searchFocus: false,
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
              gamename: node.gamename,
              gamecode: node.gamecode
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
        if (this.searchActive) this.search = ''
        this.searchActive = !this.searchActive
      },
      setSearch (val) {
        this.searchActive = val
        if (!val) this.search = ''
      },
      setSearchFocus (val) {
        this.searchFocus = val
      },
      goTop () {
        let start = this.$refs.vBar.$el.getElementsByClassName('bar--wrapper')[0].scrollTop
        let intervel = setInterval(() => {
          if (start > 1000) {
            start -= 50
          } else if (start > 500) {
            start -= 30
          } else if (start > 0) {
            start -= 20
          } else {
            clearInterval(intervel)
          }
          this.$refs.vBar.$el.getElementsByClassName('bar--wrapper')[0].scrollTop = start
        }, 10)
      },
      gameSelected (val) {
        this.$store.commit('SET_SELECTGAMECODE', val)
        this.$store.commit('SET_GAMESELECTEDACTIVE', true)
      },
      gameSelectedCancel () {
        this.$store.commit('SET_GAMESELECTEDACTIVE', false)
      }
    },

    components: {
      VBar,
      logo
    }
  }
</script>
<style scoped>
  .node-transition-enter {
    opacity: 0;
    transform: translateY(30px);
  }
  .node-transition-leave-active {
    opacity: 0;
  }
</style>