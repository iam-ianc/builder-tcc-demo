<template>
  <v-container>
    <v-row>
      <v-btn color="primary" slot="hover">primary</v-btn>
      <v-btn color="secondary">secondary</v-btn>
      <v-btn color="accent">accent</v-btn>
      <v-btn color="success">success</v-btn>
      <v-btn color="error">error</v-btn>
      <v-btn color="warning">warning</v-btn>
      <v-btn color="info">info</v-btn>
      <!-- <v-col
        cols="12"
        md="4"
        v-for="(card, idx) in cards"
        :key="idx">
      <v-card
        class="d-flex flex-column align-center my-4"
      >
        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text>{{ card.text }}</v-card-text>
        <v-card-actions>
          <v-btn icon fab large outlined :color="card.color">
            <v-icon>{{ card.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col> -->

    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {
}
</script>
