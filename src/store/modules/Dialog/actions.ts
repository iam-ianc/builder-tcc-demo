import { ActionContext } from 'vuex';
import { IDialogDashboard, IDialogDocument } from './types';

export default {
  setDashboardDialog(store: ActionContext<IDialogDashboard, any>, payload: boolean): void {
    store.commit('setDashboardDialog', payload);
  },

  setDocumentDialog(store: ActionContext<IDialogDocument, any>, payload: boolean): void {
    store.commit('setDocumentDialog', payload);
  },
};
