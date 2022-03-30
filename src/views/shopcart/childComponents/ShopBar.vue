<template>
  <div id="checkbar">
    <div class="content">
      <check-button></check-button>
      <div class="text">全选</div>
      <div class="price">合计:￥{{price}}</div>
    </div>
    <div class="order">
      结算
    </div>
  </div>
</template>

<script>
import bus from "@/bus"
import CheckButton from "./CheckButton.vue"
  export default {
    computed:{
      price(){
        return this.$store.state.cartList.reduce((pre,current)=>{
          return pre += (current.check?current.count*current.price:0)
        },0)
      }
    },
    components:{
      CheckButton
    },
    mounted(){
      bus.on('activeStatus',(status)=>{
        this.selectArray = status ? this.$store.state.cartList : []
      })
    }  
  }
</script>

<style scoped>
#checkbar{
  display: flex;
  background-color: #eee;
  height: 44px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
}
.content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text{
  font-size: 15px;
  color: #999;
  margin-left: 5px;
  margin-right: 20px;
}
.price{
  color: #333;
  font-size: 16px;
}
.order{
  background-color: red;
  width: 25%;
  color: white;
  font-size: 17px;
  line-height: 44px;
  margin-right: -15px;
  text-align: center;
}
</style>