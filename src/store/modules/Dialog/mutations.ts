import { IDialogDashboard, IDialogDocument } from './types';

export default {
  setDashboardDialog(state: IDialogDashboard, payload: boolean) {
    state.dashboard.dialog = payload;
  },

  setDocumentDialog(state: IDialogDocument, payload: boolean) {
    state.document.dialog = payload;
  },
};
