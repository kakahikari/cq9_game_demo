<template lang="pug">
  section.body-left-banner
    //- transition-group(name="nodes" tag="div")
    //-   template(v-for="node,index in sources")
    //-     a(v-bind:key="node" v-if="nowNode == index" @click="gameSelected(node.gamecode)")
    //-       video-bg.body-left-banner__video(":sources"="[node.src]" )
</template>

<script>
  export default {
    name: 'body-left-banner',

    // data () {
    //   return {
    //     nowNode: 0,
    //     sources: [
    //       {src: 'static/movie/motion_888.mp4', gamecode: 20},
    //       {src: 'static/movie/motion_fruitking.mp4', gamecode: 1},
    //       {src: 'static/movie/motion_greatlion.mp4', gamecode: 17},
    //       {src: 'static/movie/motion_cq9.mp4', gamecode: 0},
    //       {src: 'static/movie/motion_hotspin.mp4', gamecode: 19},
    //       {src: 'static/movie/motion_luckybat.mp4', gamecode: 10},
    //       {src: 'static/movie/motion_ravejump.mp4', gamecode: 7},
    //       {src: 'static/movie/motion_richwitch.mp4', gamecode: 14},
    //       {src: 'static/movie/motion_sosweet.mp4', gamecode: 8}
    //     ]
    //   }
    // },

    mounted () {
      // let end = this.sources.length - 1
      // setInterval(() => {
      //   if (this.nowNode < end) this.nowNode++
      //   else this.nowNode = 0
      // }, 10000)
    },

    methods: {
      gameSelected (val) {
        if (val !== 0) {
          this.$store.commit('SET_SELECTGAMECODE', val)
          this.$store.commit('SET_GAMESELECTEDACTIVE', true)
        }
      }
    }
  }
</script>
