<template>
  <div class="detail-nav">
    <nav-bar class="nav">
      <template #left>
        <div class="left-item" @click="popView">
          <img src="@/assets/Img/common/back.svg" alt="">
        </div>
      </template>
      <template #center>
        <div class="title">
          <div 
            class="title-item" 
            :class="{selected:currentIndex==index}"
            v-for="(item,index) in titles" 
            @click="itemClick(index)"
            :key="item">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>import NavBar from "@/components/common/navbar/Navbar.vue"

export default {
  data(){
    return {
      currentIndex:0,
      titles:['商品','参数','评论','推荐']
    }
  },
  components:{
    NavBar
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    },
    popView(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.nav{
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
}
.left-item {
  margin-top: 5px;
  margin-left: 10px;
  margin-right: -20px ;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
}

.title-item {
  padding-left: 10px;
  padding-right: 10px;
}

.selected {
  color: var(--color-tint);
}
</style>