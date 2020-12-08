<template>
  <div id="courseSearch" class="fullHeight">
    <div class="parentDiv">
      <div v-on:click="displaySearchResults()">
        <div class="fas fa-search boxed searchIcon"></div>
      </div>
      <input type="text" id="searchBar" class="searchBar" />
    </div>
    <div class="boxed resultsBox" v-bind:style="{ height: searchResultsHeight }">
      <CourseBox
        course-title="Jim John's Jamboree"
        course-description="Lorem ipsum"
        course-image=""
        course-link="index.html"
      />
      <CourseBox
        course-title="Lux"
        course-description="Lorem ipsum"
        course-image=""
        course-link="index.html"
      />
      <CourseBox
        course-title="Juj"
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
import { eventBus, NavBarUpdate, SearchUpdated } from "../EventBus.js";

export default {
  el: "#courseSearch",
  name: "CourseSearch",
  components: {
    CourseBox
  },
  data() {
    return {
      searching: true,
      searchResultsHeight: "10em",
      courses: {
        
      }
    };
  },
  methods: {
    displaySearchResults() {
      // if (document.getElementById("searchBar").value.length > 0) {
      this.searchResultsHeight = "30em";
      this.searching = true;
      eventBus.emit(SearchUpdated, {
        searchInput: document.getElementById("searchBar").value
      });
      eventBus.emit(NavBarUpdate);
      //}
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
