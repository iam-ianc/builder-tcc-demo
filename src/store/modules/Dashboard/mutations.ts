import { IDashboard } from './types';

export default {
  setDrawer(state: IDashboard, payload: boolean) {
    state.settings.items.drawer.activated = payload;
  },

  setMini(state: IDashboard, payload: boolean) {
    state.settings.items.mini.activated = payload;
  },

  setEditDialog(state: IDashboard, payload: boolean) {
    state.document.items.edit.dialog = payload;
  },

  setUploadDialog(state: IDashboard, payload: boolean) {
    state.document.items.upload.dialog = payload;
  },
};
