<template>
  <v-app>
    <AppBar />
    <Drawer />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Drawer from '@/components/Home/shared/Drawer.vue';
import AppBar from '@/components/Home/shared/AppBar.vue';

@Component({
  components: {
    Drawer,
    AppBar,
  },
})
export default class Home extends Vue {}
</script>
