<template>
  <div class="fullHeight">
    <Banner />
    <div class="columns fullHeight">
      <div class="column is-narrow">
        <NavBar />
      </div>
      <div class="column">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vero accusamus tenetur maiores error, dolorem veritatis non accusantium laudantium aut, quis facere! Quisquam ea ut similique, id nulla suscipit et.</p>
          <br />
        </div>
        <ExpandingHelp title="Example" contents="Sample Text" />
        <ExpandingHelp title="Example 2" contents="Sample Text" />
        <ExpandingHelp title="Example 3" contents="Sample Text" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import ExpandingHelp from "../components/ExpandingHelp.vue";

export default {
  name: "ApplyPage",
  components: {
    Banner,
    NavBar,
    ExpandingHelp
  }
};
</script>
