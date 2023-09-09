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
            <template v-if="job.job_city">{{ job.job_city }}, </template>
            <template v-if="job.job_state">{{ job.job_state }} -</template> {{ job.job_country }}

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
            <v-btn color="info" variant="elevated" class="ml-2 class rounded-lg" append-icon="mdi-arrow-right">Ver
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

const getDegree = () => {
    for (let required_degree in job?.value.job_required_education) {

        if (job?.value.job_required_education[required_degree] == true) {
            job_degree.value = job_degree.value + required_degree + ', ';
        }
    }

    job_degree.value = job_degree.value.slice(0, -2);

    if (job_degree.value == '') {
        job_degree.value = 'Nenhum grau de escolaridade requerido';
    }
};

console.log(job.value)
onMounted(() => {
    getDegree();
});

</script>

<style scoped>
 .v-chip :deep(.v-chip__content) {
    display: inline-block !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
</style>