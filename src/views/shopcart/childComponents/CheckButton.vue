<template>
  <div id="checkbutton">
    <img src="@/assets/Img/cart/tick.svg" 
         alt="" 
         :class="{'select-active':check}"
         @click="changeStatus">
  </div>
</template>

<script>

export default {
  props:{
    status:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      check:this.status
    }
  },
  methods:{
    changeStatus(){
      this.$emit('activeStatus')
    }
  },
  watch:{
    status:function(newValue){
      this.check = newValue
    }
  }
}
</script>

<style scoped>
#checkbutton{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
}
.select-active{
  background-color: #ff8198;
  border: 2px solid #ff8198;
  border-radius: 50%;
}
</style>