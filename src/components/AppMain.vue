<script>
import axios from 'axios';

export default {
  data() {
    return {
        projects: [],
        baseUrl: 'http://127.0.0.1:8000'
    }
  },
  created() {
    axios
    .get(`${this.baseUrl}/api/projects`)
    .then((resp) => {
        console.log(resp);
    })
  }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>