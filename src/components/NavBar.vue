<template>
  <div
    id="navBar"
    align="left"
    class="dark-teal mainBox fullHeight"
    v-bind:style="{ height: boxHeight, width: boxWidth }"
    v-on:update-navbar="updateHeight()"
  >
    <div class="innerMainBox">
      <div
        v-on:click="toggleDisplayed"
        class="button dark-teal hamburgerButton"
      >
        <img class="fas fa-bars" />
      </div>

      <div class="linksBox" v-if="expanded">
        <a v-for="(link, name) in links" v-bind:key="name" v-bind:href="link">
          <div class="linkBox">
            <p class="link">{{ name }}<br /></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  el: "#navBar",
  name: "NavBar",
  data() {
    return {
      links: {
        // eslint-disable-next-line prettier/prettier
        "Home": "index.html",
        // eslint-disable-next-line prettier/prettier
        "News": "news.html",
        "Course Search": "search.html",
        "COVID Information": "covid.html",
        "Contact Us": "contact.html",
        // eslint-disable-next-line prettier/prettier
        "Apply": "apply.html",
        "Help and Support": "help.html"
      },
      expanded: false,
      boxHeight: this.expanded ? document.getElementsByTagName("html").item(0).clientHeight + "px" : "auto",
      boxWidth: this.expanded ? "12em" : "auto"
    };
  },
  created() {
    eventBus.on(NavBarUpdate, this.updateHeight);
    if (this.getExpandedDefault()) {
      this.toggleDisplayed();
    }
  },
  methods: {
    toggleDisplayed() {
      this.expanded = !this.expanded;
      this.boxHeight = this.getBoxHeightStyle();
      this.boxWidth = this.getBoxWidthStyle();
    },
    getBoxHeightStyle() {
      return this.expanded ? document.body.scrollHeight + "px" : "auto";
    },
    getBoxWidthStyle() {
      return this.expanded ? "12em" : "auto";
    },
    getExpandedDefault() {
      return window.innerWidth > window.innerHeight;
    },
    updateHeight() {
      console.log("update height");
      this.boxHeight = this.getBoxHeightStyle();
    }
  }
};
</script>

<style scoped>
.linkBox {
  width: 100%;
}

.linkBox:hover {
  background-color: #005161;
}

.mainBox {
  position: relative;
  bottom: 0;
  /* height: auto; */
}

.link {
  color: white;
  font-size: 18px;
  text-emphasis: bolder;
  text-align: left;
  padding-left: 15px;
  padding-right: 4px;
  margin-bottom: 4px;
}

.linksBox {
  margin-top: 5px;
}

.hamburgerButton {
  color: white;
  /* Has weird white border otherwise */
  border-color: #005c6e;
  border-width: 1px;
  border-radius: 0px;
  margin: 0px;
}

.hamburgerButton:hover {
  background-color: #005161;
}
</style>
