import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/User';
import dashboard from './modules/Dashboard';
import dialog from './modules/Dialog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    dashboard,
    dialog,
  },
});
