export default {
  settings: {
    icon: '',
    title: 'Ajustes',
    items: {
      mini: {
        icons: ['mdi-chevron-left', 'mdi-chevron-right'],
        activated: false,
      },
      drawer: {
        icons: ['mdi-menu', 'mdi-backburger'],
        activated: true,
      },
    },
  },

  document: {
    icon: 'mdi-file',
    title: 'Documento',
    items: {
      create: {
        namePath: 'document',
        action: 'Novo',
        description: 'Novo Documento',
        text: 'Aqui você ira produzir um documento',
        icon: 'mdi-file-plus',
        color: 'indigo',
      },
      edit: {
        namePath: '',
        action: 'Editar',
        dialog: false,
        description: 'Editar Documento',
        text: 'Aqui você vai editar um documento',
        icon: 'mdi-file-edit',
        color: 'indigo',
      },
      upload: {
        namePath: '',
        action: 'Upload',
        dialog: false,
        description: 'Upload de Arquivo',
        text: 'Aqui você faz upload de arquivo',
        icon: 'mdi-file-export',
        color: 'primary',
      },
    },
  },

  config: {
    icon: 'mdi-cog',
    title: 'Configurações',
    items: {
      editProfile: {
        namePath: 'account',
        icon: 'mdi-account-edit',
        title: 'Editar Perfil',
      },
      signout: {
        namePath: 'login',
        icon: 'mdi-account-convert',
        title: 'Alterar Sessão',
      },
      exit: {
        namePath: '',
        icon: 'mdi-exit-to-app',
        title: 'Sair',
      },
    },
  },
};
