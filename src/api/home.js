import request from '@/utils/request'

/**
 * 获取轮播图信息
 * @returns Promise
 */
export const Rotation = () => {
  return request({
    url: '/home/swiper'
  })
}

/**
 * 获取首页轮播图信息
 * @returns Promise
 */
export const getRentGroups = () => {
  return request({ url: '/home/groups' })
}
