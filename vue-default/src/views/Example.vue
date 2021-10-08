<template>
    <div>
        <input type="text" v-model='name'/>
        <input type="text" v-model.number='age'/>
        <input type="text" v-model='job'/>
        <button type="button" @click="saveUserinfo">SAVE</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            age:0,
            job:'',
        }
    },
    methods: {
        saveUserinfo(){
            if(this.name == ''){
                // return alert('이름을 입력하세요.')
                return this.$swal('사용자 이름을 입력하세요.')
            }
            if(this.age == '' || this.age == 0){
                return this.$swal('나이를 입력하세요.')
            }

            const userInfo = {
                name: this.name,
                age : this.age,
                job: this.job
            }
            const r = this.saveData(userInfo);
            if(r == 'S'){
                alert("사용자 정보가 생성되었습니다.");
            }
            this.saveData(userInfo);
        },
        saveData(userInfo){//서버로 데이터를 보냈다고 가정.
            console.log(userInfo);
            const r = 'S';
            return r;
        }
    },
}
</script>
<style scoped>
</style>