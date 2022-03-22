<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </nav-bar>

    <template>
      <swiper class="swiper" 
        :modules="modules"
        :space-between="30"
        :effect="'fade'"
        :navigation="true">
        <swiper-slide class="slide" v-for="(item,index) in banner" :key="index">
          <!-- <img :src="url" alt=""> -->
          <div>slide</div>
        </swiper-slide>
      </swiper>
    </template>

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/Navbar.vue'
import { Pagination, Navigation, EffectFade } from 'swiper'
import { Swiper, swiperSlide ,useSwiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { getHomeData } from '@/network/home'
export default {
  data(){
    return{
       banner:[],
       commends:[],
       url:"https://www.baidu.com/img/baidu_jgylogo3.gif"
    }
  },
  created (){
    this.initSwiper()
    getHomeData().then(res=>{
      this.banner = res.data.banner.list
    })
  },
  components:{
    NavBar,
    Swiper,
    swiperSlide
  },
  setup(){
    return{
      modules:[Pagination, Navigation, EffectFade]
    }
  },
  methods:{
    initSwiper(){
      const swiper = useSwiper()
      return { swiper }
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white
}

.swiper {
  /* flex: 1; */
  height: 180px;
  background-color: red;
}

.slide {
  width: 300px;
  height: 180px;
}
</style>