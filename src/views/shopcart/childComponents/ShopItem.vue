<template>
  <div id="shop-item">
    <div class="item-selected">
      <check-button :status="item.check" @activeStatus="activeStatus"></check-button>
    </div>
    <div class="item-logo">
      <img :src="item.logo" alt="" class="logo">
    </div>
    <div class="info">
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="number-info">
        <div class="price">{{item.price}}</div>
        <div class="count">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
  props:{
    item:{
      type:Object,
      default(){

      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    activeStatus(){
      this.item.check = !this.item.check
    }
  }
}
</script>

<style scoped>
#shop-item{
  display: flex;
  height: 118px;
  padding: 10px 15px;
  background-color: white;
  border-bottom: 1px solid #eee;
}
.item-selected{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  margin-right: 12px;
}
.item-logo{
  width: 48%;
}
.item-logo img{
  width: 100%;
  height: 88px;
  display: block;
  margin-top: 5px;
  border-radius: 6px;
}
.info{
  margin-left: 10px;
  background-color: white;
  overflow: hidden;
}

.title, .desc{
  font-size: 15px;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.title {
  margin-top: 10px;
  margin-bottom: 8px;
  color: #333
}
.desc{
  margin-bottom: 18px;
  color: #666
}
.number-info{
  display: flex;
  justify-content: space-between;
}
.price{
  color: var(--color-high-text);
  font-size: 18px;
}
.count{
  color: #666
}
</style>