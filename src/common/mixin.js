import { debounds } from '@/common/utils'
import bus from '@/bus'

export const imageLoadMixin = {
  data(){
    return {
      homeItemLoader:null
    }
  },
  mounted(){
    const result = debounds(this.$refs.scroll.refresh,100)
    this.imageLoadFunction = ()=>{
      result()
    }
    bus.on('imageLoad',this.imageLoadFunction)
  }
}