<template>
<div id="register">
    <div class="card">
        <div class="card-header p-0">
            <ul class="nav border-0 nav-tabs justify-content-center">
                <li class="nav-item " v-bind:class="show?'active_item':''">
                    <a class="nav-link " >Login & Password</a>
                </li>
                <li class="nav-item" v-bind:class="show?'':'active_item'">
                    <a class="nav-link" >Confirm pssword</a>
                </li>
                
            </ul>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-10 text-right">
                    <button @click='show=!show' class="btn btn-primary btn-end  ">Next</button>
                </div>
            </div>
            <loginandpassword v-show="show" > </loginandpassword>
            <confirmpassword v-show="!show" ></confirmpassword>
    
        </div>
    </div>
    
</div>
</template>

<script>
import loginandpassword from './slots/loginandpassword'
import confirmpassword from './slots/confirmpasword'

export default {
    name:'register',
    data(){
        return {
            show:true,
            conter:0,
        }
    },
    components:{
        loginandpassword,confirmpassword
    }
}
</script>

<style scoped>


  .active_item a{
    border-radius: 0;
    background-color: black;
    color: white;
}
</style>
