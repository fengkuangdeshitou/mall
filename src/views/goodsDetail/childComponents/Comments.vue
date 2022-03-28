<template>
  <div class="comments">
    <div class="userInfo">
      <img :src="item.user.avatar" alt="">
      <div class="user-content">
        <span class="nickname">{{item.user.nickname}}</span>
        <span class="time">{{createTime}}</span>
      </div>
    </div>
    <p class="content">{{item.content}}</p>
    <span class="item-style">{{item.style}}</span>
    <div class="images">
      <img v-for="image in item.images" :key="image" :src="image" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
import bus from '@/bus'
import { formateDate } from '@/common/date.js'
export default {
  props:{
    item:{
      type:Object,
      default(){

      }
    }
  },
  computed:{
    createTime(){
      let time = new Date(this.item.create)
      return formateDate(time, 'yyyy-MM-dd hh:mm')
    }
  },
  methods:{
    imageLoad(){
      bus.emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.userInfo{
  display: flex;
  margin: 15px;
  align-items: center;
}
.user-content{
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.nickname{
  color: #282828;
  font-size: 15px;
  padding: 2px 0px;
  font-weight: 500;
}
.time{
  color: #999;
  font-size: 13px;
  padding: 2px 0px;
}
.userInfo img{
  width: 44px;
  height: 44px;
  border-radius: 22px;
}
.content{
  padding: 0px 15px;
  color: #333;
  font-size: 14px;
}
.item-style{
  display: block;
  margin: 10px 0px 15px 15px;
  font-size: 15px;
  color: #999;
}
.images{
  display: flex;
  margin: 10px 7px 0px;
}
.images img {
  /* margin: 15px 0px 0px 15px; */
  margin: 0px 0px 0px 8px;
  border-radius: 2px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
}
</style>