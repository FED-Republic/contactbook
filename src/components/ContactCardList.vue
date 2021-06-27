<template>
    <div>
        <ContactCard v-for="card in cards" :contactInfo = "card"/>
    </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'

export default {
    name: "ContactCardList",
    props: {
        cards: Array
    },
    components: {
        ContactCard
    }
}
</script>

<style scoped>

</style>
