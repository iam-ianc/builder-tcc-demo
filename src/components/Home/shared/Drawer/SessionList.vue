<template>
<v-list-item-group>

  <template v-if="mini">
    <v-tooltip
      v-for="(item, i) in configs"
      :key="item.title"
      right
      color="#000"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
          v-if="i !== 'exit'"
          v-bind="attrs"
          v-on="on"
          :to="{name: item.namePath}"
          link
          color="secondary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-else
          v-bind="attrs"
          v-on="on"
          link
          color="secondary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <span>{{ item.title }}</span>
    </v-tooltip>
  </template>

  <template v-else
    v-for="(item, i) in configs"
  >
    <v-list-item
      :key="item.title"
      v-if="i !== 'exit'"
      :to="{name: item.namePath}"
      link
      color="secondary"
      @click.stop="rout"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item
      v-else
      :key="item.title"
      link
      color="secondary"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </template>

</v-list-item-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { IConfigItems } from '@/store/modules/Dashboard/types';

@Component
export default class SessionList extends Vue {
  @Prop(Boolean) readonly mini!: boolean;

  @Prop(Object) readonly configs!: IConfigItems;

  rout(): void {
    const r = this.$route;
    // console.log(r);
  }
}

</script>
