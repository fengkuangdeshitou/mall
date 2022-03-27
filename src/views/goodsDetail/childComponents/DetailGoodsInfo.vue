<template>
  <div class="goods-info">
    <div class="info-desc-clear-fix">
      <div class="start"></div>
      <div class="start-line"></div>
      <span class="start-desc">{{itemInfo.desc}}</span>
      <div class="end">
        <div class="end-line"></div>
        <div class="end-point"></div>
      </div>
      <span class="detail-key">{{itemInfo.detailImage[0].key}}</span>
      <div class="detail-image" v-for="item in itemInfo.detailImage[0].list" :key="item">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/bus"

export default {
  data(){
    return {
      count:0
    }
  },
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      if(++this.count == this.itemInfo.detailImage[0].list.length)
      bus.emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.info-desc-clear-fix{
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
}
.start{
  width: 6px;
  height: 6px;
  background-color: #282828;
}
.start-line{
  width: 128px;
  border-top: 0.5px solid #ccc;
}
.start-desc{
  padding-top: 15px;
  color: #333;
  font-size: 14px;
}
.end{
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  align-items: flex-end;
}
.end-point{
  width: 6px;
  height: 6px;
  background-color: #282828;
}
.end-line{
  width: 128px;
  border-top: 0.5px solid #cccccc;
  margin-top: 15px;
  align-items: flex-end;
}
.detail-key{
  padding: 15px 0px;
  /* height: 44px; */
  color: #333;
}
.detail-image img{
  width: 100%;
}
</style>