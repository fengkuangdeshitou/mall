<template>
  <div id="recommonds">
    <div class="common-item" v-for="item in recommons" :key="item.img">
      <a :href="item.link+item.title">
        <img :src="item.img" alt="">
        <div>{{item.title}}</div>
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
  height: 230px;
  background-color: '#f6f6f6';
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 16px;
  flex-wrap: wrap;
}

.common-item {
  width: 25%;
}

.common-item img {
  height: 68px;
  border-radius: 34px;
}

.common-item div {
  margin-top: 5px;
}
</style>