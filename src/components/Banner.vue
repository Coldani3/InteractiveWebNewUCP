<template>
    <div id="siteBanner" class="bannerDiv">
        <img class="bannerImage" src="@/assets/ucp__logo.png" alt="logo">

        <div class="loginSection box">
            <div>
                <a href=""><img class="far fa-user-circle"> Student Login</a>
                |
                <a href=""><img class="far fa-user-circle"> Staff Login</a>
            </div>
        </div>
    </div>
</template>

<script>
//require("..assets/ucplogo.png");

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
    float:right;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>