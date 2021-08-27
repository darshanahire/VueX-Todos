<template>
  <div class="inputCard">
    <h3>ADD TODO</h3>
    <input type="text" id="inputTodo" v-model="newTodo"/>
    <button id="addBtn" v-on:click="getData">ADD TODO</button>
  </div>
</template>



<script>
export default {
  name: "getTodo",
  data(){
      return {
          newTodo : null,
          obj:{},
          id:0
      }
  },
  props:[
      'inputTodo'
  ],
  methods:{
      getData(){

          if(this.newTodo===null) alert("Please Enter Todo")
          else{
          this.obj={id:this.id++,todo:this.newTodo}
          this.inputTodo.push(this.obj)
          this.newTodo="";
          this.$emit("eventName",this.inputTodo)
        localStorage.setItem("Todos",JSON.stringify(this.inputTodo))        
          }
      }
  }
};
</script>



<style>
.inputCard {
  background: linear-gradient(
    to right,
    #89fffd,
    #ef32d9
  ); 
  height: 200px;
  width: 35%;
  margin: 100px auto;
  border-radius: 15px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}
h3 {
  color: #000;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
}
#inputTodo {
  font-size: 1rem;
  width: 70%;
  margin: 0px auto;
  height: 33px;
  outline: none;
  border: none;
  border-radius: 5px;
}
#addBtn {
  text-align: center;
  margin: 20px auto;
  width: 150px;
  height: 35px;
  padding: 0px;
  border: 1px solid transparent;
  background-color: #146c43;
  border-color: #13653f;
  color: #fff;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
#addBtn:hover{
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
}
@media screen and (max-width:775px){
  .inputCard {
    width: 100%;
    margin: 20px 0 ;
    height: 250px;
  }
  #app{
    width: 100%;
  }
}
</style>