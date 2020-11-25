<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow fullHeight">
        <NavBar />
      </div>
      <div class="column">
        <div class="box">
          <h1 class="title">Need Help?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            explicabo porro atque illum, mollitia deserunt beatae iure enim
            ipsum, alias, aspernatur labore! Consectetur totam nemo officia
            repudiandae ducimus ipsam exercitationem!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  name: "HelpPage",
  components: {
    Banner,
    NavBar
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  }
};
</script>
