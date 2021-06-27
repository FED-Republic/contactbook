<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
    <AlphabetNavigation/>
    <router-view :key="$route.name + ($route.params.tab || '')"/>
</template>

<script>

import AlphabetNavigation from '@/components/AlphabetNavigation.vue'

export default {
    name: 'App',
    beforeCreate() {
        this.$store.dispatch('loadContactBook')
    },
    components: {
        AlphabetNavigation
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
