<template>
  <div id="siteBanner" class="columns bannerDiv">
    <div class="column">
      <img
        class="bannerImage"
        height="150"
        src="@/assets/ucp_logo.png"
        alt="logo"
      />
    <!-- </div> -->

    <!-- <div class="loginSection box column is-one-quarter is-narrow" style="padding-top:1.5em"> -->
      <div class="loginSection box" style="padding-top:1.5em">
        <a href="login.html"><img class="far fa-user-circle" /> Student Login</a>
        |
        <a href="login.html"><img class="far fa-user-circle" /> Staff Login</a>
      </div>
    </div>
    <!-- <hr /> -->
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
  max-height: 11em;
  padding-bottom: 5px;
}

.bannerImage {
  max-height: 100%;
  max-width: 66%;
  /* float: right; */
}

.loginSection {
  float: right;
  /* display: inline-block; */
  max-height: 4em;
  max-width: 40em;
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
