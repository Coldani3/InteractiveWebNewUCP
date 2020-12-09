<template>
  <div id="newsBox" class="mainBox">
    <header class="teal headerBox">
      <p class="title">{{ title }}</p>
    </header>
    <article class="mainArticleBody" style="padding:4px;">
      <div class="columns">
        <div class="column imageBox">
          <img
            class="articleImage"
            v-bind:src="image(imageSrc)"
            v-bind:alt="imageAltText"
          />
        </div>
        <div class="column articleBox">
          <p class="articleBody">{{ article }}</p>
        </div>
      </div>

      <div>
        <a class="button peach" v-bind:href="fullArticleLink">Full article</a>
      </div>
    </article>
  </div>
</template>

<script>
import { getImageURL } from "../util.js";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  el: "#newsBox",
  name: "NewsBox",
  props: {
    title: String,
    fullArticleLink: String,
    article: String,
    imageSrc: String,
    imageAltText: String
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
  },
  methods: {
    image(url) {
      return getImageURL(url);
    }
  }
};
</script>

<style scoped>
.articleImage {
  float: left;
  margin-right: 15px;
  max-height: 100%;
  max-width: 100%;
}

.mainArticleBody {
  background-color: white;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.articleBody {
  margin-bottom: 2px;
  min-height: 130px;
  padding: 4px;
}

.articleBox {
  max-width: 100%;
}

.button {
  width: 200px;
  height: 30px;
}

.button:hover {
  background-color: azure;
}

.imageBox {
  max-width: 15%;
}

.mainBox {
  margin-left: 4px;
  margin-right: 9px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 5px;
  text-align: left;
  margin-top: 10px;
}

.headerBox {
  min-height: 50px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 4px;
  /* background-image: url("~@/assets/geometric-transparent.png"); */
}

hr {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
