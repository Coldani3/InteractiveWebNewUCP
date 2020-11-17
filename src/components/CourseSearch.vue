<template>
  <div id="courseSearch" class="fullHeight">
    <div class="parentDiv">
      <div
        class="fas fa-search boxed searchIcon"
        v-on:click="displaySearchResults()"
      ></div>
      <input type="text" class="searchBar" />
    </div>
    <div class="boxed resultsBox" v-if="searching"></div>
  </div>
</template>

<script>
export default {
  el: "#courseSearch",
  name: "CourseSearch",
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
  height: 100%;
  border-left: 0px;
  padding-bottom: 1px;
}

.resultsBox {
  overflow-y: auto;
}
</style>
