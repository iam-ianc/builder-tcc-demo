<template>
<v-list-item
  :to="{name: 'dashboard'}"
  link
  color="secondary"
  exact
>
  <v-list-item-icon>
    <v-icon>mdi-view-dashboard</v-icon>
  </v-list-item-icon>
  <v-list-item-content>
    <v-list-item-title>
      Dashboard
    </v-list-item-title>
  </v-list-item-content>
</v-list-item>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DashboardList extends Vue {
  rout(): void {
    const r = this.$route;
    // console.log(r);
  }
}

</script>
