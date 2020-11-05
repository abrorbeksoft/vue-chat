import firebase from 'firebase/app'
import 'firebase/auth'

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
        registerUser(state,payload){
            state.user=payload
        },
        setEmailAndPassword(state,{email,password})
        {
            state.email=email;
            state.password=password;
        }
    },
    actions:{
        registerUserAction({commit},{email,password})
        {
            try {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
                    commit('registerUser', new User(user.uid));
                })
            }
            catch (error){
                this.$store.dispatch('setErrorAction',error.message)
                throw error
            }
        },
        setEmailAndPasswordAction({commit},{email,password}) {
            commit('setEmailAndPassword',{
                email:email,
                password:password
            })
        }
    }
}

