<template>
    <div>
     <button type="button" @click="childFunc" ref="child_btn">child's click</button>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
        }
    },
    methods: {
        childFunc(){
            alert('부모 컴포넌트에서 직접 발생시킨 이벤트.');
        }
    },
}
</script>
<style scoped>
</style>
