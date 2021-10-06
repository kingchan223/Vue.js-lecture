<template>
    <div>
        <input type="text" v-model="lastName">
        <input type="text" v-model="firstName">
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            firstName : "cobain",
            lastName : "kurt",
        }
    },
    computed:{
        fullName(){ // fullName안에 사용된 data가 바뀌는지를 항상 감시하고 있다.
            return this.firstName + this.lastName;
        }
    },
}
</script>
<style scoped>
</style>


