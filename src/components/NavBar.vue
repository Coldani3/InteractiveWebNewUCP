<template>
    <div id="navBar">
        <button v-on:click="toggleDisplayed" class="dark-teal">TODO: HAMBURGER</button>
        <div class="dark-teal mainBox" v-if="expanded">
            <!-- TODO: Somehow get the links and display them -->
        </div>
    </div>
</template>

<script>
export default {
    el: "#navBar",
    props: {
        expandedDefault: false
    },
    data()
    {
        return {
            expanded: expandedDefault
        }
    },
    methods: {
        setDisplayed(isExpanded)
        {
            expanded = isExpanded;
        },
        toggleDisplayed()
        {
            expanded = !expanded;
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
</style>