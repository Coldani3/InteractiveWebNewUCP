<template>
  <div class="box columns" id="courseBox">
    <a v-bind:href="courseLink">
      <div class="column is-narrow">
        <img src="" alt="Image" />
      </div>
      <div class="column">
        <p>{{ courseDescription }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  el: "#courseBox",
  name: "CourseBox",
  props: {
    courseDescription: String,
    courseImage: String,
    courseLink: String
  }
};
</script>
