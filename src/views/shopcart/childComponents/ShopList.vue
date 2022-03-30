<template>
  <div id="shoplist">
    <shop-item v-for="item in $store.state.cartList" :key="item.iid" :item="item"></shop-item>
  </div>
</template>

<script>
import ShopItem from "./ShopItem.vue"
export default {
  components:{
    ShopItem
  }
}
</script>

<style scoped>

</style>