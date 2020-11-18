<template>
  <div id="courseSearch" class="fullHeight">
    <!-- <h1>Search for Course</h1> -->
    <div class="parentDiv">
      <div
        class="fas fa-search boxed searchIcon"
        v-on:click="displaySearchResults()"
      ></div>
      <input type="text" class="searchBar" />
    </div>
    <div class="boxed resultsBox" v-if="searching">
      <CourseBox
        course-description="Lorem ipsum"
        course-image=""
        course-link="index.html"
      />
    </div>
  </div>
</template>

<script>
import CourseBox from "../components/CourseBox.vue";

export default {
  el: "#courseSearch",
  name: "CourseSearch",
  components: {
    CourseBox
  },
  data() {
    return {
      searching: false
    };
  },
  methods: {
    displaySearchResults() {
      this.searching = true;
    }
  }
};
</script>

<style scoped>
.parentDiv {
  font-size: 0;
  display: flex;
  margin-right: 40px;
}

.searchIcon:before {
  padding: 0;
  margin: 0;
}

.searchIcon {
  padding: 0;
  margin: 0;
  font-size: 25px;
}

.searchIcon:hover {
  cursor: pointer;
}

.boxed {
  border: 1px solid black;
  border-collapse: collapse;
  margin-bottom: 0;
  padding-bottom: 0;
}
.borderRight {
  border-right: 1px solid black;
}

.searchBar {
  border-radius: 0;
  border-width: 1px;
  height: 25px;
  border-left: 0px;
  padding-bottom: 1px;
  width: 100%;
}

.resultsBox {
  overflow-y: auto;
}
</style>
