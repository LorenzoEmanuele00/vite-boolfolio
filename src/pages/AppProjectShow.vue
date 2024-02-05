<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
            baseUrl: 'http://127.0.0.1:8000'
        };
    },
    created() {
        axios
            .get(`${this.baseUrl}/api/project/${this.$route.params.slug}`)
            .then((resp) => {
                this.project = resp.data.results;
                console.log(resp.data.results)
            });
    },
}
</script>

<template>
    <div class="container">
        <h2 class="my-3">{{project.title}}</h2>
        <h5>Tipo: {{project.type ? project.type.name : 'Nessun Tipo'}}</h5>
        <div class="my-3">
            <h5>Tecnologie: </h5>
            <span v-for="tech in project.technologies" class="badge bg-primary mx-1">{{ tech.name }}</span>
        </div>
        <p>{{project.slug}}</p>
        <p>{{project.description}}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>