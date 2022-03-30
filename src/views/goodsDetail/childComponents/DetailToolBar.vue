<template>
  <div id="toolbar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon store"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="text car" @click="addToCart">加入购物车</div>
      <div class="text buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addToCart(){
      this.$emit('addShop')
    }
  }
}
</script>

<style scoped>
#toolbar{
  display: flex;
  width: 100vw;
  height: 49px;
  background-color: #fff;
  text-align: center;
}
.bar-item{
  display: flex;
  flex: 1;
  color: #333;
}
.bar-item>div {
  flex: 1;
}
.icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url('@/assets/Img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service {
  background-position:0 -54px;
}

.bar-left .store {
  background-position:0 -98px;
}
.text{
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: white;
  line-height: 49px;
}
.car{
  background-color: var(--color-high-text);
}
.buy{
  background-color: #ffe817;
  color: #333
}
</style>