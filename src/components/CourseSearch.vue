<template>
  <div id="courseSearch" class="fullHeight">
    <div class="parentDiv" v-on:click="displaySearchResults()">
      <div class="fas fa-search boxed searchIcon"></div>
      <input type="text" class="searchBar" />
    </div>
    <div class="boxed resultsBox" v-if="searching">
      <CourseBox
        course-title="Sample Text"
        course-description="Lorem ipsum"
        course-image=""
        course-link="index.html"
      />
      <CourseBox
        course-title="Sample Text"
        course-description="Lorem ipsum"
        course-image=""
        course-link="index.html"
      />
      <CourseBox
        course-title="Sample Text"
        course-description="Lorem ipsum"
        course-image=""
        course-link="index.html"
      />
      <CourseBox
        course-title="Sample Text"
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
  margin: 0;
  font-size: 35px;
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
  height: 35px;
  border-left: 0px;
  padding-bottom: 1px;
  width: 100%;
}

.resultsBox {
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 40px;
  background-color: gainsboro;
  height: 30em;
  padding-right: 17px;
  border-top: 0;
}
</style>
