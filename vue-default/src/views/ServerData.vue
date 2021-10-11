<template>
    <div>
        <button type="button" @click="getProductList">click</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            productList:[]
        }
    },
    methods: {
        async getProductList(){
            this.productList = await this.api('https://77987483-1584-459c-8b5b-8d46c9db701a.mock.pstmn.io/productList','get',{});
            console.log(this.productList);
        },
        async api(url, method, data){
            return (await axios({
                method:method,
                url:url,
                data:data
            }).catch(e=>{
                console.log(e);
            })).data;
        }
    },
}
</script>
<style scoped>
</style>