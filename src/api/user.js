import request from '@/utils/request'
/**
 *  账号登录
 * @param {*} data ，loginName，password，clientToken，code
 * @returns Promise
 */
export function loginFromFn(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
/**
 *验证码
 * @param {token } clientToken
 * @returns Promise
 */
export function photo(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}

/**
 *用户登录信息
 * @param {String,Nunber } id
 * @returns Promise
 */
export function getUserInfo(id) {
  return request({
    url: `/user-service/user/${id}`
  })
}
