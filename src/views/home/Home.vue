<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        <div>首页</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/Navbar.vue'
import { getHomeData } from '@/network/home'
export default {
  data(){
    return{
      result:null
    }
  },
  created (){
    getHomeData().then(res=>{
      this.result = res
      console.log(this.result);
    })
  },
  components:{
    NavBar
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white
}
</style>