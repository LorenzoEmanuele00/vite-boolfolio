<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
            baseUrl: 'http://127.0.0.1:8000',
            loading: false,
        };
    },
    created() {
        this.loading = true;
        axios
            .get(`${this.baseUrl}/api/project/${this.$route.params.slug}`)
            .then((resp) => {
                if(resp => 'success' === true) {
                    this.project = resp.data.results;
                    // console.log(this.project);
                } else {
                    this.$router.push({name: 'notFound'});
                }
            })
            .finally(() => {
                this.loading = false;
            });
    },
}
</script>

<template>
    <div class="container">
        <div v-if="loading === true">
            CARICAMENTO....
        </div>
        <div v-else>
            <h2 class="my-3">{{project.title}}</h2>
            <h5>Tipo: {{project.type ? project.type.name : 'Nessun Tipo'}}</h5>
            <div class="my-3">
                <h5>Tecnologie: </h5>
                <span v-for="tech in project.technologies" class="badge bg-primary mx-1">{{ tech.name }}</span>
            </div>
            <p>{{project.slug}}</p>
            <p>{{project.description}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>