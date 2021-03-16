import { Message } from 'element-ui'

// 有相同的提示框
const $message = obj => {
    var messageNode = document.querySelectorAll(
      '.el-message .el-message__content'
    )
    if (messageNode && messageNode.length) {
      for (var i = 0; i < messageNode.length; i++) {
        var messageText = messageNode[i].innerText
        if (messageText === obj.message.toString()) {
          return
        }
      }
    }
    Message({
      type: obj.type || 'info',
      message: obj.message,
      duration: obj.duration || 1500,
      customClass: obj.customClass || ''
    })
}

/**
 * @isArray 是否是数组
 * @array 传入参数 数组
 */
const isArray = array => {
    return Object.prototype.toString.call(array) === '[object Array]'
}

// 过滤表情
const emoji2Str = str => {
    return unescape(escape(str).replace(/\%uD.{3}/g, ''))
}
  
// 去除首尾空格
const trim = str => {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

// 连续点击按钮，1秒后解禁
const disabledButton = (vue, key = 'buttonDisabled') => {
    vue[key] = true
    setTimeout(() => {
      vue[key] = false
    }, 1000)
}

/**
 * 以时间戳转化成格式化日期，默认：YYYY-MM-DD HH:mm:ss
 * 默认格式如下：（如有更多，再新增）
 * '1': 'YYYY',
 * '2': 'YYYY-MM',
 * '3': 'YYYY-MM-DD',
 * '4': 'MM-DD',
 * '5': 'YYYY-MM-DD HH:mm',
 * '6': 'YYYY-MM-DD HH:mm:ss',
 * '7': 'MM-DD HH:mm',
 * '8': 'MM-DD HH:mm:ss',
 * '9': 'YYYYMMDD'
 * '10': 'YYYYMMDDHHmmss'
 * @param {number | string | Date} timeData 必须的
 * @param {string} dateFormat
 * @return {string}
 */
const formatDate = (timeData, dateFormat = 'YYYY-MM-DD HH:mm:ss') => {
  if (!timeData) {
    //console.error('Function formatDate,please send parameter')
    return
  } else if (String(new Date(timeData)) === 'Invalid Date') {
    //console.error('Function formatDate,please send right formate parameter')
    return
  }
  let now = new Date(timeData)
  // console.log('timeData:', timeData, 'dateFormat:' + dateFormat, 'nowDate:', now);
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  switch (dateFormat) {
    case 'YYYY': {
      return year.toString()
    }
    case 'YYYY-MM': {
      return year + '-' + (month < 10 ? '0' + month : month)
    }
    case 'YYYY-MM-DD': {
      return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date)
      )
    }
    case 'MM-DD': {
      return (
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date)
      )
    }
    case 'YYYY-MM-DD HH:mm': {
      return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date) +
        ' ' +
        (hour < 10 ? '0' + hour : hour) +
        ':' +
        (minute < 10 ? '0' + minute : minute)
      )
    }
    case 'YYYY-MM-DD HH:mm:ss': {
      return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date) +
        ' ' +
        (hour < 10 ? '0' + hour : hour) +
        ':' +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second)
      )
    }
    case 'MM-DD HH:mm': {
      return (
        (date < 10 ? '0' + date : date) +
        ' ' +
        (hour < 10 ? '0' + hour : hour) +
        ':' +
        (minute < 10 ? '0' + minute : minute)
      )
    }
    case 'MM-DD HH:mm:ss': {
      return (
        (date < 10 ? '0' + date : date) +
        ' ' +
        (hour < 10 ? '0' + hour : hour) +
        ':' +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second)
      )
    }
    case 'YYYYMMDD': {
      return (
        year +
        '' +
        (month < 10 ? '0' + month : month) +
        '' +
        (date < 10 ? '0' + date : date)
      )
    }
    case 'YYYYMMDDHHmmss': {
      return (
        year +
        '' +
        (month < 10 ? '0' + month : month) +
        '' +
        (date < 10 ? '0' + date : date) +
        '' +
        (hour < 10 ? '0' + hour : hour) +
        '' +
        (minute < 10 ? '0' + minute : minute) +
        '' +
        (second < 10 ? '0' + second : second)
      )
    }
    case 'HH:mm:ss': {
      return (
        (hour < 10 ? '0' + hour : hour) +
        ':' +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second)
      )
    }
  }
  return (
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (date < 10 ? '0' + date : date) +
    ' ' +
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (minute < 10 ? '0' + minute : minute) +
    ':' +
    (second < 10 ? '0' + second : second)
  )
}

//比较2个日期间隔数
const dateDiff = (interval, startDate, endDate)=>{
    var objInterval = {'D' : 1000 * 60 * 60 * 24, 'H' : 1000 * 60 * 60,
                  'M' : 1000 * 60, 'S' : 1000, 'T' : 1};
    interval = interval.toUpperCase();
    var dt1 = Date.parse(startDate.replace(/-/g, '/'));
    var dt2 = Date.parse(endDate.replace(/-/g, '/'));
    try
    {
        return Math.round((dt2 - dt1) / eval('(objInterval.' + interval + ')'));
    }
    catch (e)
    {
        return e.message;
    }
}

export default {
    $message,
    isArray,
    emoji2Str,
    trim,
    disabledButton,
    formatDate,
    dateDiff
}