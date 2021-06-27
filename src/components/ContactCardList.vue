<template>
    <div class="contact-card__list">
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

<style scoped lang="scss">
    .contact-card__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
</style>
