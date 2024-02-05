<script>
import axios from 'axios';

export default {
    props: {
        project: Object,
    },
    data() {
        return {

        }
    },
    computed: {
        reducedText() {
            if (this.project.description && this.project.description.length > 200) {
                return this.project.description.substring(0, 200) + "...";
            }
            return this.project.description;
        },
    }
}
</script>

<template>
    <div class="card h-100">
        <div class="d-flex align-items-center justify-content-center title_box">
            <h3 class="p-2 text-center">{{project.title}}</h3>
        </div>
        <hr>
        <p class="p-2">{{reducedText}}</p>
        <router-link :to="{name: 'ProjectShow', params: {slug: project.slug}}" class="text-center my-3">Scopri di più</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .title_box {
        height: 120px;
    }
</style>