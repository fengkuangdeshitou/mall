import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

const store = createStore({
  state(){
    return{
      cartList:[]
    }
  },
  mutations,
  actions
})
export default store