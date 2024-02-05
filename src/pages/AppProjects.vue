<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
      return {
          projects: [],
          baseUrl: 'http://127.0.0.1:8000',
          curPage: 1,
          lastPage: 1,
          loading: false,
      };
  },
  created() {
    this.callPage(1);
  },
  methods: {
    callPage(num) {
      this.loading = true;
      axios
        .get(`${this.baseUrl}/api/projects`, {
          params: {
            page: num,
          }
        })
        .then((resp) => {
        this.projects = resp.data.result.data;
        this.lastPage = resp.data.result.last_page;
        console.log(resp)
        console.log(this.curPage, this.lastPage)
      })
      .finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>

<template>
  <div class="container p-3">
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary me-1" @click="callPage(curPage = curPage - 1)" :disabled="curPage === 1">Prev</button>
      <button v-for="num in lastPage" class="btn btn-primary me-1" :class="{'btn-success' : num === curPage}" @click="callPage(num)">{{ num }}</button>
      <button class="btn btn-primary me-1" @click="callPage(curPage = curPage + 1)" :disabled="curPage === lastPage">Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>