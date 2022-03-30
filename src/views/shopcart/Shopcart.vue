<template>
  <div id="shopcart">
    <nav-bar>
      <template #center>
        <div class="navbar">
          <span class="navbar-title">购物车</span>
          <span class="nav-count" v-show="this.$store.state.cartList.length>0">({{this.$store.state.cartList.length}})</span>
        </div>
      </template>
    </nav-bar>
    <scroll-view class="scroll-view" :probeType="0" :pullUpLoad="true">
      <shop-list></shop-list>
    </scroll-view>
    <shop-bar class="shopbar"></shop-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/Navbar.vue'  
import ScrollView from '@/components/common/scrollview/ScrollView.vue'
import ShopBar from './childComponents/ShopBar.vue'
import ShopList from './childComponents/ShopList.vue'

export default {
  components:{
    NavBar,
    ScrollView,
    ShopList,
    ShopBar
  }
}
</script>

<style scoped>
#shopcart{
  position: relative;
  height: 100vh;
}
.navbar{
  background-color: var(--color-high-text);
}
.navbar-title{
  color: white;
}
.nav-count{
  color:white
}
.scroll-view{
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}
</style>