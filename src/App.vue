
<template>
<div id="app">
  <div class="container">
    <div class="row  mb-2">
      <div class="col d-flex justify-content-between p-2 bg-primary">
        <img  src="@/assets/logo.png" alt="" srcset="">
        <div v-if="getUser" class="text-center position-relative d-inline-block text-white " >
          <button @click="logout()" class="btn btn-sm btn-danger">Logout</button>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-3 bg-secondary" id="sidebar">
        <ul class="list ">
          <router-link v-for="link in links" :key="link.id"  class="list-item" :to="link.path" tag="li" >
            <i class="text-white mr-3 fa-1x" :class="link.icon"></i>
            <a class="list-link" >{{ link.title }}</a>
          </router-link>
        </ul>
      </div>
      <div class="col-md-9">
        <router-view ></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
    name: 'app',
    methods:{
        logout(){
            this.$store.dispatch('logoutUserAction')
        }
    },
    computed:{
        getUser(){
           return this.$store.getters.getUser
        },
        links(){
            if (this.getUser) {
                return [
                    {
                        id:1,
                        path:'/',
                        icon:'fas fa-home',
                        title:'Home'
                    },
                    {
                        id:2,
                        path:'/settings',
                        icon:'fas fa-cog',
                        title:'Settings'
                    },
                    {
                        id:3,
                        path:'/profile',
                        icon:'fas fa-user-circle',
                        title:'Profile'
                    },
                    {
                        id:4,
                        path:'/messages',
                        icon:'fa fa-sms',
                        title:'Messages'
                    }
                ]
            }
            else {
                return [
                    {
                        id:1,
                        path:'/',
                        icon:'fas fa-home',
                        title:'Home'
                    },
                    {
                        id:2,
                        path:'/login',
                        icon:'fas fa-sign-in-alt',
                        title:'Login'
                    },
                    {
                        id:3,
                        path:'/registrate',
                        icon:'fas fa-user-plus',
                        title:'Registrate'
                    }
                ]
            }
        }
    }
  
}
</script>

<style  scoped>

#navbar{
  height: 35px;
}
img{
  height: 30px;
}
.list{
  padding-left: 0;
  list-style-type: none;
  text-transform: uppercase;
}

#logo{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
}

#exit{
  position: absolute;
  tab-index: 123;
}

.list-item{
  margin:4px 0;
}

.list-link{
  color: white;
}


</style>
