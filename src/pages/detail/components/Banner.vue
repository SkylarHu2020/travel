<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class='iconfont banner-icon'>&#xe6ae;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="bannerImgs" v-show='showGallery' @close="handleGalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery.vue'
import FadeAnimation from '@/common/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 50%
  .banner-img
    width 100%
  .banner-info
    position absolute
    display flex
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      font-size .32rem
      padding 0 .2rem
      flex 1
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      line-height .32rem
      height .32rem
      font-size .24rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
</style>
