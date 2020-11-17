<template>
  <div>
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-one-fifth"></div>
      <div class="column is-three-fifths loginDiv">
        <LoginBox />
      </div>
      <div class="column is-one-fifth"></div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import LoginBox from "../components/LoginBox.vue";

export default {
  name: "LoginPage",
  components: {
    Banner,
    LoginBox
  }
};
</script>

<style scoped>
.loginDiv {
  padding-top: 100px;
}
</style>
