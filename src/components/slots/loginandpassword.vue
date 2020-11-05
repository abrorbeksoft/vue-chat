<template>
  <div id="login">
      <div class="row my-3 ">
        <div class="col-2 text-right ">
                <i class="fa  fa-2x fa-user self-center"></i>
            </div>  
            <div class="col-10">
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-2 text-right ">
                <i class="fas fa-2x fa-lock self-center"></i>
            </div>  
            <div class="col-10">
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="row my-3">
            <div class="col-2 text-right ">
            </div>  
            <div class="col-10">
                <input placeholder="Confirm password" type="text" class="form-control">
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
    name:'login'
}
</script>

<style>

</style>