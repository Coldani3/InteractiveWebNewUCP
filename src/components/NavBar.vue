<template>
    <div id="navBar" align="left" class="dark-teal mainBox" v-bind:style="{ height: boxHeight, width: boxWidth }">
        <div class="innerMainBox">
            <div v-on:click="toggleDisplayed" class="button dark-teal hamburgerButton"><img class="fas fa-bars"/></div>

            <div class="linksBox" v-if="expanded">
                <a v-for="(link, name) in links" v-bind:key="name" v-bind:href="link">
                    <div class="linkBox">
                        <p class="link">{{name}}<br/></p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: "#navBar",
    name: "NavBar",
    data() {
        return {
            links: {
                "Home": "index.html",
                "News": "news.html",
                "Course Search": "search.html",
                "COVID Information": "covid.html",
                "Contact Us": "contact.html",
                "Apply": "apply.html",
                "Help and Support": "help.html",
            },
            expanded: false,
            boxHeight: this.expanded ? "100%" : "auto",
            boxWidth: this.expanded ? "12em" : "auto",
        };
    },
    created()
    {
        if (this.getExpandedDefault())
        {
            this.toggleDisplayed();
        }
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
            return this.expanded ? "12em" : "auto";
        },
        getExpandedDefault()
        {
            return window.innerWidth > window.innerHeight;
        }
    }
}
</script>

<style scoped>
.linkBox {
    width: 100%;
}

.linkBox:hover {
    background-color: #005161;
}

.mainBox {
    position: relative;
    bottom: 0;
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

.linksBox {
    margin-top: 5px;
}

.hamburgerButton {
    color: white;
    /* Has weird white border otherwise */
    border-color: #005c6e;
    border-width: 1px;
    border-radius: 0px;
    margin: 0px;
}

.hamburgerButton:hover {
    background-color: #005161;    
}
</style>