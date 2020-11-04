<template>
    <div id="newsBox" style="margin-left:10px;margin-right:10px;border-style:solid;border-color:black;border-width:1px;border-radius:5px;text-align:left;">
        
        <header class="teal" style="height:50px;border-top-left-radius:5px;border-top-right-radius:5px;">
            <p class="title">{{title}}</p>
        </header>
        <article style="padding:2px;">
            <img style="float:left;margin-right:2px;border-style:solid;border-width:1px;border-color:black;height:150px;width:150px;" v-bind:src="imageLink" alt="image">
            <p style="margin-bottom:2px;">{{article}}</p>
            
            <div align="right">
                <a class="button" v-bind:href="fullArticleLink">Full article</a>
            </div>
        </article>
        <footer>
            
        </footer>
    </div>
</template>

<script>
export default {
    el: "newsBox",
    name: "NewsBox",
    props: {
        title: String,
        fullArticleLink: String,
        article: String,
        imageLink: String
    },
    data()
    {
        return {
            //title: "",
            //article: "",
        }
    }
}
</script>

<style scoped>

</style>