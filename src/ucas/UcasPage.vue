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
        />
        <button
          v-on:click="addNewUcas()"
          class="button is-rounded addUcasButton peach"
        >+</button>
        <br />
        <br />
        <button v-on:click="calculateUCAS()" class="button is-rounded peach">Calculate</button>
        <div v-if="calculate">
          <p class="subtitle">Your UCAS Points: {{ ucasPoints() }}</p>
          <!-- Generated results -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import UcasInputBox from "../components/UcasInputBox.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";
import { ucasCalculator } from "../UcasCalculator.js";

export default {
  name: "UcasPage",
  components: {
    Banner,
    NavBar,
    UcasInputBox
  },
  data() {
    return {
      ucasCount: 1,
      calculate: false
    };
  },
  created() {
    ucasCalculator.reset();
  },
  methods: {
    addNewUcas() {
      this.ucasCount++;
      eventBus.emit(NavBarUpdate);
    },
    calculateUCAS() {
      this.calculate = true;
    },
    ucasPoints() {
      return ucasCalculator.getPoints();
    }
  }
};
</script>
