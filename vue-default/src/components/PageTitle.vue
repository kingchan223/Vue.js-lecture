<template>
    <div>
       <h1 class="page-title">{{title}}</h1>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String, 
            default:"This is Page's Title"
        }
    }    
}
</script>
<style scoped>
.page-title{
    padding-left:5px;
    border-left: 3px solid red;
    text-align:left;
}
</style>
