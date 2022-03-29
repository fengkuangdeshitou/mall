<template>
  <div class="goods">
    <goods-item :item="item" v-for="item in list" :key="item.iid"></goods-item>
  </div>
</template>

<script>

import GoodsItem from "./GoodsItem.vue"

export default {
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsItem
  }
}
</script>

<style scoped>

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>