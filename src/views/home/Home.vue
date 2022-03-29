<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>蘑菇街</div>
      </template>
    </nav-bar>
    <SegmentView 
        v-show="-offsety>offsetTop"
        ref="coversegment"
        @segmentClick="segmentClick"
        class="segment"
        :titles="titles"></SegmentView>
    <scroll-view 
      class="scroll-view" 
      ref="scroll" 
      :probeType="3"
      :pullUpLoad="true"
      @scrollViewDidScroll="scrollViewDidScroll"
      @loadMoreActon="loadMoreActon"
      >
      <home-swiper :banner="banner"></home-swiper>
      <Recommon :recommons="recommons"></Recommon>
      <!-- <Feature></Feature> -->
      <SegmentView 
        ref="segment"
        @segmentClick="segmentClick"
        :titles="titles"></SegmentView>
      <good-list :list="result[currentSort].list"></good-list>
    </scroll-view>
    <scroll-to-top v-show="offsety < -1000" @click="scrollToTopAction" class="scrollToTop"></scroll-to-top>
  </div>
</template>

<script>

import HomeSwiper from './components/HomeSwiper.vue'
import Recommon from './components/Recommon.vue'
import Feature from './components/Feature.vue'
import SegmentView from '@/components/content/SegmentView/SegmentView.vue'
import GoodList from '@/components/content/goods/GoodList.vue'

import NavBar from '@/components/common/navbar/Navbar.vue'
import bus from '@/bus'
import { imageLoadMixin } from '@/common/mixin'
import ScrollView from '@/components/common/scrollview/ScrollView.vue'
import ScrollToTop from '@/components/content/scrollToTop/ScrollToTop.vue'

import { getHomeData, getHomeGoods } from '@/network/home'

export default {
  mixins:[imageLoadMixin],
  data(){
    return{
       banner:[],
       recommons:[
          {
            title:'女装',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_1ldikaae13k9be2kc2860h3l2kc5i_150x150.png'
          },
          {
            title:'上衣',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_8dd5g7cj13beaj50d7b29da19kaah_150x150.png'
          },
          {
            title:'女鞋',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_33aak1kgeegijhi3g4dl4l1d069h7_150x150.png'
          },
          {
            title:'裤子',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_16dal2iaj300ce73ada65g0514jlk_151x150.png'
          },
          {
            title:'美妆/护肤',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_1ahlj8kbk6fc3gk4ch980d91f84jk_150x150.png'
          },
          {
            title:'裙子',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_5jbk3iggd5cl4ei83i64ai1dk2lg4_151x150.png'
          },
          {
            title:'母婴/童装',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_4jk839952i9aaac7jbh12jhgbkk88_151x150.png'
          },
          {
            title:'套装',
            link:'https://m.mogu.com/wall/s?q=',
            img:'https://s10.mogucdn.com/mlcdn/c45406/210218_571djje4gf3dj24cj6c24k6gl0kcl_150x150.png'
          },
       ],
       titles:['流行','新款','精选'],
       currentSort:'pop',
       offsety:0,
       offsetTop:0,
       ifFiexd:false,
       result:{
         'pop':{ page:0, list:[] },
         'new':{ page:0, list:[] },
         'sell':{ page:0, list:[] }
       },
       contentInsert:0,
    }
  },
  created (){
    this.requestHomeData()
    this.requestHomeGoods('pop')
    this.requestHomeGoods('new')
    this.requestHomeGoods('sell')
  },
  mounted(){
    this.offsetTop = this.$refs.segment.$el.offsetTop;
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.contentInsert)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    bus.off('imageLoad',this.homeItemLoader)
    this.contentInsert = this.$refs.scroll.scroll.y
  },
  methods:{
    debounds(func,delay){
      let timer = null
      return function(){
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this)
        }, delay);
      }
    },
    requestHomeData(){
      getHomeData().then(res=>{
        console.log(res);
        this.banner = res.data.banner.list
      })
    },
    requestHomeGoods(type){
      const page = this.result[type].page
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        const list = res.result.wall.list
        this.result[type].list.push(...list)
        this.result[type].page+=1
        if (this.$refs.scroll){
          this.$refs.scroll.finishPullUp()
        }
      })
    },
    segmentClick(index){
      console.log(index);
      switch (index) {
        case 0:
          this.currentSort = 'pop'
          break;
        case 1:
          this.currentSort = 'new'
          break;
        case 2:
          this.currentSort = 'sell'
          break;
        default:
          break;
      }
      this.$refs.segment.currentIndex = index;
      this.$refs.coversegment.currentIndex = index;
    },
    scrollViewDidScroll(position){
      this.offsety = position.y
      this.isFiexd = -position.y > this.offsetTop
    },
    loadMoreActon(){
      this.requestHomeGoods(this.currentSort)
    },
    scrollToTopAction(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  },
  components:{
    NavBar,
    ScrollView,
    HomeSwiper,
    Recommon,
    Feature,
    SegmentView,
    GoodList,
    ScrollToTop
  }
}
</script>

<style scoped>
#home{
  padding-bottom: 49px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.segment {
  position: relative;
  z-index: 9;
}

/* .segment {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

.scroll-view {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.scrollToTop {
  position: fixed;
  bottom: 55px;
  right: 10px;
}

/* .content {
  margin-top: 44px;
  height: calc(100% - 93px);
  overflow: hidden;
} */

</style>