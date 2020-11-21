<template>
  <a v-bind:href="courseLink" class="link">
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
export default {
  el: "#courseBox",
  name: "CourseBox",
  props: {
    courseTitle: String,
    courseDescription: String,
    courseImage: String,
    courseLink: String
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
