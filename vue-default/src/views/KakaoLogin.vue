<template>
  <div>
      <a id="custom-login-btn" @click="kakaoLogin()">
        <img src="../assets/kakao_login_btn.png" witdh="222">
      </a>
      <button type="button" @click="kakaoLogout()">카카오 로그아웃</button>
  </div>
</template>
<script>
export default {
  components: {},
  data(){
      return {
          code:"",
      }
  },
  mounted() {
      //Kakao.init("16fc9d45692ac8322f40665c6421f311");
      //Kakao.isInitialized();
      //this.KakaoLogout();
  },
  methods: {
      kakaoLogin(){
        window.Kakao.Auth.login({
            scope:"profile_nickname, account_email",//카카오에서 설정한 동의항목과 일치해야한다.
            success:this.getKakaoAccount,//로그인 성공 후, 동작하는 메소드
        });
      },
      kakaoLogout(){
        if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            return;
        }
        window.Kakao.Auth.logout((response)=>{
            console.log("access token",window.Kakao.Auth.getAccessToken());
            console.log("log out", response);
        });
      },
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
