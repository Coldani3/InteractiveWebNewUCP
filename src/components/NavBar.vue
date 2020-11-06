<template>
    <div id="navBar">
        <button v-on:click="toggleDisplayed" class="dark-teal hamburgerButton">TODO: HAMBURGER</button>
        <div class="dark-teal mainBox" v-if="expanded">
            <!-- TODO: Somehow get the links and display them -->
            <a class="link" v-for="(name, link) in links" v-bind:key="link" v-bind:href="link">{{name}}</a>
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
                "Home": "https://www.google.com/"
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
    float: left;
    width: 100px;
    height: 100%;
}

.link {
    color: lightseagreen;
    font-size: 18px;
    text-emphasis: bolder;
}

.link:visited {
    color: blueviolet;
}

.hamburgerButton {

}
</style>