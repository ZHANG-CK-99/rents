import request from '@/utils/request'

export const getAllCity = (params) => {
  return request({
    url: '/area/city',
    params
  })
}

export const getHotCity = (params) => {
  return request({
    url: '/area/hot',
    params
  })
}
