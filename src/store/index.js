import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // Root state, not in a namespaced module
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    // foo(state) {
    //   return `root-getter/${state.foo}`; // value from the state property
    // },
  },
});
