<template>
    <div id="newsBox" class="box">
        <header class="hero teal" style="border-style:solid;border-color:black;border-width:1px;height:50px;">
            <div class="hero-body">
                <p class="title">{{title}}</p>
            </div>
        </header>
        <article>
            <p>{{article}}</p>
        </article>
        <footer>
            <a class="button" v-bind:href="full-article-link" style="float:right;">Full article</a>
        </footer>
    </div>
</template>

<script>
export default {
    el: "newsBox",
    props: {
        "title": String,
        "full-article-link": String
    },
    data()
    {
        return {
            title: "",
            article: "",
        }
    }
}
</script>

<style scoped>

</style>