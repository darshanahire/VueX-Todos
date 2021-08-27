<template>
  <div >
      <!-- <Navbar/> -->
    <getTodo v-bind:inputTodo="inputTodo" v-on:eventName="dataReach($event)" />
    <todos v-bind:inputTodo="inputTodo" v-on:delTodo="delTodo($event)"/>
  </div>
</template>


<script>
import getTodo from "./getTodo.vue"
// import Navbar from './navbar.vue'
import todos from "./todos.vue"
export default {
  name: 'home',
  components: {
    getTodo,
    todos,
    // Navbar
  },
  data(){
    return{
      inputTodo:[]
    }
  },
  methods:{
    dataReach(inputTodo){
      this.inputTodo=inputTodo;  
    },
      delTodo(id){
        this.i=this.inputTodo.length
       this.inputTodo=this.inputTodo.filter(function(key){
       return key.id != id   
       })
      localStorage.setItem("Todos",JSON.stringify(this.inputTodo))        
        }
  },
  mounted:function(){
    const getTodo= localStorage.getItem("Todos")
    if(getTodo)
    this.inputTodo = JSON.parse(getTodo)
    else this.inputTodo= []
  }
}
</script>


