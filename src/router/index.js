import Vue from "vue"
import VueRouter from 'vue-router'
import content from "@/components/content.vue"
import register from "@/components/register.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:content
        },
        {
            path:'/register',
            name:'register',
            component:register
        }
    ],
    mode:'history'
})



