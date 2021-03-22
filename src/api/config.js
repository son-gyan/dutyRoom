let config = {
    apiBase: externalConfig.apiBase,
    staticUrl: externalConfig.staticUrl,
    imgBaseUrl: externalConfig.imgBaseUrl
}

let currentUrl = null // 当前的网址
// 通用的网址
const commonUrl = {}
const env = process.env.NODE_ENV
if (env === 'production') {
  currentUrl = Object.assign(commonUrl, config)
} else if (env === 'development') {
  currentUrl = Object.assign(commonUrl, config)
}
export default {
    baseUrl: config.apiBase,
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Credentials':true
    },
    currentUrl
}