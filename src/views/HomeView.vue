<template>
  <v-container>
    <template v-if="!searchIsComplete && !loading">
      <v-row class="mt-5">
        <v-col cols="12">
          <h1 class="text-accent text-center text-3xl">
            Bem vindo ao Vue Jobs
          </h1>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col>
          <v-img src="../assets/job-logo.png" class="job-logo mx-auto"> </v-img>
        </v-col>
      </v-row>
    </template>

    <v-row>
      <v-col cols="12">
        <v-text-field :loading="loading" density="compact" placeholder="Por qual vaga você está procurando?"
          label="Digite aqui" variant="outlined" class="border-2 border-primary" hide-details="auto" v-model="searchInput"
          @keyup.enter="searchJob">
          <template v-slot:append-inner>
            <v-btn :loading="loading" class="search-btn" :disabled="loading" icon style="background-color: transparent"
              @click="searchJob" elevation="0">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-select label="Período" v-model="searchTime" :items="timeOptions" item-title="text"
          item-value="value"></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-switch v-model="onlyRemoteJobs" hide-details inset color="primary"
          :label="`Apenas trabalhos Remotos? ${onlyRemoteJobs ? 'Sim' : 'Não'}`"></v-switch>
      </v-col>
    </v-row>
    <v-row>
      <template v-if="loading">
        <v-col cols="12" md="6" v-for="n in 6">
          <v-skeleton-loader type="card" class="mt-5" color="primary"></v-skeleton-loader>
        </v-col>
      </template>
      <template v-if="jobs?.length === 0 && searchIsComplete">
        <v-col cols="12">
          <v-alert type="error" dismissible>
            <span class="text-accent">Ops!</span> Não encontramos nenhuma vaga
            com esse nome.
          </v-alert>
        </v-col>
      </template>
      <template v-if="searchIsComplete && jobs?.length > 0">
        <v-col cols="12">
          <h2 class="text-accent text-center text-2xl">Vagas encontradas</h2>
        </v-col>
      </template>
    </v-row>
    <v-infinite-scroll v-if="searchIsComplete && jobs?.length > 0" :items="jobs" class="overflow-x-hidden"
      :onLoad="handleScroll">
      <v-row class="overflow-x-hidden">
        <v-col cols="12" md="6" v-for="job in jobs" :key="job.id">
          <job-card :job="job"></job-card>
        </v-col>
      </v-row>
    </v-infinite-scroll>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import SearchJ from "../controller/Jsearch.js";
import JobCard from "@/components/JobCard.vue";

const searchInput = ref("");
const loading = ref(false);
const searchIsComplete = ref(false);
const jobs = ref([]);
const actualPage = ref(1);

/* Filters */

const searchTime = ref("all");

const timeOptions = [
  {
    text: "Somente Hoje",
    value: "today",
  },
  {
    text: "Últimos 3 dias",
    value: "3days",
  },
  {
    text: "Ultimos 7 dias",
    value: "week",
  },
  {
    text: "Últimos 30 dias",
    value: "mounth",
  },
  {
    text: "Qualquer período",
    value: "all",
  },
];

const onlyRemoteJobs = ref(false);

const finishSearch = () => {
  searchIsComplete.value = true;
  loading.value = false;
  searchInput.value = "";
};

const searchJob = async () => {
  loading.value = true;
  const result = await SearchJ.search({
    page: 1,
    query: searchInput.value,
    remote_jobs_only: onlyRemoteJobs.value,
    date_posted: searchTime.value,
  });
  jobs.value = result.data;
  finishSearch();
};

const handleScroll = async ({ done }) => {
  actualPage.value++;
  const res = await SearchJ.search({
    page: actualPage.value,
    query: searchInput.value,
    remote_jobs_only: onlyRemoteJobs.value,
    date_posted: searchTime.value,
  });
  jobs.value.push(...res?.data);
  done("ok");
};
</script>

<style scoped>
.v-input :deep(.v-btn__overlay) {
  background: none;
}
</style>
