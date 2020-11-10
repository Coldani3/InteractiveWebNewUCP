<template>
    <div id="navBar" align="left" class="dark-teal mainBox" v-bind:style="{ height: boxHeight, width: boxWidth }">
        <div v-on:click="toggleDisplayed" class="button dark-teal hamburgerButton"><img class="fas fa-bars"/></div>

        <div class="linksBox" v-if="expanded">
            <a v-for="(link, name) in links" v-bind:key="name" v-bind:href="link">
                <div class="linkBox">
                    <p class="link">{{name}}<br/></p>
                </div>
            </a>
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
                "News": "",
                "Course Search": "",
                "COVID Information": "",
                "Contact Us": "",
                "Apply": "",
                "Help and Support": "",
            },
            expanded: this.expandedDefault,
            boxHeight: this.expandedDefault ? "100%" : "auto",
            boxWidth: this.expandedDefault ? "200px" : "auto",
        };
    },
    methods: {
        toggleDisplayed()
        {
            this.expanded = !this.expanded;
            this.boxHeight = this.getBoxHeightStyle();
            this.boxWidth = this.getBoxWidthStyle();
        },
        getBoxHeightStyle()
        {
            return this.expanded ? "100%" : "auto";
        },
        getBoxWidthStyle()
        {
            return this.expanded ? "200px" : "auto";
        }
    }
}
</script>

<style scoped>
.mainBox {
    width: 150px;
    height: 100%;
}

.linkBox {
    width: 100%;
}

.linkBox:hover {
    background-color: #005161;
}

.link {
    color: white;
    font-size: 18px;
    text-emphasis: bolder;
    text-align: left;
    padding-left: 15px;
    padding-right: 4px;
    margin-bottom: 4px;
}

.hamburgerButton {
    /* float: left; */
    /* Has weird white border otherwise */
    color: white;
    border-color: #005c6e;
    border-width: 1px;
    border-radius: 0px;
    margin: 0px;
    margin-bottom: 5px;
}

.hamburgerButton:hover {
    background-color: #005161;    
}
</style>