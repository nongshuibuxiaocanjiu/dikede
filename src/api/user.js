import request from '@/utils/request'
// 不要加api！不要加api！不要加api！
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
 * @param { } clientToken
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

/**
 * 工单搜索
 * @param {*} id
 * @returns Promise
 */
export function getgdList() {
  return request({
    url: '/task-service/task/search'
  })
}
