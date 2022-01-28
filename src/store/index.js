import Vue from "vue";
import Vuex from "vuex";
import organisation from "./modules/organisation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    organisation,
  },
});
