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
  height: 130px;
  background-color: '#f6f6f6';
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 16px;
}

.common-item img {
  height: 68px;
  border-radius: 34px;
}

.common-item div {
  margin-top: 5px;
}
</style>