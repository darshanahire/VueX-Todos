<template>
<div>
  <div v-for="eachTodo in inputTodo" v-bind:key="eachTodo.id">
        <singleTodo v-bind:eachTodo="eachTodo" v-on:passIdTodel="delTodo($event)"/>
  </div>
  </div>
</template>

<script>
import singleTodo from "./singleTodo.vue"
export default {
    name:'todos',
    components: {
        singleTodo
    },
    props:[
      'inputTodo'
    ],
    data(){
      return {i:0}
    },
    methods:{
       delTodo(id){
    this.$emit("delTodo",id)
       }
    }
}
</script>

<style>

</style>