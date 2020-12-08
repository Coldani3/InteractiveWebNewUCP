<template>
  <div id="courseSearch" class="fullHeight">
    <div class="parentDiv">
      <div v-on:click="displaySearchResults()">
        <div class="fas fa-search boxed searchIcon"></div>
      </div>
      <input type="text" id="searchBar" class="searchBar" />
    </div>
    <div
      class="boxed resultsBox"
      v-bind:style="{ height: searchResultsHeight }"
    >
      <CourseBox
        v-for="{name, description, image, link, ucasPoints} in courses"
        v-bind:key="name"
        :title="name"
        :description="description"
        :image="image"
        :link="link"
        :ucas-points="ucasPoints"
      />
      <!-- <CourseBox
        v-bind:title="name"
        v-bind="data"
      /> -->
      <!--<CourseBox
        title="Jim John's Jamboree"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />
      <CourseBox
        title="Lux"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />
      <CourseBox
        title="Juj"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />
      <CourseBox
        title="Sample Text"
        description="Lorem ipsum"
        image=""
        link="index.html"
      />-->
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
      courses: [
        {
          name: "BSc (Hons) Accounting and Finance",
          description:
            "This course includes a wide range of skills identified by both employers and the Association of Chartered Certified Accountants (ACCA) as being important for accountancy and finance graduates in the 21st century.",
          ucasPoints: 100,
          link: "index.html",
          image: ""
        },
        {
          name: "BA (Hons) Criminology",
          description:
            "Are you interested in the problem of crime in contemporary societies? If so, our Criminology course may be for you. As a Criminology student, you will investigate the nature of crime and criminality as well as studying societies response through the criminal justice system. You’ll learn about the social and personal impacts of crime and what it means to be a victim of crime.",
          ucasPoints: 110,
          link: "index.html",
          image: ""
        }
      ]
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
