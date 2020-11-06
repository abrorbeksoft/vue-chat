import firebase from 'firebase/app'
import 'firebase/auth'
// import error from "./error";

class User{
    constructor(id){
        this.id=id;
    }
}

export default {
    state:{
        user:null,
        email:null,
        password:null
    },
    getters:{
        getUser(state){
            return state.user;
        },
        getEmailAndPassword(state){

            return {
                emails: state.email,
                password: state.password
            }
        }
    },
    mutations:{
        setUser(state,payload){
            state.user=payload
        },
        setEmailAndPassword(state,{email,password}){
            state.email=email;
            state.password=password;
        }
    },
    actions:{
        async registerUserAction({commit},{email,password}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
                    commit('setUser', new User(user.uid));
                })
            }
            catch (error){
                this.$store.dispatch('setErrorAction',error.message);
                throw error
            }
        },
        async loginUserAction({commit},{email,password}){

            try {
                await firebase.auth().signInWithEmailAndPassword(email,password).then(user=>{
                    
                    commit('setUser',new User(user.uid))
                    
                })
            }
            catch(error){
                this.$store.dispatch('setErrorAction',error.message)
                throw error
            }
        },
        isLoginedAction({commit},payload){
            commit('setUser',payload)
        },
        logoutUserAction({commit}) {
            firebase.auth().signOut();
            commit('setUser',null);
        },
        setEmailAndPasswordAction({commit},{email,password}) {
            commit('setEmailAndPassword',{
                email:email,
                password:password
            })
        }
    }
}

