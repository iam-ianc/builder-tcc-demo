import {
  IDialogDashboard,
  IDialogDocument,
} from './types';

export default {
  getDashboardDialog(state: IDialogDashboard): boolean {
    return state.dashboard.dialog;
  },

  getDocumentDialog(state: IDialogDocument): boolean {
    return state.document.dialog;
  },

};
