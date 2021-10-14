<template>
    <div>
       <page-title :title="title"/>
       <ChildComponent :likes="23" :isOk="isOk" :commentIds="commentIds" :author="author"/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle';
import ChildComponent from './ChildComponent';
export default {
    name:'',
    components: {'page-title':PageTitle, ChildComponent},
    data(){
        return{
            title:"Page's Title from Parent's Component",
            isOk:true,
            commentIds:[1, 2, 3, 4],
            author:{name:'shii', company:'show-box'}
        }
    },
    methods: {},
}
</script>
<style scoped>
</style>
