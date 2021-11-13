<template>
    <div>
    <div id="naverIdLogin"></div>
        <button type="button" @click="logout">LOGDOUT</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data(){
      return {
          naverLogin:null,
      }
  },
  mounted() {
        this.naverLogin = window.naver.Auth.loginWithNaverId(
            {
                clientId : "hjyPLoTr9SF9kVux6I8F",//개발자 센터에 등록한 Client ID
                callbackUrl:"http://localhost:8080/naverlogin",//개발자 센터에 등록한 callback Url
                isPopup:false,//
                loginButton:{color:"green", type:3, height:60}//로그인 버튼의 타입을 지정
            }
        );
        //설정정보를 초기화하고 연동을 준비
        this.naverLogin.init();
        this.naverLogin.getLoginStatus((status)=>{
            if(status){
                console.log(status);
                console.log(this.naverLogin.user);
                
                //필수적으로 받아야 하는 프로필 정보가 있다면 callback처리 시점에 체크
                let email = this.naverLogin.user.getEmail();
                if(email==undefined || email==null){
                    alert("이메일 정보는 필수입니다. 동의해주세요");
                    //사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함
                    this.naverLogin.reprompt();
                    return;
                }
            }else{
                console.log("callback 처리에 실패하였습니다.");
            }
        });
  },
  methods: {
      logout(){
          const accessToken = this.naverLogin.accessToken.accessToken;
          const url = `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=hjyPLoTr9SF9kVux6I8F&client_secret=pe5vy3XQKj&access_token=${accessToken}&service_provider=NAVER`
          
          axios.get(url).then((res) =>{
              console.log(res.data);
          });
      }
  },
}
</script>
