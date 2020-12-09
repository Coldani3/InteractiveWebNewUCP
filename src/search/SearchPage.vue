<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <h1 class="title">Search for Course</h1>
        <a href="ucas.html">Ucas Calculator</a>
        <br />
        <a href="contact.html">Don't meet the requirements? Don't worry, contact us for help!</a>
        <br /><br />
        <CourseSearch />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import CourseSearch from "../components/CourseSearch.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  name: "SearchPage",
  components: {
    Banner,
    NavBar,
    CourseSearch
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  }
};
</script>
