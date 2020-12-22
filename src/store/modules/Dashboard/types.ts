export interface IDefault {
  icon: string;
  title: string;
}

export interface ISettingsItems {
  drawer: {
    icons: string[];
    activated: boolean;
  };
  mini: {
    icons: string[];
    activated: boolean;
  };
}

export interface ISettings extends IDefault {
  items: ISettingsItems;
}

export interface IDocumentItemsDefault {
  namePath: string;
  action: string;
  dialog?: boolean;
  description: string;
  text: string;
  icon: string;
  color: string;
}

export interface IDocumentItems {
  create: IDocumentItemsDefault;
  edit: IDocumentItemsDefault;
  upload: IDocumentItemsDefault;
}
export interface IDocument extends IDefault {
  items: IDocumentItems;
}

export interface IConfigItemsDefault {
  namePath: string;
  icon: string;
  title: string;
}

export interface IConfigItems {
  editProfile: IConfigItemsDefault;
  signout: IConfigItemsDefault;
  exit: IConfigItemsDefault;
}
export interface IConfig extends IDefault {
  items: IConfigItems;
}

export interface IDashboard {
  settings: ISettings;
  document: IDocument;
  config: IConfig;
}
