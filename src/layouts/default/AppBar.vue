<template>
  <v-app-bar color="secondary">

    <v-toolbar-title>
      <div class="d-flex">
        <a href="/" class="text-decoration-none">
          <v-icon color="accent">mdi-hammer</v-icon>
          <span class="ml-3">Vue Jobs</span>
        </a>
      </div>

    </v-toolbar-title>
    <v-spacer></v-spacer>

    <router-link to="/about">
      <v-btn text color="background" prepend-icon="mdi-help-circle-outline">
        Ajuda
      </v-btn>
    </router-link>


  </v-app-bar>
</template>

<script setup></script>
