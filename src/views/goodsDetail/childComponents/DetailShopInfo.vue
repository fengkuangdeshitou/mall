<template>
  <div class="shop-info">
    <div class="info">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="number">
      <div class="number-sells">
        <div class="sells">
          <span class="cSells">{{shopInfo.cSells/10000}}万</span>
          <span class="text">总销量</span>
        </div>
      </div>
      <div class="goods">
        <span class="cGoods">{{shopInfo.cGoods}}</span>
        <span class="text">全部宝贝</span>
      </div>
      <div class="line"></div>
      <div class="score">
        <div class="score-item" v-for="item in shopInfo.score" :key="item.name">
          <span>{{item.name}}</span>
          <span class="item-score" :style="{color:item.isBetter === true ? 'var(--color-high-text)' : '#5ea732'}">{{item.score}}</span>
          <span :style="{color:'white',backgroundColor:item.isBetter === true ? 'var(--color-high-text)' : '#5ea732'}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    
  }
}
</script>

<style scoped>
.info {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 20px;
}
.info img{
  width: 64px;
  height: 64px;
  margin-right: 10px;
  border-radius: 32px;
}
.number {
  display: flex;
  background-color: white;
  height: 98px;
  align-items: center;
  justify-content: space-between;
}
.number-sells {
  display: flex;
  align-items: center;
}
.sells {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  flex: 1;
}
.cSells{
  padding-bottom: 8px;
  padding-top: 8px;
  color: #282828;
  font-size: 16px;
}
.goods{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cGoods{
  padding-bottom: 8px;
  padding-top: 8px;
  color: #282828;
  font-size: 16px;
}
.text{
  font-size: 12px;
}
.line{
  width: 1px;
  height: 25px;
  margin-left: 25px;
  margin-right: 0px;
  background-color: #dedede;
}
.score{
  margin-right: 30px;
  margin-left: 25px;
}
.score-item{
  display: flex;
  padding-bottom: 3px;
  padding-top: 3px;
  justify-content: space-between;
}
.item-score{
  padding-left: 15px;
  padding-right: 15px;
}
</style>