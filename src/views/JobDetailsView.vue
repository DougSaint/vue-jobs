<template>
    <v-card class="mx-auto mt-5" max-width="900px">
        <v-card-title>
            <v-row>
                <v-col cols="12" md="8">
                    <v-skeleton-loader v-if="!jobData?.job_title" width="150px" type="subtitle"></v-skeleton-loader>
                    <h2 class="text-primary mt-3 text-2xl">{{ jobData?.job_title }}</h2>
                </v-col>
            </v-row>
        </v-card-title>

        <v-card-subtitle>
            <v-row>
                <v-col cols="2" md="1">
                    <v-skeleton-loader v-if="!jobData?.job_title" width="50px" height="50px"
                        type="image"></v-skeleton-loader>
                    <v-img v-if="jobData?.employer_logo && jobData?.job_title" :src="jobData?.employer_logo"
                        class="rounded-full" width="50px" height="50px" />
                    <v-img v-if="!jobData?.employer_logo && jobData?.job_title" src="../assets/no-image-company.jpg"
                        class="rounded-full" width="50px" height="50px" />
                </v-col>
                <v-col cols="10" md="2">
                    <v-skeleton-loader v-if="!jobData?.employer_name" width="150px" type="text"></v-skeleton-loader>
                    <template v-if="jobData?.job_is_remote">
                        <v-icon color="primary">mdi-airplane-takeoff</v-icon>
                        <span class="ml-2">Remoto</span>
                    </template>

                    <template v-else>
                        <span v-if="jobData?.job_city" class="ml-2 pt-2">{{ jobData?.job_city }}</span> <span
                            v-if="jobData?.job_state">{{ jobData?.job_state }}</span>
                    </template>

                    <h3 class="text-primary mt-3 text-md">{{ jobData?.employer_name }}</h3>
                    <span v-if="jobData?.job_posted_at_datetime_utc">
                        Publicado em: {{ formatDate(jobData?.job_posted_at_datetime_utc) }}
                    </span>
                </v-col>
            </v-row>
        </v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-skeleton-loader v-if="!formattedText" type="paragraph"></v-skeleton-loader>
                    <div v-html="formattedText"></div>
                </v-col>
                <v-col cols="12" md="4">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left text-sm">
                                    Graduação
                                </th>
                                <th class="text-center text-sm">
                                    Requirida
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="degree in jobDegree" :key="degree.id">
                                <td class="text-xs" style="max-width: 100px;">{{ degree.name }}</td>
                                <td class="text-xs text-center" style="max-width: 50px;">
                                    <v-icon color="green" v-if="degree.value">mdi-check</v-icon>
                                    <v-icon color="red" v-else>mdi-close</v-icon>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                    <div class="border border-slate-900"></div>
                    <v-btn color="primary" class="mt-3" block :href="jobData?.job_apply_link">Quero me candidatar</v-btn>

                    <section class="mt-3">
                        <template v-if="jobData?.job_required_skills">
                            <h3 class="text-primary text-md">Habilidades requeridas</h3>
                            <v-chip-group>
                                <v-chip v-for="skill in jobData?.job_required_skills" :key="skill" color="primary"
                                    label="skill">
                                    {{ skill }}
                                </v-chip>
                            </v-chip-group>
                        </template>
                        <template v-if="jobData?.job_required_skills === null">
                            <p class="text-center text-accent"> Nenhuma habilidade cadastrada </p>
                        </template>
                        <template v-if="!jobData?.job_title">
                            <div class="skeleton-chip-group flex align-start w-full">
                                <v-skeleton-loader v-for="n in 2" :key="n" width="150px" type="chip" />
                            </div>
                        </template>
                    </section>
                </v-col>
            </v-row>
        </v-card-text>

    </v-card>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SearchJ from '../controller/Jsearch.js';
import dateFormater from '../utils/DateFormater.js';
import degreeFormmater from '../utils/DegreeFormater';

const id = ref(null);
const route = useRoute();
const jobData = ref({});
const jobDegree = ref([]);
const formattedText = ref('');
const formatDate = (dateTime) => dateFormater(dateTime);
function formattedJobDescription(string) {
    return string.replace(/\n/g, '<br>');
}
onMounted(async () => {
    id.value = route.params.id;
    const result = await SearchJ.getJobDetails(id.value);
    jobData?.value = result.data[0];
    jobDegree.value = degreeFormmater(jobData?.value?.job_required_education)
    formattedText.value = formattedJobDescription(jobData?.value?.job_description);
});

</script>
  