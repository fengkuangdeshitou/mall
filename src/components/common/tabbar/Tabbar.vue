<template>
  <TabbarContent id="tabbar">
    <tabbar-item path="/home">
      <template #item-icon>
        <img src="@/assets/Img/tabbar/home.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/Img/tabbar/home_active.svg" alt="">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/category">
      <template #item-icon>
        <img src="@/assets/Img/tabbar/category.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/Img/tabbar/category_active.svg" alt="">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/shopcart">
      <template #item-icon>
        <img src="@/assets/Img/tabbar/shopcart.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/Img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/profile">
    <template #item-icon>
        <img src="@/assets/Img/tabbar/profile.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/Img/tabbar/profile_active.svg" alt="">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tabbar-item>
  </TabbarContent>
</template>

<script>
import TabbarContent from './TabbarContent.vue'
import TabbarItem from './TabbarItem.vue'
export default {
  components:{
    TabbarContent,
    TabbarItem
  }
}
</script>

<style scoped>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 8px rgba(80, 80, 80, 0.1);
}
</style>