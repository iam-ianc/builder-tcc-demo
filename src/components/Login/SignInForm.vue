<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form
        ref="form_login"
        v-model="valid"
        lazy-validation
      >
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="loginEmail"
              :rules="emailRules"
              label="Email"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              required
              v-model="loginPassword"
              counter
              :rules="[rules.required, rules.min]"
              label="Password"
              hint="At least 8 characters"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex" cols="12" sm="3" xsm="12">
            <v-btn
              x-large
              block
              :disabled="!valid"
              color="success"
              @click="signIn"
              class="mt-6"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';
import { VForm } from '@/types';
import { emailRules, rules } from './form_rules';

@Component
export default class SignInForm extends Vue {
  valid = true;

  loginEmail = '';

  loginPassword = '';

  showPassword = false;

  emailRules = emailRules;

  rules = rules;

  @Ref('form_login') form_login!: VForm;

  signIn(): void {
    this.form_login.validate();
    console.log('VALIDOU!');
  }
}
</script>
