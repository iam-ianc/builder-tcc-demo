<template>
  <v-tabs
    v-model="tab"
    show-arrows
    background-color="deep-purple accent-4"
    icons-and-text
    dark
    grow
    class="elevation-6"
  >
    <v-tab
      v-for="(i, idx) in tabs"
      :key="idx"
    >
      <v-icon>{{ i.icon }}</v-icon>
      <div class="caption py-1">{{ i.name }}</div>
    </v-tab>

    <v-tab-item>
      <SignInForm />
    </v-tab-item>
    <v-tab-item>
      <SignUpForm />
    </v-tab-item>

  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SignInForm from './SignInForm.vue';
import SignUpForm from './SignUpForm.vue';

@Component({
  components: {
    SignInForm,
    SignUpForm,
  },
})
export default class LoginLayout extends Vue {
  tab = 0;

  tabs = [
    { name: 'Login', icon: 'mdi-account' },
    { name: 'Register', icon: 'mdi-account-outline' },
  ];
}
</script>
