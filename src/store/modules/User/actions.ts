import { ActionContext } from 'vuex';
import { IUser } from './types';

export default {
  setDarkMode(store: ActionContext<IUser, any>, payload: boolean): void {
    store.commit('setDarkMode', payload);
  },
};
