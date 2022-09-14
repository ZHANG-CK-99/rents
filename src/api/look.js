import request from '@/utils/request'
/**
 * 获取查询条件
 * @param {Object} params cityCode为必须的
 * @returns Promise
 */
export function getQueryCondision(id) {
  return request({ url: '/houses/condition', params: { id } })
}
