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
          <option value="as">A*</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="e">E</option>
          <option value="pass">Pass</option>
          <option value="merit">Merit</option>
          <option value="distinction">Distinction</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#ucasBox",
  name: "UcasInputBox",
  data() {
    return {
      selected: "",
      previousSelected: ""
    }
  },
  methods: {
    changed(event) {
      this.previousSelected = this.selected;
      this.selected = event.target.value;
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
