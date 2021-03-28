import axios from 'axios'
import config from './config'
import { Loading, MessageBox, Upload } from 'element-ui'
import api from './api'
import utils from '../utils'

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        var baseURL = config.apiBase
        let setConfig = {
            method: 'get',
            // 基础url前缀
            baseUrl: config.apiBase,
            // 请求头信息
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Credentials':true,
                'X-Requested-With': 'XMLHttpRequest'
            },
            // 参数
            data: {},
            // 设置超时时间
            timeout: 900000,
            // 携带凭证
            withCredentials: true,
            // 返回数据类型
            responseType: 'json'
        }
        const instance = axios.create({
            baseURL: config.baseUrl,
            headers: setConfig.headers,
            timeout: setConfig.timeout,
            withCredentials: false//config.withCredentials
        });
        // 添加请求拦截器
        instance.interceptors.request.use(
            function(config) {
                let token = sessionStorage.getItem("token");
                if (token) { 
                    config.headers["X-Access-Token"] = token
                }
                config.headers['Content-Type'] = options.headers?options.headers['Content-Type']:config.headers['Content-Type']
                if (config.method === 'post') {
                    config.data = {
                        ...config.data,
                        t: Date.parse(new Date()) / 1000
                    }
                }else if (config.method === 'get') {
                    config.params = {
                        t: Date.parse(new Date()) / 1000,
                        ...config.params
                    }
                }
                return config
            },
            function(error) {
                // 对请求错误做点什么
                console.log(error)
                return Promise.reject(error)
            }
        )
        // 添加响应拦截器
        instance.interceptors.response.use(
            function(response) {
                // console.log(response)
                // 每一分钟更换一次token
                /* let newAuth = response.headers['authorization']
                if (newAuth !== undefined) {
                    sessionStorage.setItem('authorization', newAuth)
                } */
                //debugger
                return response
            },
            function(error) {
                // 对响应错误做点什么
                return Promise.reject(error)
            }
        )

        // 请求处理
        instance(options)
        .then(res => {
            if(res){              
              resolve(res);
            }
            return false;
        })
        .catch(error => {
            reject(error);
        }); 
    })
}