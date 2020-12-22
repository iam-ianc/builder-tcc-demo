<template>
<v-navigation-drawer
  app
  :drawer="drawer"
  :permanent="drawer"
  :mobile-breakpoint="getBreakpoint + 1"
  :mini-variant="mini"
  :disable-resize-watcher="false"
  v-resize="onResize"
  dark
  :class="!darkMode ? 'deep-purple lighten-1' : ''"
>
  <div class="d-flex flex-column"
    style="height: 100vh">
    <AvatarList
      :user="user"
      :drawer="drawer"
      :mini="mini"
      :miniIcons="getSettingsItems.mini.icons"
    />
    <v-divider />
    <v-list
      nav
      dense
      class="d-flex flex-column justify-space-between"
      style="height: 100vh"
    >
      <MenuList
        :documents="documents"
        :mini="mini"
      />
      <SessionList
        :configs="configs"
        :mini="mini"
      />
    </v-list>
  </div>

</v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { IUser } from '@/store/modules/User/types';
import { IDocument, IConfigItems, ISettingsItems } from '@/store/modules/Dashboard/types';

import AvatarList from './Drawer/AvatarList.vue';
import MenuList from './Drawer/MenuList.vue';
import SessionList from './Drawer/SessionList.vue';

const userModule = 'user';
const dashboardModule = 'dashboard';

@Component({
  components: {
    AvatarList,
    MenuList,
    SessionList,
  },
})
export default class Drawer extends Vue {
  @Getter('getUser', { namespace: userModule })
  user!: IUser;

  @Getter('getDrawerActivated', { namespace: dashboardModule })
  drawer!: boolean;

  @Getter('getMiniActivated', { namespace: dashboardModule })
  mini!: boolean;

  @Getter('getDocument', { namespace: dashboardModule })
  documents!: IDocument;

  @Getter('getConfigItems', { namespace: dashboardModule })
  configs!: IConfigItems;

  @Getter('getSettingsItems', { namespace: dashboardModule }) getSettingsItems!: ISettingsItems;

  breakpoint = window.innerWidth;

  get getBreakpoint(): number {
    return this.breakpoint;
  }

  get darkMode(): boolean {
    return this.user.dark;
  }

  onResize(): void {
    this.breakpoint = window.innerWidth;
  }
}
</script>
