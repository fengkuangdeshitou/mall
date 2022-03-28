<template>
  <div class="comments">
    <div class="comments-header">
      <span>用户评价</span>
      <span>更多
      </span>
    </div>
    <div v-for="(item,index) in comments.list" :key="index">
      <comments :item="item"></comments>
    </div>
  </div>
</template>

<script>
import Comments from './Comments.vue'
export default {
  components: { Comments },
  props:{
    comments:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.comments-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  color: #282828;
  border-bottom: 1px solid #ddd;
}
</style>