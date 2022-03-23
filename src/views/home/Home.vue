<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <Recommon :recommons="recommons"></Recommon>
    <Feature></Feature>
    <SegmentView class="segment" :titles="titles"></SegmentView>
    <good-list></good-list>
    <ul>
      <li v-for="item in 100" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>

import HomeSwiper from './components/HomeSwiper.vue'
import Recommon from './components/Recommon.vue'
import Feature from './components/Feature.vue'
import SegmentView from '@/components/content/SegmentView/SegmentView.vue'
import GoodList from '@/components/content/goods/GoodList.vue'

import NavBar from '@/components/common/navbar/Navbar.vue'
import { getHomeData } from '@/network/home'

export default {
  data(){
    return{
       banner:[],
       recommons:[1,2,3,4],
       titles:['流行','新款','精选']
    }
  },
  created (){
    this.requestHomeData()
  },
  methods:{
    requestHomeData(){
      getHomeData().then(res=>{
      console.log(res);
      this.banner = res.data.banner.list
      // this.recommons = res.data.recommons
    })
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    Recommon,
    Feature,
    SegmentView,
    GoodList
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.segment {
  position: sticky;
  top: 44px;
}
</style>