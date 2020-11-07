<template>
    <div id="navBar" align="left">
        <button v-on:click="toggleDisplayed" class="dark-teal hamburgerButton">TODO: HAMBURGER</button>
        <div class="dark-teal mainBox" v-if="expanded">
            <a class="link" v-for="(link, name) in links" v-bind:key="name" v-bind:href="link">{{name}}<br/></a>
        </div>
    </div>
</template>

<script>
export default {
    el: "#navBar",
    name: "NavBar",
    props: {
         expandedDefault: Boolean
    },
    data() {
        return {
            links: {
                "Home": "https://www.google.com/",
                "Test": "https://www.youtube.com/"
            },
            expanded: this.expandedDefault,
        };
    },
    methods: {
        setDisplayed(isExpanded)
        {
            this.expanded = isExpanded;
        },
        toggleDisplayed()
        {
            this.expanded = !this.expanded;
        }
    }
}
</script>

<style scoped>
.mainBox {
    width: 150px;
    height: 100%;
    align-content: left;
    padding-left: 10px;
}

.link {
    color: lightseagreen;
    font-size: 18px;
    text-emphasis: bolder;
    text-align: left;
}

.link:visited {
    color: rgb(160, 74, 240);
}

.hamburgerButton {
    float: left;
    /* border-style: solid; */
    border-color: black;
    border-radius: 0px;
    /* border-width: 1px;
    color: black; */
}

.hamburgerButton:focus {
    outline: none;
}
</style>