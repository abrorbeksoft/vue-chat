<template>
    <div id="justcontent">
        <div class="row">
            <div id="area" class="col ml-2 p-0">
                <div :key="message.uid" v-for="message in getMessages" >{{ message.text }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <textarea v-model="message" class="form-control" name="" id="" cols="30" rows="4"></textarea>
                <button @click="sendMessage" class="btn mt-2 btn-primary">Send</button>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name:'justcontent',
    data (){
        return {
            message:null
        }
    },
    methods:{
        // let date=new Date()
        sendMessage() {
            let dat=new Date(Date.now());
            let timeString=dat.toLocaleString();
            console.log(this.$store.getters.getUser)
            this.$store.dispatch('createPostAction',{
                uid:this.$store.getters.getUser.id,
                message:this.message,
                created_at:timeString
            })
            this.message='';
        }
        
    },
    computed:{
        getMessages(){
            return this.$store.getters.getMessages
        }
    }
    
}
</script>

<style  scoped>
#area{
    margin-bottom: 15px;
    height: 320px;
    overflow-y:scroll;
}
</style>
