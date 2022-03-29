<template>
  <div class="goods-item" @click="gooddetail">
    <!-- <a :href="item.link"> -->
      <img :src="item.show.img" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <!-- <img src="@/assets/Img/common/collect.svg" alt=""> -->
        <span class="collect">{{item.cfav}}</span>
      </div>
    <!-- </a> -->
  </div>
</template>

<script>
import bus from '@/bus'
export default {
  props:{
    item:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    imageLoad(){
      bus.emit('imageLoad')
    },
    gooddetail(){
      this.$router.push('/detail/'+this.item.iid)
      // this.$router.push({
      //   path:'/detail',
      //   query:{
      //     id:'1000'
      //   }
      // })
    }
  }
}
</script>

<style scoped>

.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img{
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px; 
  color: #282828;
}

.goods-info .collect{
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('@/assets/Img/common/collect.svg') 0 0/14px 14px;
}

/* .goods-info img {
  width: 20px;
  height: 20px;
  margin-bottom: -5px;
  padding: 3px;
} */

.price {
  padding-right: 18px;
  color: var(--color-tint);
}

.collect {
  color: #666;
}
</style>