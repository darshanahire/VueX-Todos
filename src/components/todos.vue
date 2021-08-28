<template>
  <div>
    <div v-for="eachTodo in inputTodoData" v-bind:key="eachTodo.id">
      <singleTodo v-bind:eachTodo="eachTodo" />
    </div>
  </div>
</template>

<script>
import singleTodo from "./singleTodo.vue";
export default {
  name: "todos",
  components: {
    singleTodo,
  },
  computed: {
    inputTodoData() {
      // Geting Data from Store
      return this.$store.state.inputTodo;
    },
  },
};
</script>

<style>
</style>