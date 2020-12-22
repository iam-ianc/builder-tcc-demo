<template>
<span>
  <DashboardList />

  <DocumentList
    :documents="documents"
    :mini="mini"
  />
</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { IDocument } from '@/store/modules/Dashboard/types';

import DashboardList from './Menu/DashboardList.vue';
import DocumentList from './Menu/DocumentList.vue';

@Component({
  components: {
    DashboardList,
    DocumentList,
  },
})
export default class MenuList extends Vue {
  @Prop(Object) readonly documents!: IDocument;

  @Prop(Boolean) readonly mini!: boolean;
}

</script>
