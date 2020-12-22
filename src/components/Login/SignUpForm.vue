<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form
        ref="form_register"
        v-model="valid"
        lazy-validation
      >
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="firstName"
              :rules="[rules.required]"
              label="First Name"
              maxlength="20"
              required
              counter
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lastName"
              :rules="[rules.required]"
              label="Last Name"
              maxlength="20"
              required
              counter
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              counter
              :rules="[rules.required, rules.min]"
              label="Password"
              hint="At least 8 characters"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="verifyPassword"
              counter
              :rules="[rules.required, passwordMatch]"
              label="Confirm Password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
            <v-btn
              x-large
              block
              :disabled="!valid"
              color="success"
              @click="signUp"
            >
              Register
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
import { nameRules, emailRules, rules } from './form_rules';

@Component
export default class SignUpForm extends Vue {
  valid = true;

  firstName = '';

  lastName = '';

  email = '';

  password = '';

  verifyPassword = '';

  showPassword = false;

  nameRules = nameRules;

  emailRules = emailRules;

  rules = rules;

  @Ref('form_register') form_register!: VForm;

  get passwordMatch() {
    return this.password === this.verifyPassword || 'Password must match';
  }

  signUp(): void {
    this.form_register.validate();
    console.log('REGISTROU!');
  }
}
</script>
