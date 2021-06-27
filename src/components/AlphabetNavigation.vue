<template>
    <div class="alphabetic-navigation">
        <h3>Alphabetic navigation</h3>
        <router-link v-for="tab in tabs"  :to="'/contact-tab/' + tab" class="alphabetic__link" >{{ tab }}</router-link>
    </div>
</template>

<script>
import initialConfig from "../store/initialConfig";

export default {
    name: "AlphabetNavigation",
    data() {
        return {
            label: this.$store.state.numberCards
        }
    },
    computed: {
        tabs() {
            return this.$store.state.initialConfig.tabs
        }
    },
    created() {
        // this.$store.dispatch('loadContactBook')
    }
}
</script>

<style scoped lang="scss">
    .alphabetic__link {
        display: inline-block;
        border: solid 2px #39485c;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        line-height: 31px;
        text-decoration: none;
        font-weight: bold;
        margin: 5px;
        position: relative;

        &:visited {
            color: inherit;
        }

        &:hover {
            background-color: #39485c;
            color: #FFFFFF;
        }

        &.router-link-active {
            background-color: #39485c;
            color: #FFFFFF;
            border-color: #64b587;
        }

        &:after {
            content: "";
            position: absolute;
            left: -5px;
            right: -5px;
            top:0;
            bottom: 0;
        }
    }
</style>
