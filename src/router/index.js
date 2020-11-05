import Vue from "vue"
import VueRouter from 'vue-router'
import content from "@/components/content.vue"
import register from "@/components/register.vue"
import loginandpassword from '@/components/slots/loginandpassword.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:content
        },
        {
            path:'/register',
            component:register,
            children:[
                {
                    path:'/',
                    component:loginandpassword,
                    name:'register',

                }
            ]
        }
    ],
    mode:'history'
})



