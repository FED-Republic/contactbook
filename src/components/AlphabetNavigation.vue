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

<style scoped>

</style>
