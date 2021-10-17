<template>
    <div>
        <button type="button" @click="showData">
            부모 버튼
        </button>
        <ChildComponent ref="child_component"/>
    </div>
</template>
<script>
import ChildComponent from './ChildComponent';
export default {
    name:'',
    data(){
        return{
            parentMsg:'',
        }
    },
    components: {ChildComponent},
    computed: {
        msg(){
            return this.$refs.child_component.msg;
        }
    },
    methods: {
        showData(){
            alert(this.msg);
        }
    },
}
</script>
<style scoped>
</style>
