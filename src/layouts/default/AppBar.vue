<template>
  <v-app-bar color ="secondary">

    <v-toolbar-title>
      <div class="d-flex">
        <v-icon color="accent">mdi-hammer</v-icon>
        <span class="ml-3">Vue Jobs</span>
      </div>

    </v-toolbar-title>
    <v-spacer></v-spacer>


  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>
