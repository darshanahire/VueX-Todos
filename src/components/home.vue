<template>
  <div>
    <getTodo />
    <todos />
  </div>
</template>

<script>
import getTodo from "./getTodo.vue";
import todos from "./todos.vue";
export default {
  name: "home",
  components: {
    getTodo,
    todos,
  },
  mounted: function () {
    // Call To function to getTodo from LocalStorage
    this.$store.commit("getTodoFromLocal");
  },
};
</script>


