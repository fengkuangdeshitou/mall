<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <h2>详情页{{id}}</h2>
  </div>
</template>

<script>

import DetailNavBar from './childComponents/DetailNavBar.vue'

export default {
  data(){
    return {

    }
  },
  computed:{
    id(){
      return this.$route.params.id
    }
  },
  components:{
    DetailNavBar
  }  
}
</script>

<style>

</style>