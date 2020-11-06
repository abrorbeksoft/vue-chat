import firebase from 'firebase/app'
import 'firebase/database'

class mess{
    constructor(uid,text,created_at){
        this.uid=uid;
        this.text=text;
        this.created_at=created_at
    }
}

export default {
    state:{
        messages:[],
    },
    getters:{
        getMessages(state){
            return state.messages
        }
    },
    mutations:{
        setMessages(state,payload){
            payload.forEach(element => {
                state.messages.push(element)
            });
        },
        setMessage(state,payload){
            state.messages.push(payload)
        }
    },
    actions:{
        async intializeMessages({commit}){
            await firebase.database().ref('posts').once('value').then(resp=>{
                // console.log(resp.val())
                let elem=resp.val();
                let respArray=[];
                Object.keys(elem).forEach(key=>{
                    let item=elem[key];
                    respArray.push(new mess(item.uid,item.message,item.creted_at))
                })
                commit('setMessages',respArray)
            })  


        },

        async createPostAction({commit},payload){
            
            try{
                
                await firebase.database().ref('posts').push(payload)
                commit('setMessage',payload)
            }
            catch(error){
                console.log(error.messages)
                throw error
            }
        }

    }
}