<template>
<div id="register">
    <div class="card">
        <div class="card-header bg-primary text-white p-0">
            <ul class="nav border-0 nav-tabs justify-content-center">
                <li class="nav-item " v-bind:class="show?'active_item':''">
                    <a class="nav-link text-white" >Login & Password</a>
                </li>
                <li class="nav-item" v-bind:class="show?'':'active_item'">
                    <a class="nav-link text-white" >Confirm pssword</a>
                </li>
                
            </ul>
        </div>
        <div class="card-body">

            <router-view></router-view>

        </div>
    </div>
    
</div>
</template>

<script>

export default {
    name:'register',
    data(){
        return {
            show:true,
            conter:0,
        }
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
