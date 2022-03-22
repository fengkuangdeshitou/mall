<template>
  <div id="recommonds">
    <div class="common-item" v-for="item in recommons" :key="item">
      <a href="">
        <img src="http://img.yzcdn.cn/upload_files/2019/02/18/Fk3INAiBkAIockdU7To00haZHSXv.jpg" alt="">
        <div>热门</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommons:{
      type:Array
    }
  }
}
</script>

<style>
#recommonds {
  display: flex;
  height: 108px;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.common-item {
  flex: 1;
}

.common-item img {
  height: 80px;
}
</style>