<template>
  <router-view></router-view>
</template>

<script lang="ts">
// import Vue from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IUser } from './store/modules/User/types';

const userModule = 'user';

@Component({ name: 'App' })
export default class App extends Vue {
  @Getter('getUser', { namespace: userModule }) user!: IUser;

  created() {
    const themeUser = (this.user?.dark) ?? false;

    if (themeUser) {
      this.$vuetify.theme.dark = themeUser;
    }
  }
}
// export default Vue.extend({
//   name: 'App',

//   components: {
//     // Login,
//     // Home,
//   },

//   data: () => ({
//     //
//   }),

//   methods: {
//   },
// });
</script>
