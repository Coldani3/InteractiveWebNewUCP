<template>
    <div id="newsBox" class="mainBox">
        
        <header class="teal headerBox">
            <p class="title">{{title}}</p>
        </header>
        <article style="padding:2px;">
            <img class="articleImage" v-bind:src="imageLink" alt="image">
            <p class="articleBody">{{article}}</p>

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
    }
}
</script>

<style scoped>
.articleImage
{
    float:left;
    margin-right:2px;
    border-style:solid;
    border-width:0.5px;
    border-color:black;
    max-height:150px;
    max-width:150px;
}

.articleBody
{
    margin-bottom:2px;
    min-height: 110px;
}

.mainBox
{
    margin-left:10px;
    margin-right:10px;
    border-style:solid;
    border-color:black;
    border-width:1px;
    border-radius:5px;
    text-align:left;
}

.headerBox
{
    height:50px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
}
</style>