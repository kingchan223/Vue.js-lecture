<template>
    <div>
        <h2>Count:{{count}}</h2>
        <button type="button" @click="increment">increment</button>
        <br>
        <h1>Cart :{{cartCount}}</h1>
        <h1>Product A Count:{{productACount}}</h1>
    </div>
</template>
<script>
export default {
    computed:{
        count(){
            return this.$store.state.count;//computed로 state변경 감지
        },
        cartCount(){
            return this.$store.getters.cartCount;
        }
        ,
        productACount(){
            return this.$store.getters.productACount;
        }
    },
    methods:{
        increment(){
            this.$store.commit('increment');
        }
    }
}
</script>
<style scoped>
</style>
