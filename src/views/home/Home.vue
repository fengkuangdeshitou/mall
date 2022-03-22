<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <Recommon :recommons="recommons"></Recommon>
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/Navbar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import Recommon from './components/Recommon.vue'
import { getHomeData } from '@/network/home'

export default {
  data(){
    return{
       banner:[],
       recommons:[1,2,3,4],
    }
  },
  created (){
    getHomeData().then(res=>{
      console.log(res);
      this.banner = res.data.banner.list
      // this.recommons = res.data.recommons
    })
  },
  components:{
    NavBar,
    HomeSwiper,
    Recommon
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white
}

</style>