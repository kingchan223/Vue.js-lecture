<template>
    <div>
        <input type="text" v-model.number="x1"/>+
        <input type="text" v-model.number="x2"/>=
        <input type="text" v-model="y"/>
        <!-- <button type="button" @click="plus">cal</button> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            x1:0,
            x2:0,
        }
    },
    // watch:{//data 필드에 정의된 값만 사용가능 // 계속 보고있기 때문에 많은 자원을 소모하기도 한다.
    //     x1(){//x1의 변경사항을 계속보고 있다. 하여 x1이 변경되면 실행된다.
    //         this.y = this.x1 + this.x2;
    //     },
    //     x2(){//x2의 변경사항을 계속보고 있다. 하여 x2이 변경되면 실행된다.
    //         this.y = this.x1 + this.x2;
    //     }
    // }
    computed: {
        y(){
            return this.x1 + this.x2;
        }
    }
}
</script>
<style scoped>
</style>


