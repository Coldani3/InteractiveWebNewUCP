<template>
  <div class="box" id="ucasBox">
    <div class="select fullWidth qualificationDiv">
      <select class="qualificationSelect">
        <option value="val1">Sample Qual</option>
        <option value="val2">Sample Qual 2</option>
      </select>
    </div>
    <br />
    <div class="columns">
      <div class="column is-half">
        <input
          class="subjectInput input"
          type="text"
          placeholder="Subject (optional)"
        />
      </div>
      <div class="column is-half select">
        <select class="gradeSelect" v-on:change="changed($event)">
          <option value="" selected="selected" disabled>Select Grade</option>
          <option value="as">A*</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="e">E</option>
          <option value="ds3">D*D*D*</option>
          <option value="ds2d">D*D*D</option>
          <option value="dsd2">D*DD</option>
          <option value="d3">DDD</option>
          <option value="d2m">DDM</option>
          <option value="dm2">DMM</option>
          <option value="m3">MMM</option>
          <option value="m2p">MMP</option>
          <option value="mp2">MPP</option>
          <option value="p3">PPP</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { ucasCalculator } from "../UcasCalculator.js";

export default {
  el: "#ucasBox",
  name: "UcasInputBox",
  data() {
    return {
      selected: "",
      points: 0,
      ucasID: 0,
      pointsMap: {
        "as": 56,
        "a": 48,
        "b": 40,
        "c": 32,
        "d": 24,
        "e": 16,
        "ds3": 168,
        "ds2d": 160,
        "dsd2": 152,
        "d3": 144,
        "d2m": 128,
        "dm2": 112,
        "m3": 96,
        "m2p": 80,
        "mp2": 64,
        "p3": 48

      }
    }
  },
  created() {
    this.ucasID = ucasCalculator.generateID();
  },
  methods: {
    changed(event) {
      this.selected = event.target.value;
      this.points = this.pointsMap[this.selected];
      ucasCalculator.updateValue(this.ucasID, this.points);
    }
  }
};
</script>

<style scoped>
.qualificationDiv {
  margin-bottom: 1em;
}

.qualificationSelect {
  width: 100%;
}

.subjectInput {
  margin-right: 2em;
  float: left;
  width: 100%;
}

.gradeSelect {
  width: 100%;
}
</style>
