<template>
  <div>
    <swiper 
      class="swiper"
      :modules="modules"
      :pagination="options.pagination"
      :autoplay="options.autoplay"
      :loop=options.loop>
      <swiper-slide v-for="item in bannerArray" :key="item">
        <img :src="item" alt="" @load="imageLoad">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

import SwiperCore, { Autoplay,Pagination } from "swiper"
import { Swiper,SwiperSlide } from "swiper/vue"
SwiperCore.use([Autoplay,Pagination])
import "swiper/css";
import "swiper/css/pagination";
import "@/views/home/components/home.css";
import bus from "@/bus";
export default {
  data(){
    return {
      options:{
        autoplay:{
          delay:2000
        },
        loop:true,
        pagination:{
          clickable:true
        }
      }
    }
  },
  props:{
    bannerArray:{
      type:Array,
      default(){
        return []
      }
    }
  },
  setup(){
    return { modules:[Pagination] }
  },
  components:{
    Swiper,
    SwiperSlide
  },
  methods:{
    imageLoad(){
      bus.emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
}
.swiper >>> .swiper-pagination-bullet {
  background: white;
}
 
.swiper >>> .swiper-pagination-bullet-active {
  background: var(--color-high-text)
}

</style>