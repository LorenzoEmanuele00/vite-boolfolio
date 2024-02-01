<script>
import axios from 'axios';

export default {
    props: {
        project: Object,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="card h-100">
        <div class="d-flex align-items-center justify-content-center title_box">
            <h3 class="p-2 text-center">{{project.title}}</h3>
        </div>
        <hr>
        <p class="p-2">{{project.description}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .title_box {
        height: 120px;
    }
</style>