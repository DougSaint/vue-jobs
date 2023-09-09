<template>
    <v-footer app color="background">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" offset-sm="3" class="text-center">
                    <div>
                        &copy; {{ currentYear }} Doug
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
  
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
};
</script>
  
<style scoped>
/* Estilos personalizados para o rodapé, se necessário */
</style>
  