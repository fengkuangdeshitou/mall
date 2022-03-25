import request from "./request";

export function getHomeData () {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods (sort,page){
  return request ({
    url:'/search',
    params:{
      sort,
      page
    }
  })
}