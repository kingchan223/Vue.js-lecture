<template>
    <div>
        <button type="button" @click="changeData">
            change child's data
        </button>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            msg:"자식 컴포넌트로 부터 보내는 메시지"
        }
    },
    methods: {
        changeData(){
            this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다.'
        }
    },
}
</script>
<style scoped>
</style>
