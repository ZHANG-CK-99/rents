import request from '@/utils/request'
/**
 * 获取查询条件
 * @param {Object} params cityCode为必须的
 * @returns Promise
 */
export const getQueryCondision = (id) => {
  return request({ url: '/houses/condition', params: { id } })
}

/**
 *获取房屋信息
 * @param {Object} params
 * @returns
 */
export const getHouseInfo = (params) => {
  return request({
    url: '/houses',
    params
  })
}

/**
 * 获取房屋的详细信息
 * @param {String} houseCode
 * @returns
 */
export const getHouseDetail = (houseCode) => {
  return request({ url: `/houses/${houseCode}` })
}
