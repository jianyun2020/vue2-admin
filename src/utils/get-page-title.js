/*
 * @Author: jianyun2020
 * @Date: 2021-04-16 10:48:44
 * @LastEditTime: 2021-04-16 13:17:58
 * @Description:
 * @FilePath: \vue2-admin\src\utils\get-page-title.js
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue2 Admin'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}