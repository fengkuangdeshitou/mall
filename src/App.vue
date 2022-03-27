<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="GoodsDetail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/tabbar/Tabbar.vue'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
