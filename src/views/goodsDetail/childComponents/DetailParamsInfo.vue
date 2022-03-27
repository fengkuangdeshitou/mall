<template>
  <div class="params-Info">
    <table class="table">
      <tr class="tr" v-for="tr in paramsInfo.info.set" :key="tr">
        <td class="td" v-for="td in tr" :key="td">{{td}}</td>
      </tr>
    </table>
    <table class="table">
      <tr class="tr" v-for="tr in paramsInfo.rule.tables" :key="tr">
        <td class="td" v-for="td in tr" :key="td"><span>{{td}}</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    paramsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.table{
  margin: 15px;
  padding: 0px 15px;
  border-spacing: 0px;
  border-collapse: collapse;
  width: calc(100% - 30px);
}
.td{
  color: var(--color-high-text);
  font-size: 14px;
  padding: 10px 15px;
  border-bottom: 1px solid #eeeeee;
}

</style>