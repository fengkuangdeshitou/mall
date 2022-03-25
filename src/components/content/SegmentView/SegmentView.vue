<template>
  <div class="segment">
    <div class="segment-item" @click="segmentClick(index)" :class="{active:index == currentIndex}" v-for="(item,index) in titles" :key="item"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data (){
    return {
      currentIndex:0
    }
  },
  methods:{
    segmentClick(index){
      this.currentIndex = index
      this.$emit('segmentClick',index)
    }
  }
}
</script>

<style>

.segment {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: white;
}

.segment-item {
  flex: 1;
}

.segment-item span{
  padding-bottom: 6px;
  padding-left: 3px;
  padding-right: 3px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>