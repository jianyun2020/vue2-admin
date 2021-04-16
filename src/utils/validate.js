/*
 * @Author: jianyun2020
 * @Date: 2021-04-15 15:25:25
 * @LastEditTime: 2021-04-16 13:14:46
 * @Description:
 * @FilePath: \vue2-admin\src\utils\validate.js
 */

/**
 * 验证是否是外部svg链接
 *
 * @export
 * @param {*} path
 * @return {*}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 验证用户角色
 *
 * @export
 * @param {*} str
 * @return {*}
 */
export function validUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/**
 * 判断是否是字符串
 *
 * @export
 * @param {String} str
 * @return {Boolean}
 */
export function isString (str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * 判断是否是数组
 *
 * @export
 * @param {Array} arg
 * @return {Boolean}
 */
export function isArray (arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
