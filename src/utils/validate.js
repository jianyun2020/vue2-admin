
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
