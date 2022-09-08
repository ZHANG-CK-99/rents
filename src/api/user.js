import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

/**
 *  发送请求获取用户个人资料, 需要携带token
 * @returns Promise
 */
export function getUserInfo() {
  return request({ url: '/user' })
}
