<template>
    <div>
        <p>name:이름, studentID:학번, major:전공, grade:학년, wanttolearn:배우고 싶은 것, project:만들고 싶은 프로젝트. 검색해보세요! </p>
        <input type="text" v-model="keyword"/>
        <button tpye="button" :disabled="keyword==''" @click="search">click</button>
        <button @click="all">전체보기</button>
        <br>
        <br>
        <img :class="image.k" src="./my.png" alt="profileImage" v-show="image.show">
        <div :key="'profile'+i" v-for="(profile, i) in showProfileList">
            <h3 :class="profile.k" @mouseover="hoverYes" @mouseleave="hoverNo">{{profile.sub}}{{profile.v}}</h3>
        </div>
        <a :href="github.v" v-show="github.show">
            <h3 :class="github.k" v-show="github.show" >{{github.sub}}</h3>
        </a>
    </div>
</template>
<script>
export default {
    name:'',
    computed:{
        showProfileList(){
            return this.profileList.filter((p)=>p.show===true)
        }
    },
    data(){
        return{
            url:"my.png",
            keyword:"",
            profileList:[
                {k:"name",sub:"이름은 ", v:"이찬영", show:true},
                {k:"studentID",sub:"학번은 ", v:"60172373", show:true},
                {k:"major",sub:"전공은 ", v:"응용소프트웨어", show:true},
                {k:"grade",sub:"학년은 ",v:"3학년", show:true},
                {k:"wanttolearn",sub:"수업을 통해 배우고 싶은 것: ",v:"실제 프로젝트에 적용할 수 있는 VUE의 기능들", show:true},
                {k:"project",sub:"만들고 싶은 프로젝트: ",v:"여행지 추천, 저장 사이트", show:true},
            ],
            github:{k:"github",sub:"깃허브 링크(click!)", v:"https://github.com/kingchan223", show:true},
            image:{k:"image", show:true}
        }
    },
    methods: {
        search(){
                for(var i=0; i<this.profileList.length; i++){
                    if(this.profileList[i].k===this.keyword){
                        this.profileList[i].show = true;
                        continue;
                    }
                    this.profileList[i].show = false;
                }
                if(this.keyword==="github"){
                    this.github.show = true;
                }
                else{
                    this.github.show = false;
                }
                if(this.keyword==="image"){
                    this.image.show = true;
                }
                else{
                    this.image.show = false;
                }
        },
        all(){
                for(var j=0; j<this.profileList.length; j++)
                    this.profileList[j].show = true;
                this.github.show = true;
                this.image.show = true;
            }
            
    }
}

</script>
<style scoped>
div{
    text-align: left;

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
.project{
    border-left: 3px solid rgb(246, 88, 149);
}
.wanttolearn{
    border-left: 3px solid rgb(183, 88, 246);
}
.github{
    border-left: 3px solid rgb(14, 217, 253);
}
.hide{
    display:none;
}
img{
    width:250px;
    height:350px;
    border-radius:10px;
}
</style>
