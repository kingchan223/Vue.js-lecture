<template>
<div>
    <h2>Calculator</h2>
    <div>
        <input type="text" v-model.number="state.num1">
        <span> + </span>
        <input type="text" v-model.number="state.num2">
        <span> = </span>
        <span>{{state.result}}</span>
    </div>
</div>
</template>
<script>
import {reactive, computed} from 'vue';
export default {
    name: 'calculator',
    components:{},
    setup(){
        let state = reactive({
            num1:0,
            num2:0,
            //computed를 이용해서 num1, num2의 변경사항을 감지할 수 있다.
            result: computed(()=>state.num1+state.num2)
        });

        return{
            state,
        }
    },
}
</script>
