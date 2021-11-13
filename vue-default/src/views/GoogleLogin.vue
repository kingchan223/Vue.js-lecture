<template>
    <div>
        <div id="google-signin-btn"></div>
    </div>
</template>
<script>

export default {
  mounted() {
        window.gapi.singin2.render("google-signin-btn", {onsuccess:this.onsignIn});
  },
  methods: {
      onSignIn(googleUser){
          const profile = googleUser.getBasicProfile();
          console.log("ID :"+profile.getId());
          console.log("Full name :"+profile.getName());
          console.log("Given Name :"+profile.getGivenName());
          console.log("Family Name :"+profile.getFamilyName());
          console.log("Image URL :"+profile.getImageUrl());

          const id_token = googleUser.getAuthToken().id_token;
          console.log("ID token :"+id_token);
      }
  },
}
</script>
