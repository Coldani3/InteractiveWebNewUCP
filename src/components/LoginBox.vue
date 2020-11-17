<template>
  <div class="box columns" id="loginBox">
    <div class="column is-four-fifths">
      <p>Login:</p>
      <input type="text" class="input" />
      <p>Password:</p>
      <input type="text" class="input" />
      <br />
      <br />
      <div>
        <button class="button" v-on:click="login()">Login</button>
      </div>
      <div><a href="">Forgotten password?</a></div>
    </div>
    <div class="column is-one-fifth"></div>
  </div>
</template>

<script>
export default {
  el: "#loginBox",
  name: "Banner",
  methods: {
    login() {
      window.location.href = "index.html";
      //TODO: validation and stuff
    }
  }
};
</script>
