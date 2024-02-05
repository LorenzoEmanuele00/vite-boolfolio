<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000'
        };
    },
    created() {
        axios
            .get(`${this.baseUrl}/api/projects`)
            .then((resp) => {
            this.projects = resp.data.result;
        });
    },
    components: { ProjectCard }
}
</script>

<template>
  <div class="container">
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>