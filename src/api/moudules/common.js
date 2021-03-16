import axios from '../axios'

// 退出登录
export const loginOut = () => {
    return axios({
        url: '/saasController/logout',
        method: 'post'
    })
}