<template>
  <div id="goods-detail">
    <detail-nav-bar ref="nav" class="nav-bar" @titleClick="titleClick"></detail-nav-bar>
    <scroll-view :probeType=3 :pullUpLoad="true" class="scroll-view" ref="scroll" @scrollViewDidScroll="scrollViewDidScroll">
      <custom-swiper class="detail-banner" :bannerArray="result.itemInfo.topImages"></custom-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :itemInfo="result.itemInfo"></detail-goods-info>
      <detail-params-info ref="params" :paramsInfo="result.itemParams"></detail-params-info>
      <detail-comments ref="comments" class="comments" :comments="result.rate"></detail-comments>
      <good-list ref="recommends" class="goods-list" :list="recommend"></good-list>
    </scroll-view>
    <detail-tool-bar @addShop="addShop"></detail-tool-bar>
  </div>
</template>

<script>

import CustomSwiper from '@/components/common/swiper/CustomSwiper.vue'
import { getGoodsRecomments, Goods, Shop } from '@/network/detail'
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailInfo from './childComponents/DetailInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'

import ScrollView from '@/components/common/scrollview/ScrollView.vue'
import bus from '@/bus'
import { imageLoadMixin } from '@/common/mixin'

import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComponents/DetailParamsInfo.vue'
import DetailComments from './childComponents/DetailComments.vue'
import GoodList from '@/components/content/goods/GoodList.vue'
import DetailToolBar from './childComponents/DetailToolBar.vue'

export default {
  mixins:[imageLoadMixin],
  data(){
    return {
      goods:{},
      shopInfo:{},
      recommend:[],
      result:{
        columns:['销量 484','收藏 246人','默认快递'],
        detailInfo:{desc:'此款为2018春秋新款,面料选用类似莫代尔的一种化料'},
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
        rate:{cRate:144,list:[{canExplain:false,content:'刚好合适，物美价廉，衣服面料很好，穿着很舒服，版型也好看，非常棒',create:1648458539000,images:['https://s11.mogucdn.com/mlcdn/c45406/200812_0e9jk358bh997kd82dhbk84f018ac_511x1080.jpg','https://s5.mogucdn.com/mlcdn/c45406/200812_5j9b8f41jg5hd7f0a627g46g9ll68_511x1080.jpg'],
              style:'颜色：白 上衣+裤子 尺码：M',
              user:{avatar:'https://s10.mogucdn.com/mlcdn/5abf39/180118_1f8k77adjfjllicjf6hlg00ac649h_640x640.jpg',nickname:'沙漠骆驼_亲亲呀宝贝'}}]},
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
      },
      offsetY:[]
    }
  },
  created(){
    this.goods = new Goods(this.result.itemInfo,this.result.columns,this.result.shopInfo.services)
    this.shopInfo = new Shop(this.result.shopInfo)
    this.requestGoodsRecomments()
  },
  methods:{
    requestGoodsRecomments(){
      getGoodsRecomments().then(res=>{
        this.recommend = res.result.wall.list
      }).catch(err=>{
        console.log(err);
      })
      // this.$nextTick(()=>{
        
      // })
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.offsetY[index]+45)
    },
    scrollViewDidScroll(position){
      const offset = -position.y+44
      if(offset>this.offsetY[0] && offset < this.offsetY[1]){
        this.$refs.nav.currentIndex = 0
      }else if(offset>this.offsetY[1] && offset < this.offsetY[2]){
        this.$refs.nav.currentIndex = 1
      }else if(offset>this.offsetY[2] && offset < this.offsetY[3]){
        this.$refs.nav.currentIndex = 2
      }else if(offset>this.offsetY[3]){
        this.$refs.nav.currentIndex = 3
      }
    },
    addShop(){
      const obj = {
        iid:this.params.iid,
        logo:this.params.show.img,
        title:this.params.title,
        desc:this.result.detailInfo.desc,
        price:this.params.price.substring(1,this.params.price.length),
        check:true,
        count:1
      }
      this.$store.dispatch('addCartList',obj)
    }
  },
  mounted(){
    bus.on('imageLoad',()=>{
      this.offsetY = []
      this.offsetY.push(0)
      this.offsetY.push(this.$refs.params.$el.offsetTop)
      this.offsetY.push(this.$refs.comments.$el.offsetTop)
      this.offsetY.push(this.$refs.recommends.$el.offsetTop)
    })
  },
  destroyed() {
    bus.off('imageLoad',this.imageLoadFunction)
  },
  computed:{
    params(){
      return this.$route.params
    }
  },
  components:{
    DetailNavBar,
    CustomSwiper,
    DetailInfo,
    DetailShopInfo,
    ScrollView,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComments,
    GoodList,
    DetailToolBar
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
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail-banner {
  height: 300px;
  overflow: hidden;
}
.comments{
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}
.goods-list{
  margin: 10px 3px;
}

</style>