import axios from '../axios'

const header = {
    "Content-Type": "multipart/form-data;charset=utf-8"
}
// 查找导航菜单树
export const login = (data) => {
    return axios({
        url: '/park/sys/login',
        method: 'post',
        data
    })
}

// 退出登录
export const loginOut = () => {
    return axios({
        url: '/park/sys/logout',
        method: 'post'
    })
}