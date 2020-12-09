<template>
  <div id="siteBanner" class="bannerDiv">
    <img
      class="bannerImage"
      height="150"
      src="@/assets/ucp_logo.png"
      alt="logo"
    />

    <div class="loginSection box">
      <a href="login.html"><img class="far fa-user-circle" /> Student Login</a>
      |
      <a href="login.html"><img class="far fa-user-circle" /> Staff Login</a>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  el: "#siteBanner",
  name: "Banner"
};
</script>

<style scoped>
.bannerDiv {
  width: 100%;
  height: 150px;
  padding-bottom: 5px;
}

.bannerImage {
  max-height: 100%;
  max-width: 66%;
}

.loginSection {
  float: right;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

hr {
  margin-top: 0;
  margin-bottom: 0;
  background-color: darkslategray;
  height: 1px;
  border-width: 1px;
}
</style>
