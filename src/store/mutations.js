import { AddCart,
         AddCartCount,
         AllSelectShopCart,
         AllCancelShopCart } from './mutation-types'
export default {
  [AddCart](state,obj){
    state.cartList.push(obj)
  },
  [AddCartCount](state,obj){
    obj.count++
  },
  [AllSelectShopCart](state){
    for (const item of state.cartList) {
      item.check = true
    }
  },
  [AllCancelShopCart](state){
    for (const item of state.cartList) {
      item.check = false
    }
  }
}