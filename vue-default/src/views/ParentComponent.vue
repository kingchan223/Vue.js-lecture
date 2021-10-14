<template>
    <div>
        <button type="button" @click="callChildFunc">parent's click</button>
        <ChildComponent ref="child_component"/>
    </div>
</template>
<script>
import ChildComponent from './ChildComponent';
export default {
    name:'',
    components: {ChildComponent},
    methods: {
        callChildFunc(){
            this.$refs.child_component.$refs.child_btn.click();
        }
    },
}
</script>
<style scoped>
</style>
