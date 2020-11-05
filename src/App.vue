
<template>
<div id="app">
  <div class="container">
    <div class="row  mb-2">
      <div class="col p-2 bg-primary">
        <img  src="@/assets/logo.png" alt="" srcset="">
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-3 bg-secondary" id="sidebar">
        <ul class="list ">
          <router-link  class="list-item" to="/" tag="li" ><a class="list-link" >Home</a></router-link>
          <router-link class="list-item" to="/login" tag="li" ><a class="list-link" >Login</a></router-link>
          <router-link class="list-item" to="/register" tag="li" ><a class="list-link" >Register</a></router-link>

          <router-link class="list-item"  to="/settings"><a class="list-link" >Settings</a></router-link>
         
          <li class="list-item"><a class="list-link" href="#">Settings</a></li>
          <li class="list-item"><a class="list-link" href="#">Profile</a></li>
          <li class="list-item"><a class="list-link" href="#">Messages</a></li>
          
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

.list-item{
  margin:4px 0;
}

.list-link{
  color: white;
}


</style>
