<template>
  <div class="fullHeight fullMinHeight">
    <Banner />
    <div class="columns fullHeight fullMinHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <UcasInputBox
          v-for="n in parseInt(ucasCount)"
          v-bind:key="n"
          description="Lorem ipsum dolor"
          courseTitle="Sample text"
        />
        <button
          v-on:click="addNewUcas()"
          class="button is-rounded teal-text addUcasButton"
        >+</button>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import UcasInputBox from "../components/UcasInputBox.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  name: "UcasPage",
  components: {
    Banner,
    NavBar,
    UcasInputBox
  },
  data() {
    return {
      ucasCount: 1
    };
  },
  methods: {
    addNewUcas() {
      this.ucasCount++;
      eventBus.emit(NavBarUpdate);
    }
  }
};
</script>
