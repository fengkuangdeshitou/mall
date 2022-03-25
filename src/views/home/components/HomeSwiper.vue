<template>
  <swiper class="swiper" :autoplay="swiper_options.autoplay" :loop=true :allowSlideNext=true :pagination="true" :modules="modules" :slidesPerView="1">
    <swiper-slide v-for="(item,index) in banner" :key="index"><a :href="item.link"><img :src="item.image" alt=""></a></swiper-slide>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay,Pagination])
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
  data (){
    return {
      swiper_options:{
        autoplay: {
          disableOnInteraction: false, // 鼠标滑动后继续自动播放
          delay: 2000, //2秒切换一次
        },
        speed: 500, //切换过渡速度
        loop: true,
        slidesPerView: "auto", //解决最后一张切换到第一张中间的空白
        centeredSlides: true, //设置slide居中
        spaceBetween: 20,
        coverflowEffect: {
          // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
          depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          // slideShadows: false, //开启slide阴影。默认 true。
        },
        navigation: {
          nextElRef: ".swiper-button-next",
          prevElRef: ".swiper-button-prev",
        },
        pagination: {
          clickable: true,
        }
      }
    }
  },
  setup() {
    // swiper相关配置属性放在swiper_options这个变量里
    return {
      modules: [Pagination],
    }
  }
}
</script>

<style>

@import 'home.css';

.swiper {
  height: 195px;
}
.swiper-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(0,0,0,0.6);
  }
 
  .swiper-pagination .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-button-prev:after, .swiper-button-next:after {
    color: rgb(171, 149, 230);
  }
</style>