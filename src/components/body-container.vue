<template lang="pug">
  section.body-container
    .body-container__header
      logo.body-container__logo
      .body-container__search
        span.body-container__search__icon(@click="toggleSearch()" ":class"="{'js--actived': searchFocus}")
        template(v-if="searchActive")
          input(v-model="search" @focus="setSearchFocus(true)" @blur="setSearchFocus(false)")
          span.body-container__search__close(@click="toggleSearch()" ":class"="{'js--actived': searchFocus}")
      transition(name="sort-fade" mode="out-in")
        .body-container__sort(v-if="!searchActive")
          span.all(@click="changeSort('all')" ":class"="{'js--actived': sort=='all'}") All
          span(@click="changeSort('hot')" ":class"="{'js--actived': sort=='hot'}") {{ $root.i18n('Hot') }}
          span(@click="changeSort('recommend')" ":class"="{'js--actived': sort=='recommend'}") {{ $root.i18n('Recommend') }}
          span(@click="changeSort('new')" ":class"="{'js--actived': sort=='new'}") {{ $root.i18n('New') }}
    v-bar(wrapper="body-container__wrapper" ref="vBar")
      .body-container__body
        .body-container__body__top-btn(@click="goTop()")
        transition(name="game-selected-fade" mode="out-in")
          .body-container__body__game-selected(v-if="$store.state.gameSelectedActive")
            .body-container__body__game-selected__wrapper(@click="gameSelectedCancel()")
            .body-container__body__game-selected__container
              .close(@click="gameSelectedCancel()")
              span {{ $root.i18n('Please select game mode') }}
              div
                a.normal(
                  ":href"="'https://h5.c.cqgame.games/' + $store.state.selectedGameCode + '?token=guest123' + '&language=' + $store.state.language.toLowerCase()"
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
              span.new(v-if="node.new")
              span.recommend(v-if="node.recommend")
              span.hot(v-if="node.hot")
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
        new: ['31', '35', '36', '40', '44', '45'],
        hot: ['8', '9', '15', '12', '24', '1', '10', '7'],
        recommend: ['37', '27', '39', '33'],
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
            if (this.hot.indexOf(node.gamecode) > -1) {
              row.hot = 1
            }
            if (this.new.indexOf(node.gamecode) > -1) {
              row.new = 1
            }
            out.push(row)
          })
          if (this.search !== '') {
            out = out.filter(node => this.$root.i18n(node.gamename).toLowerCase().indexOf(this.search.toLowerCase()) > -1)
          } else {
            if (this.sort !== 'all') {
              out = out.filter(node => node[this.sort] === 1)
            }
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
          if (start < 0) {
            clearInterval(intervel)
          } else if (start < 100) {
            start -= 10
          } else if (start < 500) {
            start -= 40
          } else if (start < 1000) {
            start -= 100
          } else {
            start -= 200
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
  .game-selected-fade-enter,
  .game-selected-fade-enter-active,
  .sort-fade-enter,
  .sort-fade-enter-active,
  .sort-fade-leave,
  .sort-fade-leave-active {
    transition: all .6s;
  }

  .game-selected-fade-leave-active,
  .game-selected-fade-enter,
  .sort-fade-enter {
    opacity: 0;
  }

  .sort-fade-leave {
    display: none;
  }
</style>
