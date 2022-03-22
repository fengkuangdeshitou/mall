<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </nav-bar>

    <template>
      <swiper :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="swiper">
        <swiper-slide class="slide">Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide
        ><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </template>

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/Navbar.vue'
// import SwiperClass, { Pagination } from 'Swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./style.css";

// import required modules
import { Pagination } from "swiper";
  import { getHomeData } from '@/network/home'
export default {
  data(){
    return{
       banner:[],
       commends:[],
       url:"https://img0.baidu.com/it/u=3712997108,442011921&fm=253&fmt=auto&app=138&f=JPEG"
    }
  },
  created (){
    getHomeData().then(res=>{
      this.banner = res.data.banner.list
    })
  },
  components:{
    NavBar,
    Swiper,
    SwiperSlide
  },
  setup() {
    return{
      modules: [Pagination],
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white
}

/* .swiper {
  /* flex: 1; */
  /* display: flex;
  width: 100%;
  height: 180px;
  background-color: red; */
/* }  */

/* .slide {
  width: 320px;
  height: 180px;
} */
</style>