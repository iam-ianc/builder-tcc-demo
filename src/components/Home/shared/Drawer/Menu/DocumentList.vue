<template>
<span>
<v-list-group
  color="secondary"
  :prepend-icon="documents.icon"
  :value="toogleVisible"
  v-model="toogleVisible"
>
  <template v-slot:activator>
    <v-list-item-content>
      <v-list-item-title>
        {{ documents.title }}
      </v-list-item-title>
    </v-list-item-content>
  </template>

  <!-- //! ==> MINI -->
  <template v-if="mini">
    <v-tooltip right
      v-for="item in documents.items"
      :key="item.action"
      color="#000"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
          v-if="item.action === 'Novo'"
          v-bind="attrs"
          v-on="on"
          :key="item.action"
          :class="!mini ? 'pl-4' : ''"
          :to="{name: item.namePath}"
          exact
          link
          color="secondary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.action }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-else
          v-bind="attrs"
          v-on="on"
          :key="item.action"
          :class="!mini ? 'pl-4' : ''"
          link
          color="secondary"
          :to="{hash: item.action}"
          @click.stop="openDialog"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.action }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <span>{{ item.action }}</span>
    </v-tooltip>
  </template>

  <!-- //! ==> NORMAL -->
  <template v-else v-for="item in documents.items">
    <!-- //! ==> 'NOVO' -->
    <template v-if="item.action === 'Novo'">
      <v-list-item
        :key="item.action"
        :class="!mini ? 'pl-4' : ''"
        :to="{name: item.namePath}"
        link
        color="secondary"
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.action }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

    <!-- //! ==> 'EDITAR / UPLOAD' -->
    <template v-else>
      <v-list-item
        :key="item.action"
        :class="!mini ? 'pl-4' : ''"
        link
        color="secondary"
        :to="{hash: item.action}"
        @click.stop="openDialog($route)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.action }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

  </template>
</v-list-group>

<Dialog />
<!-- <Dialog
  :openEditDialog="editDialog"
  :openUploadDialog="uploadDialog"
  :isOpen="dialog"
  :name="name"
/> -->

</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Action, Getter } from 'vuex-class';

import Dialog from '@/components/Home/shared/Dialog/Dialog.vue';

import { IDocument } from '@/store/modules/Dashboard/types';
import { IDialogDashboard, IDialogDocument } from '@/store/modules/Dialog/types';

const dialogModule = 'dialog';

@Component({
  components: {
    Dialog,
  },
})
export default class DocumentList extends Vue {
  @Prop(Object) readonly documents!: IDocument;

  @Prop(Boolean) readonly mini!: boolean;

  @Getter('getDashboardDialog', { namespace: dialogModule })
  dashboardDialog!: IDialogDashboard;

  @Getter('getDocumentDialog', { namespace: dialogModule })
  documentDialog!: IDialogDocument;

  @Action('setDashboardDialog', { namespace: dialogModule }) toogleDashboardDialog!: (payload: boolean) => void;

  @Action('setDocumentDialog', { namespace: dialogModule }) toogleDocumentDialog!: (payload: boolean) => void;

  active = false;

  get toogleVisible(): boolean {
    return this.active;
  }

  set toogleVisible(newValue: boolean) {
    this.active = !this.active;
  }

  openDialog({ hash: oldHash, name }) {
    if (name === 'dashboard') {
      this.toogleDashboardDialog(!this.dashboardDialog);
    } else if (name === 'document') {
      this.toogleDocumentDialog(!this.documentDialog);
    }
  }

  rout(): void {
    const r = this.$route;
    // console.log(r);
  }
}

</script>
