import axios from '../axios'

const header = {
    "Content-Type": "multipart/form-data;charset=utf-8"
}
// 获取组织机构树
export const getTree = () => {
    return axios({
        url: '/park/sys/sysDepart/queryTreeList',
        method: 'get'
    })
}
