<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <NewsBox title="Test title" full-article-link="https://ucp.ac.uk/" article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non venenatis libero, quis rhoncus dui. Nam ut elit at arcu sollicitudin rutrum non eget diam. Nunc pulvinar enim sed massa placerat ultrices. Cras et nisi at nunc fermentum feugiat non vel erat. Ut ultricies sem scelerisque tellus pretium sagittis. Curabitur iaculis tempor venenatis. Aliquam magna tellus, sodales et congue quis, elementum ut lorem. Donec vulputate, nunc et iaculis ornare, massa metus congue diam, vel tristique odio purus sed sapien. Nunc fermentum sapien sem, sed dapibus eros lacinia eget. Morbi aliquam eleifend tortor, eu sagittis eros aliquam vitae."/>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import NewsBox from "./components/NewsBox.vue";

export default {
  name: "App",
  components: {
    NewsBox
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
