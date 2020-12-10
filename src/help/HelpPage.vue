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
            <a href="contact.html">Contact us!</a>
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
