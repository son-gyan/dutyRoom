import {
    SET_USERINFO,
    SET_TOKEN,
    SET_PARKINFO,
} from '../type'
export default {
    state: {
        userInfo:'',
        token:'',
        parkInfo:""
    },
    getters: {
        userInfo (state) {
            return state.userInfo
        },
        token(state){
            return state.token
        }
    },
    mutations: {
        [SET_USERINFO]: (state, userInfo) => {
            state.userInfo = userInfo
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        },
        [SET_TOKEN]: (state, token) => {
            state.token = token
            sessionStorage.setItem('token', token)
        },
        [SET_PARKINFO]: (state, parkInfo) => {
            state.parkInfo = parkInfo
            sessionStorage.setItem('parkInfo', JSON.stringify(parkInfo))
        },
    },
    actions: {
        setUserInfo ({ commit }, userInfo) {
            commit(SET_USERINFO, userInfo)
        },
        setToken ({ commit }, token) {
            commit(SET_TOKEN, token)
        },
        setParkInfo ({ commit }, parkInfo) {
            commit(SET_PARKINFO, parkInfo)
        },
    }
}