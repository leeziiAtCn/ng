/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:45
 */
function toTimeFormat (t, f) {
  if (t) {
    f = f || 'yyyy-MM-dd'
    let newDate = new Date(t)
    let date = {
      'M+': newDate.getMonth() + 1,
      'd+': newDate.getDate(),
      'h+': newDate.getHours(),
      'm+': newDate.getMinutes(),
      's+': newDate.getSeconds(),
      'q+': Math.floor((newDate.getMonth() + 3) / 3),
      'S+': newDate.getMilliseconds()
    }
    if (/(y+)/i.test(f)) {
      f = f.replace(RegExp.$1,
        (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in date) {
      if (new RegExp('(' + k + ')').test(f)) {
        f = f.replace(RegExp.$1,
          RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(
            ('' + date[k]).length))
      }
    }
    return f
  } else {
    return '--'
  }
}


export const utils = {
  toTimeFormat,
  install: function (Vue) {
    Vue.prototype.$utils = this
  }
}
