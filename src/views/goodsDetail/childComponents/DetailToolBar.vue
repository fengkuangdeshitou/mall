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
    <div>
      <span>加入购物车</span>
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#toolbar{
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #fff;
  text-align: center;
}
.bar-item{
  display: flex;
  flex: 1;
}
.bar-item>div {
  flex: 1;
}
.bar-left .icon{
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
</style>