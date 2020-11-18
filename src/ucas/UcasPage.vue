<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <UcasInputBox
          description="Lorem ipsum dolor"
          courseTitle="Sample text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import UcasInputBox from "../components/UcasInputBox.vue";

export default {
  name: "UcasPage",
  components: {
    Banner,
    NavBar,
    UcasInputBox
  }
};
</script>
