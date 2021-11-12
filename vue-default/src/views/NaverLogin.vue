<template>
  <div id="naverIdLogin"></div>
</template>
<script>
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
                
                let email = this.naverLogin.user.getEmail();
                if(email==undefined || email==null){
                    alert("이메일 정보는 필수입니다. 동의해주세요");
                    this.naverLogin.reprompt();
                }
            }
        })
  },
  methods: {

      getKakaoAccount(){//로그인 성공 후, 동작하는 메소드
          window.Kakao.API.request({
              url:"/v2/user/me",
              success:(res)=>{
                  const kakao_account  =  res.kakao_account;
                  const nickname = kakao_account.profile.nickname;//카카오 닉네임
                  const email = kakao_account.email;//카카오 이메일

                  console.log("nickname", nickname);
                  console.log("email", email);
                  this.$store.commit('user',kakao_account)
                  alert("로그인 성공");
              },
              fail:(error)=>{
                  //this.$router.push("/errorPage");
                  console.log(error);
              }
          })
      }
  },
}
</script>
