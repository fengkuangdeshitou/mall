<template>
  <div id="goods-detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll-view :pullUpLoad="true" class="scroll-view" ref="scroll">
      <custom-swiper class="detail-banner" :bannerArray="result.itemInfo.topImages"></custom-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :itemInfo="result.itemInfo"></detail-goods-info>
      <detail-params-info :paramsInfo="result.itemParams"></detail-params-info>
    </scroll-view>
  </div>
</template>

<script>

import CustomSwiper from '@/components/common/swiper/CustomSwiper.vue'
import { Goods, Shop } from '@/network/detail'
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailInfo from './childComponents/DetailInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'

import ScrollView from '@/components/common/scrollview/ScrollView.vue'
import bus from '@/bus'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComponents/DetailParamsInfo.vue'

export default {
  // name:'GoodsDetail',
  data(){
    return {
      goods:{},
      shopInfo:{},
      result:{
        columns:['销量 484','收藏 246人','默认快递'],
        detailInfo:{"desc":'此款为2018春秋新款,面料选用类似莫代尔的一种化料'},
        itemInfo:{desc:'新款上市',
                  topImages:['https://imgservice.suning.cn/uimg1/b2c/image/F7PE5uJxjA_NjDaoII6ncA.jpg',
                              'https://img.alicdn.com/bao/uploaded/i3/3328003896/O1CN01J2XHEY1eePocVqEvg_!!0-item_pic.jpg'],
                  detailImage:[{key:'穿着效果',desc:'',
                                              list:['https://imgservice.suning.cn/uimg1/b2c/image/F7PE5uJxjA_NjDaoII6ncA.jpg',
                                                    'https://img.alicdn.com/bao/uploaded/i3/3328003896/O1CN01J2XHEY1eePocVqEvg_!!0-item_pic.jpg']}],
                  title:'高领黑白条纹长袖T恤女2018春秋新款韩版宽松百搭学生',
                  lowNowPrice:'38.50',lowPrice:'69.00',oldPrice:'69.00',price:'38.5',
                  discountDesc:'活动价',desc:'新款上市',discountBgColor:'#f13e3a'},
        itemParams:{info:{key:'产品参数',set:[{key:'图案',value:'宫廷复古图/民族复古图'},{key:'厂名',value:'爱美丽服饰有限公司'},
                                      {key:'颜色',value:'黑白拼接'},{key:'袖型',value:'常规袖'},
                                      {key:'上衣厚度',value:'适中'},{key:'尺码',value:'XL,L,M,XXL'},
                                      {key:'衣长',value:'常规款（51-65cm）'},{key:'版型',value:'宽松'},
                                      {key:'季节',value:'春秋'},{key:'材质',value:'棉'},
                                      {key:'领型',value:'圆领'},{key:'袖长',value:'长袖'},
                                      {key:'风格',value:'原宿'},{key:'潮流',value:'韩系'},
                                      ]},
                    rule:{key:'尺码说明',disclaimer:'以上尺寸为实物人工测量，会有1-2cm误差',
                          tables:[['尺码','M','L','XL','XXL'],['衣长','61.5','63','64.5','66'],
                                  ['胸围','98','104','110','116'],['袖长','63','66','68.5','70.5']]}},
        promotions:{link:'m1s://shoppro?shopId=1o3dvg'},
        rate:{cRate:144,list:[]},
        shopInfo:{shopLogo:'https://i-1-lanrentuku.52tup.com/2020/7/24/71913639-2aa2-4c7b-8b3c-40d7faeadce8.jpg',
                  cSells:57876,
                  cGoods:99,
                  score:[{isBetter:false,name:'描述相符',score:4.64},
                          {isBetter:true,name:'价格合理',score:5},
                          {isBetter:false,name:'质量满意',score:4.62}],
                  services:[{name:'退货补运费'},{name:'全国包邮'},{name:'7天无理由退货'},{name:'72小时发货'}],
                  name:"美衣梦莎"},
        skuInfo:{defaultPrice:'￥29.98',isAbroad:false},
        topBar:{img:'s11.mogucdn.com/p1/150811/upload_ieytsmbrmm4'}
      }
    }
  },
  created(){
    this.goods = new Goods(this.result.itemInfo,this.result.columns,this.result.shopInfo.services)
    this.shopInfo = new Shop(this.result.shopInfo)
  },
  mounted(){
    bus.on('scrollViewDidScroll',(position)=>{

    })
    bus.on('imageLoad',()=>{
      this.$refs.scroll.refresh()
    })
  },
  computed:{
    id(){
      return this.$route.params.id
    }
  },
  components:{
    DetailNavBar,
    CustomSwiper,
    DetailInfo,
    DetailShopInfo,
    ScrollView,
    DetailGoodsInfo,
    DetailParamsInfo
} 
}
</script>

<style scoped>
#goods-detail{
  position:relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
.nav-bar {
  position:relative;
}
.scroll-view{
  height: calc(100% - 44px);
  overflow: hidden;
}
.detail-banner {
  height: 300px;
  overflow: hidden;
}
</style>