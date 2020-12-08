<template>
  <a v-bind:href="courseLink" class="link" v-if="visible">
    <div class="box columns mainDiv" id="courseBox">
      <div class="column is-narrow imgDiv">
        <img src="" alt="Image" />
      </div>
      <div class="column">
        <p class="title">{{ courseTitle }}</p>
        <p>{{ courseDescription }}</p>
      </div>
    </div>
  </a>
</template>

<script>
import { eventBus, SearchUpdated } from "../EventBus.js";

export default {
  el: "#courseBox",
  name: "CourseBox",
  props: {
    courseTitle: String,
    courseDescription: String,
    courseImage: String,
    courseLink: String
  },
  data() {
    return {
      visible: true
    };
  },
  created() {
    eventBus.on(SearchUpdated, this.onSearch);
  },
  methods: {
    onSearch(data) {
      console.log("Search: " + data.searchInput);
      if (
        !this.courseTitle
          .toLowerCase()
          .includes(
            data.searchInput.toLowerCase() && data.searchInput.length > 0
          )
      ) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }
  }
};
</script>

<style scoped>
.mainDiv {
  width: 100%;
  margin: 10px;
}

.link {
  width: 100%;
  margin: 0;
}

.imgDiv {
  height: 100%;
}
</style>
