<template>
    <div>
        <input type="text" v-model="keyword"/>
        <button tpye="button" :disabled="keyword==''" @click="search">click</button>
        <h1 :class="{name, nameHide}" > 이름은 {{name}} </h1>
        <h1 :class="{studentID, idHide}" > 학번은 {{studentID}} </h1>
        <h1 :class="{major, majorHide}" > 전공은 {{major}} </h1>
        <h1 :class="{grade, gradeHide}" > 학년은 {{grade}} 입니다! </h1>
        <h1 :class="{imageSub, imageSubHide}" > {{imageSub}} </h1>
        <img :src="imageURL">
        <h1 :class="{github, githubHide, 'hover-class':isHover}" @mouseover="hoverYes" @mouseleave="hoverNo"><a v-bind:href="link">{{github}}</a></h1>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            name:"이찬영",
            studentID:"60172373",
            major:"응용소프트웨어",
            grade:"3학년",
            imageURL:"profileImage.jpg",
            imageSub:"늠름한 나의 모습!",
            link:"https://github.com/kingchan223",
            github:"별거 없는 저의 GITHUB (click시 페이지로 이동)",
            isHover:false,
            nameHide:false,
            idHide:false,
            majorHide:false,
            gradeHide:false,
            imageHide:false,
            imageSubHide:false,
            githubHide:false,
            keyword:"",
        }
    },
    methods: {
        hoverYes(){
            console.log("Yes hover");
            this.isHover = true;
        },
        hoverNo(){
            console.log("No hover");
            this.isHover = false;
        },
        search(){
            if(this.keyword==="name"){
                this.idHide=true;
                this.majorHide=true;
                this.gradeHide=true;
                this.imageHide=true;
                this.imageSubHide=true;
                this.githubHide=true;
            }
            else if(this.keyword==="studentID"){
                this.nameHide=true;
                this.majorHide=true;
                this.gradeHide=true;
                this.imageHide=true;
                this.imageSubHide=true;
                this.githubHide=true;
            }
        }

    },
}
</script>
<style scoped>
div{
    text-align: left;
    padding-left: 20px;
}
h1{
    padding-left: 7px;
}
a{
    text-decoration: none;
    color:black;
}
.studentID{
    border-left: 3px solid yellow;
}
.name{
    border-left: 3px solid red;
}
.major{
    border-left: 3px solid greenyellow;
}
.grade{
    border-left: 3px solid rgb(40, 40, 231);
}
.imageSub{
    border-left: 3px solid rgb(123, 40, 231);
}
.github{
    border-left: 3px solid rgb(14, 217, 253);
}
.hover-class{
    background-color:yellow;
}
.hide{
    display:none;
}
</style>
