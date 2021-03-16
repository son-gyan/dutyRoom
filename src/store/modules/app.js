import {
    SET_USER
} from '../type'
export default {
    state: {
        user:''
    },
    getters: {
        user (state) {
            return state.user
        }
    },
    mutations: {
        [SET_USER]: (state, user) => {
            state.user = user
            sessionStorage.setItem('user', JSON.stringify(user))
        }
    },
    actions: {
        setUser ({ commit }, user) {
            commit(SET_USER, user)
        }
    }
}