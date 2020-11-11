<template>
    <div id="siteBanner" class="bannerDiv">
        <img class="bannerImage" src="@/assets/logo.png" alt="logo">

        <div class="loginSection">
            
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
}

.bannerImage {
    max-height: 100%;
}
</style>