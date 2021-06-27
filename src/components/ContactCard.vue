<template>
    <div class="contact-card__item" @click="activateZoom">
        <img :src="contactInfo.picture.thumbnail" alt="">
        <span>
            {{ contactInfo.name.first }} <br/>
            {{ contactInfo.name.last }}
        </span>
    </div>
    <ZoomContact v-if="zoom" :contactInfo="contactInfo" @cancel="deactivateZoom"/>
</template>

<script>
import ZoomContact from '@/components/ZoomContact.vue'

export default {
    name: "ContactCard",
    data() {
        return {
            zoom: false,
        };
    },
    props: {
        contactInfo: Object
    },
    methods: {
        deactivateZoom() {
            this.zoom = false;
        },
        activateZoom() {
            this.zoom = true;
        }
    },
    components: {
        ZoomContact
    }
}
</script>

<style scoped lang="scss">
    .contact-card__item {
        display: flex;
        align-items: center;
        text-align: left;
        margin: 10px;
        cursor: pointer;
        padding-right: 15px;

        img {
            overflow: hidden;
            border: solid 2px #39485c;
            border-radius: 50%;
            margin-right: 10px;
        }

        &:hover {
            background-color: #64b587;
            border-radius: 25px;
            color: white;
        }
    }
</style>
