<template>
  <v-app>
    <v-container
      class="d-flex"
      style="height: 100vh;"
    >
      <v-row
        no-gutters
        justify="center"
        align="center"
      >
        <v-col
          sm="10"
          md="6"
        >
          <LoginLayout />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import LoginLayout from '@/components/Login/LoginLayout.vue';

import { IUser } from '@/store/modules/User/types';

const namespace = 'user';

@Component({
  components: {
    LoginLayout,
  },
})
export default class Login extends Vue {
  @Getter('getUser', { namespace }) data!: IUser;

  created() {
    if (this.data.typeAccess === '1') {
      this.$router.replace({ name: 'dashboard' });
    }
  }
}
</script>
