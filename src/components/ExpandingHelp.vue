<template>
  <div id="expandingHelp" class="whole">
    <div
      class="box teal titleBox"
      v-on:click="toggleExpanded()"
      v-bind:class="{ titleOnExpanded: expanded, teal: !hover }"
      v-on:hover="hoverToggle()"
    >
      <p class="subtitle whiteText">{{ title }}</p>
    </div>
    <div class="box expandedBox" v-if="expanded">
      <p>{{ contents }}</p>
    </div>
  </div>
</template>

<script>
export default {
  el: "#expandingHelp",
  name: "LoginBox",
  props: {
    title: String,
    contents: String
  },
  data() {
    return {
      expanded: false,
      hover: false
    };
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
    hoverToggle() {
      this.hover = !this.hover;
    }
  }
};
</script>

<style scoped>
.whole {
  margin-right: 3em;
  margin-bottom: 2em;
}

.titleBox {
  padding-top: 2px;
  height: 2em;
}

.titleBox:hover {
  background-color: #005161;
}

.titleOnExpanded {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0;
}
.expandedBox {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0;
}
</style>
