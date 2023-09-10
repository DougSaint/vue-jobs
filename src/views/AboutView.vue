<template>
    <v-container>
        <v-card class="mt-10" color="primary" elevation="10">
            <v-card-title class="main-text ">
                Está com problemas para pesquisar?
            </v-card-title>
            <v-card-subtitle>
                <h2 class="sub-text text-center">
                    Talvez meus créditos com a API tenham expirado.
                </h2>

                <v-img src="https://media.tenor.com/JhuvsD0IxDYAAAAM/tokyojns-stitch.gif"
                    class="sad-stitch rounded-xl mx-auto" />


                <h2 class="text-h5 text-center sub-text">
                    Mas não se preocupe, você pode resolver isso!
                </h2>


                <p class="text-center my-2 content-text">Mas não se preocupe, basta você acessar este
                    <a href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/" class="text-accent underline"
                        target="_blank">link</a>
                    e gerar uma nova
                    chave da API.
                </p>
                <p class="text-center content-text">Para gerar basta seguir o seguinte passo a passo</p>
                <p class="text-center content-text">Clicar em <span class="text-accent">"Subscribe to Test"</span></p>
                <p class="text-center content-text">Escolher seu usúario</p>

                <p class="text-center content-text">Clicar em subscribe no plano<span class="text-accent"> BASIC </span></p>
                <p class="text-center content-text">Depois é só confirmar e voltar neste <a
                        href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/" class="text-accent underline"
                        target="_blank"> Link </a></p>
                <p class="text-center content-text"> E copiar a chave que está no campo <span
                        class="text-accent">"X-RapidAPI-Key"</span></p>
                <p class="text-center content-text">Agora é só preencher o campo abaixo</p>

                <v-row justify="center mb-5">
                    <v-col cols="12" sm="8" md="6" class="offset-md-1">
                        <v-text-field v-model="apiKey" label="Nova chave da API" variant="outlined" density="compact"
                            hide-details append-inner-icon="mdi-content-paste" @click:append-inner="pasteContent">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-btn @click="updateApiKey" color="accent" class="mx-auto" block>
                            Atualizar Chave
                        </v-btn>
                    </v-col>

                </v-row>

            </v-card-subtitle>
        </v-card>
    </v-container>
</template>
  
<style scoped>
.main-text {
    font-size: 1rem !important;
    text-align: center !important;
}

.sub-text {
    font-size: 0.9rem !important;
    text-align: center !important;
}

.content-text {
    white-space: pre-line !important;
    margin: 2px;
}

.sad-stitch {
    max-width: 300px;

}

@media screen and (max-width: 600px) {
    .main-text {
        font-size: 1.1rem !important;
    }

    .sub-text {
        font-size: 0.8rem !important;
    }
}
</style>
  
<script setup>
import { hi } from 'date-fns/locale';
import { ref } from 'vue';

const apiKey = ref('');

function updateApiKey() {
    localStorage.setItem('apiKey', apiKey.value);
    alert('Chave atualizada com sucesso!');
}

function pasteContent() {
    try {
        navigator.clipboard.readText().then(text => {
            apiKey.value = text;
        });
    } catch (e) {
        alert('Não foi possível colar o conteúdo')
    }
}
</script>
