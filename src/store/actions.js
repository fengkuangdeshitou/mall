import { AddCart, AddCartCount } from './mutation-types'
export default {
  addCartList(context,obj){
    return new Promise((resolve,reject)=>{
      const product = context.state.cartList.find((item) => {
        return item.iid==obj.iid
      })
      if(product){
        context.commit(AddCartCount,product)
        resolve('商品数量+1')
      }else{
        context.commit(AddCart,obj)
        resolve('添加购物车成功')
      }
    })
  }
}