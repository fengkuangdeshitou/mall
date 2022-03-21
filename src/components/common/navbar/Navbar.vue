<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 18;
  font-weight: 600;
}
.left .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>