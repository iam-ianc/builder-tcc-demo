<template>
<span>
  <template>
    <v-dialog
      v-model="dashboardDialog"
      persistent
    >
      <v-card light>
        <v-card-title class="mb-3">
          {{ (getHash === 'Editar') ? textDialog.edit.text : null }}
          {{ (getHash === 'Upload') ? textDialog.upload.text : null }}
        </v-card-title>

        <v-card-subtitle class="mb-6">
          Os arquivos suportados são:
          {{ (getHash === 'Editar') ? textDialog.edit.subtitle : null }}
          {{ (getHash === 'Upload') ? textDialog.upload.subtitle : null }}
        </v-card-subtitle>

        <!-- //! ==> INPUT FILE -->
        <v-card-text>
          <v-row>
            <v-file-input
              v-model="archive"
              :rules="fileRules"
              accept="text"
              color="primary"
              label="Arquivo"
              prepend-icon="mdi-paperclip"
              placeholder="Selecione seu arquivo"
              counter
              outlined
              show-size
            >
              <template v-slot:selection="{ text }">
                <v-chip
                  color="accent"
                  dark
                  label
                  small
                >{{ text }}</v-chip>
              </template>
            </v-file-input>
          </v-row>

          <!-- //! ==> BOTÕES -->
          <v-row justify="space-around">
            <v-btn
              class="white--text mt-6"
              color="info"
              :disabled="valid"
            >Enviar</v-btn>
            <v-btn
              class="white--text mt-6"
              color="error"
              @click.stop="toogleDashboardDialog(!dashboardDialog)"
            >Cancelar</v-btn>
          </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>
  </template>

  <template>
    <v-dialog
      v-model="documentDialog"
      persistent
    >
      <v-card light>
        <v-card-title class="mb-3">
          Tem certeza que deseja sair?
        </v-card-title>
        <v-card-text>
          <!-- <v-row> -->
            <p>Se você sair você perderá seu progresso com seu documento.</p>
          <!-- </v-row> -->
          <v-row justify="space-around">
            <v-btn
              class="white--text mt-6"
              color="info"
              @click.stop="
                toogleDocumentDialog(!documentDialog);
                toogleDashboardDialog(!dashboardDialog);
              "
            >Continuar</v-btn>
            <v-btn
              class="white--text mt-6"
              color="error"
              @click.stop="toogleDocumentDialog(!documentDialog);"
            >Cancelar</v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
</span>
</template>

<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { IDialogDashboard, IDialogDocument } from '@/store/modules/Dialog/types';

import fileRules from './file_rules';

const dialogModule = 'dialog';

@Component
export default class Dialog extends Vue {
  @Getter('getDashboardDialog', { namespace: dialogModule })
  dashboardDialog!: IDialogDashboard;

  @Getter('getDocumentDialog', { namespace: dialogModule })
  documentDialog!: IDialogDocument;

  @Action('setDashboardDialog', { namespace: dialogModule }) toogleDashboardDialog!: (payload: boolean) => void;

  @Action('setDocumentDialog', { namespace: dialogModule }) toogleDocumentDialog!: (payload: boolean) => void;

  fileRules = fileRules

  archive = [];

  valid = true;

  textDialog = {
    edit: {
      text: 'Insira seu arquivo para editar',
      subtitle: '.btcc',
    },
    upload: {
      text: 'Faça upload do seu arquivo',
      subtitle: '.txt / .docx / .doc',
    },
  }

  get getHash() {
    const hash = this.$route.hash.slice(1);
    return hash;
  }
}

</script>
