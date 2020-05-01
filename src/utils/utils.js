export default {
  formatDate(time) {
    if (!time) return ''
    const date = new Date(time)
    const nowYear = date.getFullYear()
    // 月份有点特殊, 是从0开始的, 需要增加1
    const nowMonth = date.getMonth() + 1
    const nowDay = date.getDate()
    const nowHour = date.getHours()
    const nowMinutes = date.getMinutes()
    const nowSeconds = date.getSeconds()
    return `${nowYear}年${nowMonth}月${nowDay}日 ${nowHour}:${nowMinutes}:${nowSeconds}`
  },
}
