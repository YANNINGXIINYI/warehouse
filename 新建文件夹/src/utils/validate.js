/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * 验证 网络地址
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 验证是否存在用户名 validUsername('aaaa')
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0   // -1 不存在 其他存在
} 
