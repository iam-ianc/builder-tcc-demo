<template>
<v-tooltip right color="#000">
  <template v-slot:activator="{ on, attrs }">
    <v-list-item
      class="px-2 primary"
      style="flex: 0 0 auto;"
      v-bind="attrs"
      v-on="on"
      @click.stop="toogleMini"
    >
      <v-list-item-avatar>
        <v-img src="@/assets/profile_rounded.png"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>
        {{ user.firstName }} {{ user.lastName }}
      </v-list-item-title>
        <v-icon>
          {{ mini ? miniIcons[1] : miniIcons[0] }}
        </v-icon>
    </v-list-item>
  </template>
  <span>
    {{ mini ? 'Ampliar' : 'Reduzir' }}
  </span>
</v-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import { IUser } from '@/store/modules/User/types';

const dashboardModule = 'dashboard';

@Component
export default class AvatarList extends Vue {
  @Prop(Object) readonly user!: IUser;

  @Prop(Boolean) readonly drawer!: boolean;

  @Prop(Boolean) readonly mini!: boolean;

  @Prop(Array) readonly miniIcons!: string[];

  @Action('setMini', { namespace: dashboardModule })
  setMini!: (payload: boolean) => void;

  toogleMini(): void {
    if (this.drawer) {
      this.setMini(!this.mini);
    }
  }
}

</script>
