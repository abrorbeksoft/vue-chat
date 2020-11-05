<template>
    <div id="login">
        <div class="card">
            <div class="card-header bg-primary text-white p-0">
                <ul class="nav border-0 nav-tabs ">
                    <li class="nav-item " >
                        <a class="nav-link text-white" >Login form</a>
                    </li>

                </ul>
            </div>
            <div class="card-body">
                <div class="row my-3 ">
                    <div class="col-2 text-right ">
                        <i class="fas  fa-2x fa-at self-center"></i>
                    </div>
                    <div class="col-10">
                        <input v-model="email" type="email" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 text-right ">
                        <i class="fas fa-2x fa-lock self-center"></i>
                    </div>
                    <div class="col-10">
                        <input v-model="password" type="password" class="form-control">
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2"></div>
                    <div class="col-10 text-right">
                        <button @click="login()" class="btn btn-primary btn-end  ">Login</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name:'login',
        data(){
            return {
                email:null,
                password:null
            }
        },
        methods:{
            login(){
                this.$store.dispatch('loginUserAction',{
                    email:this.email,
                    password:this.password
                }).then(()=>{
                    this.$router.push('/')
                })
            }
        }
    }
</script>

<style scoped>


</style>
