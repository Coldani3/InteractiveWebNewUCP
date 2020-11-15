<template>
    <div class="fullMinHeight">
        <Banner/>
        <div class="columns fullHeight">
            <div class="column is-narrow">
                <NavBar/>
            </div>
            <div class="column">
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
                <NewsBox title="Test 2" full-article-link="https://google.com/" article="Sample text" image-src="logo.png" image-alt-text="Image 2"/>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NavBar from "../components/NavBar.vue";
import NewsBox from "../components/NewsBox.vue";

export default {
    name: "NewsPage",
    components: {
        Banner,
        NavBar,
        NewsBox
    }
}
</script>