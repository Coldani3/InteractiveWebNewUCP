<template>
    <div class="fullHeight">
        <Banner/>
        <div class="columns fullHeight">
            <div class="column is-narrow">
                <NavBar/>
            </div>
            <div class="column">
                <div class="box">
                    <!-- COVID Information goes here -->
                </div>
                <p class="subtitle">Official Links:</p>
                <div class="box">
                    <!-- Government links -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";

export default {
    name: "CovidPage",
    components: {
        NavBar,
        Banner
    }
}
</script>