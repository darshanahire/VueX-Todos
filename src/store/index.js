import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        inputTodo: [],
    },
    mutations: {
        getData: function (state, payload) {
            state.inputTodo.push(payload);
            localStorage.setItem("Todos", JSON.stringify(state.inputTodo));
        },
        delTodo: function (state, payload) {
            state.inputTodo = state.inputTodo.filter((key) => {
                return key.id != payload
            })
            localStorage.setItem("Todos", JSON.stringify(state.inputTodo))
        },
        getTodoFromLocal: function (state) {
            const getTodo = localStorage.getItem("Todos")
            if (getTodo)
                state.inputTodo = JSON.parse(getTodo)
            else state.inputTodo = []
        }
    },
    actions: {

        // adviser api feching should be can be added here
    }

})