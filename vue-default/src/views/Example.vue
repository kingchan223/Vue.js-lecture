<template>
    <div>
        <!-- <img v-bind:src="url" > -->
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">click</button>
    </div>
</template>
<script>
export default {
    name: '',
    components:{},
    data(){
        return{
            url:"http://localhost:8080/img/logo.82b9c7a5.png",
            textValue: ''
        }
    },
    setup(){},
    created(){},
    mounted(){
        
    },
    unmounted(){},
    methods:{}
}
</script>
<style scoped>
</style>
