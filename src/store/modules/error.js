export default {
    state:{
        error:null
    },
    getters:{
        getError(state) {
            return state.error
        }
    },
    mutations:{
        setError(state,payload){
            state.error=payload
        }
    },
    actions:{
        setErrorAction({commit},payload){
            commit('setError',payload)
        }
    }
}