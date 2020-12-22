<template>
  <v-app-bar app color="primary" dark>

    <template v-for="(item, i) in getSettingsItems">
      <v-tooltip bottom :key="i" v-if="i === 'drawer'" color="#000">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="i === 'drawer'"
            v-bind="attrs"
            v-on="on"
            icon
            @click.stop="toogleDrawer"
          >
            <v-icon>
              {{ item.activated ? item.icons[1] : item.icons[0] }}
            </v-icon>
          </v-btn>
        </template>
        <span>
          {{ item.activated ? 'Ocultar' : 'Mostrar' }}
        </span>
      </v-tooltip>
    </template>

    <v-spacer />

    <v-list tile dense color="primary">
      <v-tooltip bottom color="#000">
        <template v-slot:activator="{ on, attrs }">
          <v-list-item v-bind="attrs" v-on="on">
            <v-switch
              v-model="darkMode"
              :hide-details="true"
              prepend-icon="mdi-brightness-6"
              flat
              dense
              color="#fff"
              class="d-flex align-center"
            />
          </v-list-item>
        </template>
        <span>Tema: {{ darkMode ? 'Escuro' : 'Claro' }}</span>
      </v-tooltip>
    </v-list>

    <!-- <template v-for="(item, i) in getDocumentItems">
      <v-tooltip bottom :key="i">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>

        </template>
        <span>{{ item.description }}</span>
      </v-tooltip>
    </template>

    <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="{...menu, ...tooltip}"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <span>{{ getConfig.title }}</span>
        </v-tooltip>
      </template>

      <v-list>
        <v-list-item link v-for="(item, i) in getConfig.items" :key="i">
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu> -->

  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { IUser } from '@/store/modules/User/types';
import { ISettingsItems, IConfig } from '@/store/modules/Dashboard/types';

const userModule = 'user';
const dashboardModule = 'dashboard';

@Component
export default class AppBar extends Vue {
  @Getter('getUser', { namespace: userModule }) user!: IUser;

  @Getter('getSettingsItems', { namespace: dashboardModule }) getSettingsItems!: ISettingsItems;

  @Getter('getDrawerActivated', { namespace: dashboardModule }) drawer!: boolean;

  @Getter('getConfig', { namespace: dashboardModule }) getConfig!: IConfig

  @Action('setDrawer', { namespace: dashboardModule }) setDrawer!: (payload: boolean) => void;

  @Action('setDarkMode', { namespace: userModule }) setDarkMode!: (payload: boolean) => void;

  get darkMode(): boolean {
    return this.user.dark;
  }

  set darkMode(newValue: boolean) {
    this.$vuetify.theme.dark = newValue;
    this.setDarkMode(newValue);
  }

  toogleDrawer() {
    this.setDrawer(!this.drawer);
  }
}
</script>
