<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!active"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {

    }
  },
  computed:{
    active () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.active ?  {color:this.activeColor} : {color:'#999999'}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)      
    }
  },
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  width: 24pt;
  height: 24pt;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>