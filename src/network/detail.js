import request from "./request";

export function getGoodsDetail(iid){
  return request({
    url:'',
    params:{

    }
  })
}

export class Goods {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountBgColor = itemInfo.discountBgColor
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(model){
    this.shopLogo = model.shopLogo;
    this.name = model.name;
    this.cFans = model.cFans;
    this.cSells = model.cSells;
    this.score = model.score
    this.cGoods = model.cGoods
  }
}