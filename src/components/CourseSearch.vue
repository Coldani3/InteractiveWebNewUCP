<template>
  <div id="courseSearch" class="fullHeight">
    <div class="boxed">
      <i class="fas fa-search fa-2x borderRight"></i>
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
  }
};
</script>

<style scoped>
i {
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
}

.resultsBox {
  overflow-y: auto;
}
</style>
