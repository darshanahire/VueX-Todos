<template>
  <div class="inputCard">
    <h3>Our Advice</h3>
    <div v-if="advice!==undefined">
    <p>{{advice}}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "adviser",
  data() {
    return {
      advice: undefined,
    };
  },

  mounted: function () {
    Vue.axios.get("https://api.adviceslip.com/advice").then((response) => {
      this.advice = response.data.slip.advice;
    });
  },
};
</script>

<style scoped>

.inputCard{
background: #16BFFD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #CB3066, #16BFFD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #CB3066, #16BFFD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
h3{
  font-weight: 700;
}
p{
    color:black;
    font-size: 20px;
    font-weight: 600;
}
</style>