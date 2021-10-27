<template>
    <h1>{{title}}</h1>
</template>
<script>
import {inject} from 'vue';
export default {
    setup() {//setup안에 inject를 정의할 수 있다.
        const title = inject('title');
        return {title};
    }
};
</script>






