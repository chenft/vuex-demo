import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1,
  num: 10,
};

const mutations = {
  add: (state, n) => {
    console.log(2);
    state.count += n;
  },
  decrease: (state, n = 5) => {
    state.count -= n;
  },
};

const getters = {
  count: (state) => {
    console.log(1);
    state.moduleCount.count += 100;
    return state.moduleCount.count;
  },
};

const actions = {
  addAction(ctx) {
    ctx.commit('add', 4);
    setTimeout(() => {
      ctx.commit('decrease');
    }, 3000);
    console.log('我比reduce提前执行');
  },
  decreaseAction({ commit }) {
    commit('decrease');
  },
};

const moduleCount = {
  state,
  mutations,
  actions,
};
export default new Vuex.Store({
  modules: {
    moduleCount,
  },
  getters,
});
