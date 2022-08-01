import request from '@/utils/request'

export function loginFromFn(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
/**
 *
 * @param { } data 验证码
 * @returns Promise
 */
export function photo(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}
