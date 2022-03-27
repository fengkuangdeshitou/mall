<template>
  <div v-if="Object.keys(goods).length > 0" class="base-info">
    <div class="goods-title"><span>{{goods.title}}</span></div>
    <div class="goods-price">
      <span class="price">￥{{goods.price}}</span>
      <span class="oldprice">￥{{goods.oldPrice}}</span>
      <span class="discount" :style="{backgroundColor:goods.discountBgColor}" v-show="goods.discount.length>0">{{goods.discount}}</span>
    </div>
    <div class="goods-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length-1" :key="index">{{goods.services[index-1].name}}</span>
    </div>
  </div>
</template>

<script>
import { Goods } from '@/network/detail'
export default {
  props:{
    goods:{
      type:Goods,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.goods-title {
  font-size: 18px;
  margin-top: 13px;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: #282828;
}

.goods-price {
  display: flex;
  align-items: flex-end;
  height: 24px;
}

.price {
  color: var(--color-high-text);
  font-size: 24px;
  padding-left: 10px;
}

.oldprice {
  margin-left: 3px;
  padding-bottom: 3px;
  color: #999999;
  font-size: 12px;
  text-decoration: line-through;
}

.discount {
  color: white;
  font-size: 12px;
  margin-left: 8px;
  border-radius: 4px;
  height: 18px;
  padding-top: 3px;
  padding-left: 4px;
  padding-right: 4px;
  text-align: center;
  margin-bottom: 5px;
}

.goods-other{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dedede;
  color: #999999;
}

.services {
  display: flex;
  height: 49px;
  justify-content: space-between;
  align-items: center;
  color: #282828;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 5px solid #f6f6f6;
}
</style>