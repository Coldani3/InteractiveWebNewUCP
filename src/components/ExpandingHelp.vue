<template>
  <div id="expandingHelp" class="whole">
    <div
      class="box teal titleBox"
      v-on:click="toggleExpanded()"
      v-bind:class="{ titleOnExpanded: expanded, teal: !hover }"
      v-on:hover="hoverToggle()"
      v-bind:style="height()"
    >
      <p class="subtitle whiteText">{{ title }}</p>
    </div>
    <div class="box expandedBox" v-if="expanded">
      <div v-for="line in contents" v-bind:key="line">
        <p v-html="line"></p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus, ExpandingHelpPressed, NavBarUpdate } from "../EventBus.js";

export default {
  el: "#expandingHelp",
  name: "LoginBox",
  props: {
    title: String,
    contents: Array,
    tall: Boolean
  },
  data() {
    return {
      expanded: false,
      hover: false
    };
  },
  created() {
    eventBus.on(ExpandingHelpPressed, this.unexpand);
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  },
  methods: {
    toggleExpanded() {
      eventBus.emit(ExpandingHelpPressed, { sender: this });
      eventBus.emit(NavBarUpdate);
      this.expanded = !this.expanded;
    },
    unexpand(data) {
      if (data.sender != this) {
        this.expanded = false;
      }
    },
    hoverToggle() {
      this.hover = !this.hover;
    },
    height() {
      if (this.tall) {
        return "{ min-height: 2em }";
      } else {
        return "{ height: 2em }";
      }
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
  padding-top: 6px;
  height: auto;
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
