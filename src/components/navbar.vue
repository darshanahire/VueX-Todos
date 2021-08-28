<template>
  <div id="navbar">
  <ul class="nav-links">
      <li> <router-link class="links" to="/"> VueTodos </router-link></li>
      <li> <router-link class="links" to="/adviser"> Advicer </router-link></li>
      <li> <router-link class="links" to="/about"> About </router-link></li>
  </ul>
  </div>
</template>

<script>
export default {
name:'navbar'
}
</script>

<style>
#navbar{

background: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);
    box-shadow: 0px -19px 39px 2px black;;
    /* box-shadow: -34px -29px 47px 8px black; */
    border:1px solid transparent;
    width: 100%;
    height: 50px;
}
.nav-links{
    display: flex;
    margin: 0;
}
.nav-links li{
    margin:15px 50px;
    list-style: none;}
.links{
    text-decoration: none;
    color: black;
}
.links:hover{
    color: white;
}
@media screen and (max-width:775px){
  .nav-links li{
    margin:15px 1em;}
}
@media screen and (max-width:300px){
  .nav-links li{
    margin:15px 5px;}
}
</style>