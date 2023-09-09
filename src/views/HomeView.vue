<template>
  <v-container>
    <template v-if="!searchIsComplete && !loading">
      <v-row class=" mt-5">
        <v-col cols="12">
          <h1 class="text-accent text-center text-3xl">Bem vindo ao Vue Jobs</h1>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col>
          <v-img src="../assets/job-logo.png" class="job-logo mx-auto">
          </v-img>
        </v-col>
      </v-row>
    </template>

    <v-row>
      <v-col cols="12">
        <v-text-field :loading="loading" density="compact" variant="outlined" label="Por qual vaga você está procurando?"
          append-inner-icon="" single-line hide-details v-model="searchInput" @keyup.enter ="searchJob" >
          <template v-slot:append-inner>
            <v-btn :loading="loading" :disabled="loading" icon class="bg-background" @click="searchJob" elevation="0">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <template v-if="jobs?.length === 0 && searchIsComplete">
        <v-col cols="12">
          <v-alert type="error" dismissible>
            <span class="text-accent">Ops!</span> Não encontramos nenhuma vaga com esse nome.
          </v-alert>
        </v-col>
      </template>
      <template v-if="searchIsComplete && jobs?.length > 0">
        <v-col cols="12">
          <h2 class="text-accent text-center text-2xl">Vagas encontradas</h2>
        </v-col>

      </template>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="job in jobs" :key="job.id">
      <job-card :job="job"></job-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import SearchJ from '../controller/Jsearch.js';
import JobCard from '@/components/JobCard.vue';

const searchInput = ref('');
const loading = ref(false);
const searchIsComplete = ref(false);
const jobs = ref([]);


const finishSearch = () => {
  searchIsComplete.value = true;
  loading.value = false;
  searchInput.value = '';
};

const searchJob = async () => {
  loading.value = true;
  const result = await SearchJ.search(searchInput.value);
  jobs.value = result.data;
  finishSearch();
};



</script>

<style scoped></style>