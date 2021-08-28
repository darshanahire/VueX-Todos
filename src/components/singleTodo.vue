<template>
  <div>
    <li class="list">
      <span id="todo">#.{{ eachTodo.todo }}</span>
      <button
        type="button"
        class="btn"
        id="delBtn"
        v-on:click="passIdTodel(eachTodo.id)"
      >
        DEL
      </button>
      <button type="button" class="btn" id="editBtn">Edit</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "singleTodod",
  props: ["eachTodo"],
  data() {
    return { todoCounter: 0 };
  },
  methods: {
    passIdTodel(id) {
      console.log(id);

      // Call to store to delete Todo
      this.$store.commit("delTodo", id);
    },
  },
};
</script>


<style>
.list {
  justify-content: center;
  text-align: center;
  margin: 5px auto;
  height: 45px;
  width: 35%;
  background: linear-gradient(to right, #ffd194, #70e1f5);
  list-style: none;
  border-radius: 5px;
}
#todo {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 15px;
  font-size: 17px;
}
.btn {
  text-align: center;
  width: 65px;
  margin: 4px 10px;
  height: 80%;
  padding: 0px;
  border: 1px solid transparent;

  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  text-align: center;
}
#delBtn {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
#editBtn {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
@media screen and (max-width: 775px) {
  .list {
    width: 100%;
  }
}
</style>