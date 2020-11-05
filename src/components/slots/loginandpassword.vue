<template>
  <div id="login">
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
        <div class="row my-3">
            <div class="col-2 text-right ">
            </div>  
            <div class="col-10">
                <input v-model="password1" placeholder="Confirm password" type="password" class="form-control">
            </div>
        </div>
          <div class="row">
              <div class="col-2"></div>
              <div class="col-10 text-right">
                  <button @click="registrate()" class="btn btn-primary btn-end  ">Next</button>
              </div>
          </div>

  </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            email:null,
            password:null,
            password1:null,
        }
    },
    methods:{
        registrate(){
            if (this.password===this.password1)
            {
                this.$store.dispatch('registerUserAction',{
                    email:this.email,
                    password:this.password
                });

                this.$store.dispatch('setEmailAndPasswordAction',{
                    email:this.email,
                    password:this.password
                }).then(()=>{
                    this.$router.push('/')
                })
            }

        }
    }
}
</script>

<style>

</style>