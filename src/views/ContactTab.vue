<template>
    <div class="contact-tab__wrapper">
        <h3>ContactTab:: {{ label }}</h3>
        <ContactCardList :cards = "cardsListArray" />
    </div>
</template>

<script>
import ContactCardList from '@/components/ContactCardList.vue'

export default {
    name: "ContactTab",
    data() {
        return {
            label: this.$route.params.tab,
             cardsListArray: this.$store.getters.getContactByLetter(this.$route.params.tab)
        }
    },
    methods: {
    },
    components: {
        ContactCardList
    }
}
</script>

<style scoped>

</style>
