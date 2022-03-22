<template>
  <swiper class="swiper" :pagination="true" :modules="modules">
    <swiper-slide v-for="(item,index) in banner" :key="index"><a :href="item.link"><img :src="item.image" alt=""></a></swiper-slide>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    }
  }
}
</script>

<style>

@import 'home.css';

.swiper {
  height: 180px;
}
</style>