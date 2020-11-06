import Vue from "vue"
import VueRouter from 'vue-router'
import content from "@/components/content.vue"
import register from "@/components/register.vue"
import loginandpassword from '@/components/slots/loginandpassword.vue'
import login from '@/components/login.vue'
import messages from '@/components/messages.vue'
import profile from '@/components/profile.vue'
import settings from '@/components/settings.vue'
import authmiddleware from '@/middleware/auth' 

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:content
        },
        {
            path:'/registrate',
            component:register,
            children:[
                {
                    path:'/',
                    component:loginandpassword,
                    name:'register',

                }
            ]
        },
        {
            path:'/login',
            name:'login',
            beforeEnter:authmiddleware,
            component:login
        },
        {
            path:'/profile',
            name:'profile',
            beforeEnter:authmiddleware,
            component:profile
        },
        {
            path:'/settings',
            name:'settings',
            beforeEnter:authmiddleware,
            component:settings
        },
        {
            path:'/messages',
            name:'messages',
            beforeEnter:authmiddleware,
            component:messages
        }
    ],
    mode:'history'
})



