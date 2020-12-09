<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow fullHeight">
        <NavBar />
      </div>
      <div class="column main geometric-bg fullMinHeight">
        <div class="ucpImage">
          <img style="height:400px; margin-top:4px;" src="@/assets/A19_7794_YES.jpg" />
        </div>
        <div>
          <NewsBox
            title="The Time Management Skills of a Not-So-Superwoman"
            full-article-link="https://www.ucp.ac.uk/news/the-time-management-skills-of-a-not-so-superwoman/"
            article="My day to other people often seems like part of a well organised machine that is on time, with all the right words in my head, answers at the ready and everything going to plan. My day to me seems like I’m peddling a unicycle uphill while juggling a pack of angry geese. I am currently in the second year of a full time English Literature degree with six children living at home. Every day I make it on time, and able to say anything remotely useful, is a definite win. I am currently working at a 1:1 and I am proud of this. I don’t have all the answers, but I’ve learned a few things about myself and how to manage my time effectively."
            image-src="Prospectus1.png"
            image-alt-text="Image 2"
          />
          <NewsBox
            title="Updated Covid-19 guidance for students"
            full-article-link="https://ucp.ac.uk/"
            article="Following the Prime Minister’s address on 22 September 2020 and the new restrictions that are to be implemented in England, we are taking some further actions to mitigate the risks of COVID-19 infections. These actions are important as we continue to prioritise the health and safety of our staff and students. We are also taking these actions to minimise the impact and disruption to learning and working of others following a confirmed case. Therefore from Monday..."
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
