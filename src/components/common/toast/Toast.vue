<template>
  <div v-show="isShow" id="toast">
    <div >{{message}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    methods: {
      show(message='拼命加载中',duration=2000){
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, duration);
      }
    },
  }
</script>

<style scoped>
#toast{
  position:fixed;
  left: 50%;
  top: 50%;
  background-color: black;
  opacity: .8;
  color: white;
  padding: 10px 12px;
  font-size: 15px;
  border-radius: 6px;
  transform: translate(-50%,-50%);
  z-index: 100;
  text-align: center;
}
</style>