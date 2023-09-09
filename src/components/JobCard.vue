<template>
    <v-card class="elevation-12" color="primary">
        <v-card-title>
            <div class="d-flex">
                <h3 class="headline default_text">
                    {{ job.employer_name }}
                </h3>
                <v-spacer></v-spacer>
                <v-tooltip :text="job_degree">
                    <template v-slot:activator="{ props }">
                        <v-icon v-bind="props">mdi-school</v-icon>
                    </template>
                </v-tooltip>
            </div>

        </v-card-title>
        <v-card-subtitle class="subheading default_text">
            <div class="flex">
                <div>
                    <template v-if="job.job_city">{{ job.job_city }}, </template>
                    <template v-if="job.job_state">{{ job.job_state }} -</template>
                    {{ job.job_country }}
                </div>
                <v-spacer></v-spacer>
                <div>
                    <template v-if="job.job_posted_at_datetime_utc">
                        Publicado em: {{ formatDate(job.job_posted_at_datetime_utc) }}
                    </template>

                </div>

            </div>

        </v-card-subtitle>
        <v-card-text>
            <p>
                {{ job.job_publisher }} | {{ job.job_is_remote ? 'Remoto' : 'Presencial' }}
            </p>
        </v-card-text>
        <div class="px-4 grid grid-cols-4 md:grid-cols-5">
            <template v-for="skill in job.job_required_skills">
                <v-tooltip>
                    <template v-slot:activator="{ props }">
                        <v-chip class="ma-1 default_text" v-bind="props" color="background" text-color="white" small>
                            {{ skill }}
                        </v-chip>
                    </template>

                    <span>{{ skill }}</span>


                </v-tooltip>


            </template>

            <template v-if="!job.job_required_skills">
                <p class="text-secondary " style="white-space: nowrap; height: 64px;">Nenhuma habilidade cadastrada</p>
            </template>
        </div>
        <v-card-actions>
            <v-btn :href="`job-details/${job.job_id}`" color="background" variant="outlined" class="ml-2 class rounded-lg"
                append-icon="mdi-arrow-right">Ver
                detalhes</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
const props = defineProps(['job'])
const job = ref(props.job);
let job_degree = ref('');
import dateFormater from '../utils/DateFormater.js';
import degreeFormmater from '../utils/DegreeFormater';

const formatDate = (dateTime) => dateFormater(dateTime);

const getDegree = () => {
    const degree = degreeFormmater(job.value.job_required_education);
    const formattedDegrees = degree.filter((item) => item.value).map((item) => item.name).join(', ');
    if (formattedDegrees) {
        job_degree.value = formattedDegrees;
    } else {
        job_degree.value = 'Não informado';
    }
};

onMounted(() => {
    getDegree();
});

</script>

<style scoped>
.v-chip {
    max-width: 100%;
    display: block;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>