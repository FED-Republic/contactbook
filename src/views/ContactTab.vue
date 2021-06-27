<template>
    <div class="contact-tab__wrapper">
        <h3>ContactTab:: {{ label }}</h3>
        <ContactCardList/>
    </div>
</template>

<script>
import ContactCardList from '@/components/ContactCardList.vue'

export default {
    name: "ContactTab",
    data() {
        return {
            label: ""
        }
    },
    created() {
        this.label = this.$route.params.tab
    },
    components: {
        ContactCardList
    }
}
</script>

<style scoped>

</style>
