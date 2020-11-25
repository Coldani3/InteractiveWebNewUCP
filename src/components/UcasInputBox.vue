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
        <select class="gradeSelect">
          <option value="grade1">A*</option>
          <option value="grade1">A</option>
          <option value="grade1">B</option>
          <option value="grade1">C</option>
          <option value="grade1">D</option>
          <option value="grade1">E</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#ucasBox",
  name: "UcasInputBox"
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
