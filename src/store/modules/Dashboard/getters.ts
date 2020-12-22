import {
  ISettingsItems,
  IDocument, IDocumentItems,
  IConfig, IConfigItems,
  IDashboard,
} from './types';

export default {
  getSettingsItems(state: IDashboard): ISettingsItems {
    return state.settings.items;
  },

  getMiniActivated(state: IDashboard): boolean {
    return state.settings.items.mini.activated;
  },

  getDrawerActivated(state: IDashboard): boolean {
    return state.settings.items.drawer.activated;
  },

  getDocument(state: IDashboard): IDocument {
    return state.document;
  },

  getDocumentItems(state: IDashboard): IDocumentItems {
    return state.document.items;
  },

  getConfig(state: IDashboard): IConfig {
    return state.config;
  },

  getConfigItems(state: IDashboard): IConfigItems {
    return state.config.items;
  },

};
