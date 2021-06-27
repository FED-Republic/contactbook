<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Wellcome msg="Welcome to Demo Contact Book Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Wellcome from '@/components/Wellcome.vue'

export default {
    name: 'Home',
    components: {
        Wellcome
    }
}
</script>
