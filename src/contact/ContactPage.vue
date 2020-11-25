<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow fullHeight">
        <NavBar />
      </div>
      <div class="column">
        <div class="box">
          <h1 class="title">Contact Us!</h1>
          <h2 class="subtitle">Telephone:</h2>
          <p>12345 678910</p>
          <br />
          <h2 class="subtitle">Email:</h2>
          <p>support@peterborough.ac.uk</p>
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
  name: "ContactPage",
  components: {
    Banner,
    NavBar
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  }
};
</script>
