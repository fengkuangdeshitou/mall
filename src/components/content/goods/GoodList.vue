<template>
  <div class="goods">
    <goods-item></goods-item>
  </div>
</template>

<script>

import GoodsItem from "./GoodsItem.vue"

export default {
  components:{
    GoodsItem
  }
}
</script>

<style>

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>