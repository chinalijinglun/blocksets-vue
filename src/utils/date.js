export const WEEKS = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  zh: ['日', '一', '二', '三', '四', '五', '六', '日']
}

/**
 * @description get the weekday of the month first day
 * @param {Date} d 
 * @returns {Number} the weekday 0-6:Sun-Sat
 */
export function getFirstDayOfMonth(d) {
  const firstDate = new Date(d.getFullYear(), d.getMonth(), 1)
  return firstDate.getDay()
}
