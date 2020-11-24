<template>
  <div>
    <Banner />
    <div class="columns">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <h1 class="title">Search for Course</h1>
        <br />
        <a href="ucas.html">Ucas Calculator</a>
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

export default {
  name: "SearchPage",
  components: {
    Banner,
    NavBar,
    CourseSearch
  }
};
</script>
