<template>
    <div id="siteBanner" class="bannerDiv">
        <img class="bannerImage" src="@/assets/ucp__logo.png" alt="logo">

        <div class="loginSection box">
            <a href=""><img class="far fa-user-circle"> Student Login</a>
            |
            <a href=""><img class="far fa-user-circle"> Staff Login</a>
        </div>
    </div>
</template>

<script>
export default {
    el: "#siteBanner",
    name: "Banner",
    methods: {

    }
}
</script>

<style scoped>
.bannerDiv {
    width: 100%;
    height: 150px;
    padding-bottom: 5px;
}

.bannerImage {
    max-height: 100%;
}

.loginSection {
    float: right;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
}
</style>