import { AddCart, AddCartCount } from './mutation-types'
export default {
  addCartList(context,obj){
    const product = context.state.cartList.find((item) => {
      return item.iid==obj.iid
    })
    if(product){
      context.commit(AddCartCount,product)
    }else{
      context.commit(AddCart,obj)
    }
  }
}