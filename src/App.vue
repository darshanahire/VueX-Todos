<template>
  <div id="app">

    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  name: "app",
  components: {
    navbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
@media screen and (max-width:775px){
  #app{
    width: 100%;
  }
}
</style>