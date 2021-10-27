<template>
    <div>
        <CompositionAPIInject />
    </div>
</template>
<script>
import {provide} from 'vue';
import CompositionAPIInject from './CompositionAPIInject';
export default {
    components: {CompositionAPIInject},
    setup() {//setup안에 provide를 정의할 수 있다.
        provide('title', 'Vue.js 프로젝트')
    }
};
</script>

