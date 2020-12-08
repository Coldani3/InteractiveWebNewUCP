<template>
  <a v-bind:href="link" class="link" v-if="visible">
    <div class="box columns mainDiv" id="courseBox">
      <div class="column is-narrow imgDiv">
        <img v-bind:src="image" alt="Image" />
      </div>
      <div class="column">
        <p class="title">{{ title }}</p>
        <p class="subtitle">UCAS Points: {{ ucasPoints }}</p>
        <p>{{ description }}</p>
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
    title: String,
    description: String,
    image: String,
    link: String,
    ucasPoints: Number
  },
  data() {
    return {
      visible: false
    };
  },
  created() {
    eventBus.on(SearchUpdated, this.onSearch);
  },
  methods: {
    onSearch(data) {
      if (
        !this.title
          .toLowerCase()
          .includes(data.searchInput.toLowerCase()) &&
        data.searchInput.length > 0
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
