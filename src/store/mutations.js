import { AddCart,AddCartCount } from './mutation-types'
export default {
  [AddCart](state,obj){
    state.cartList.push(obj)
  },
  [AddCartCount](state,obj){
    obj.count++
  }
}