<template>
    <div id="navBar" align="left" class="dark-teal mainBox" v-bind:style="{ height: boxSize }">
        <button v-on:click="toggleDisplayed" class="dark-teal hamburgerButton">TODO: HAMBURGER</button>
        <br/>
        <div v-if="expanded">
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
            boxSize: this.expandedDefault ? "100%" : "auto"
        };
    },
    methods: {
        toggleDisplayed()
        {
            this.expanded = !this.expanded;
            this.boxSize = this.getBoxHeightStyle();
        },
        getBoxHeightStyle()
        {
            return this.expanded ? "100%" : "auto";
        }
    }
}
</script>

<style scoped>
.mainBox {
    width: 200px;
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
    border-color: black;
    border-radius: 0px;
}

/* Begone annoying white box around button when you click it */
.hamburgerButton:focus {
    outline: none;
}
</style>