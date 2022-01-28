const state = () => ({
  org: {},
  count: 0,
});

//getters
const getters = {
  getName: (state) => {
    return state.name;
  },
};
//mutations
const mutations = {
  CHANGEORG(state, payload) {
    state.org = payload;
  },
  increment(state) {
    state.count++;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
