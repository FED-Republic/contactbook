<template>
    <div>
        {{ contactInfo.name.first }}
        {{ contactInfo.name.last }}
    </div>
</template>

<script>
export default {
    name: "ContactCard",
    props: {
        contactInfo: Object
    }
}
</script>

<style scoped>

</style>
