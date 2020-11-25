<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow fullHeight">
        <NavBar />
      </div>
      <div class="column main geometric-bg fullMinHeight">
        <div class="ucpImage">
          <img style="height:400px;" src="@/assets/A19_7794_YES.jpg" />
        </div>
        <div>
          <NewsBox
            title="Open Day at UCP"
            full-article-link="https://google.com/"
            article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non venenatis libero, quis rhoncus dui. Nam ut elit at arcu sollicitudin rutrum non eget diam. Nunc pulvinar enim sed massa placerat ultrices. Cras et nisi at nunc fermentum feugiat non vel erat. Ut ultricies sem scelerisque tellus pretium sagittis. Curabitur iaculis tempor venenatis. Aliquam magna tellus, sodales et congue quis, elementum ut lorem. Donec vulputate, nunc et iaculis ornare, massa metus congue diam, vel tristique odio purus sed sapien. Nunc fermentum sapien sem, sed dapibus eros lacinia eget. Morbi aliquam eleifend tortor, eu sagittis eros aliquam vitae."
            image-src="Prospectus1.png"
            image-alt-text="Image 2"
          />
          <NewsBox
            title="Local Man Shouts at Cloud"
            full-article-link="https://ucp.ac.uk/"
            article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non venenatis libero, quis rhoncus dui. Nam ut elit at arcu sollicitudin rutrum non eget diam. Nunc pulvinar enim sed massa placerat ultrices. Cras et nisi at nunc fermentum feugiat non vel erat. Ut ultricies sem scelerisque tellus pretium sagittis. Curabitur iaculis tempor venenatis. Aliquam magna tellus, sodales et congue quis, elementum ut lorem. Donec vulputate, nunc et iaculis ornare, massa metus congue diam, vel tristique odio purus sed sapien. Nunc fermentum sapien sem, sed dapibus eros lacinia eget. Morbi aliquam eleifend tortor, eu sagittis eros aliquam vitae."
            image-src="logo.png"
            image-alt-text="Image"
          />
          <a href="news.html">More News...</a>
        </div>
        <br />
        <img style="height: 300px;" src="@/assets/Prospectus1.png" />
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Banner from "../components/Banner.vue";
import NewsBox from "../components/NewsBox.vue";
import NavBar from "../components/NavBar.vue";
import { eventBus, NavBarUpdate } from "../EventBus.js";

export default {
  name: "App",
  components: {
    NewsBox,
    NavBar,
    Banner
  },
  mounted() {
    eventBus.emit(NavBarUpdate);
    setTimeout(function() { eventBus.emit(NavBarUpdate); }, 100);
  }
};
</script>

<style scoped>
.ucpImage {
  text-align: center;
}
.main {
  /* background-image: url("~@/assets/geometric-transparent.png");
  background-color: rgba(255,255,255,0.5); */
}
</style>
