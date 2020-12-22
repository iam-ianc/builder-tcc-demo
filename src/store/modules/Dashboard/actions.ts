import { ActionContext } from 'vuex';
import { IDashboard } from './types';

export default {
  setDrawer(store: ActionContext<IDashboard, any>, payload: boolean): void {
    store.commit('setDrawer', payload);
  },

  setMini(store: ActionContext<IDashboard, any>, payload: boolean): void {
    store.commit('setMini', payload);
  },

  toogleEditDialog(store: ActionContext<IDashboard, any>, payload: boolean) {
    store.commit('setEditDialog', payload);
  },

  toogleUploadDialog(store: ActionContext<IDashboard, any>, payload: boolean) {
    store.commit('setUploadDialog', payload);
  },
};
