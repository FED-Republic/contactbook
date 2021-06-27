<template>
    <teleport to="body">
        <div class="zoom-contact-popup">
            <h3>ZoomContact</h3>
            <div class="zoom-contact-popup__body">
                <img :src="contactInfo.picture.medium" alt="">
                <div>
                    <h4>
                        {{ contactInfo.name.first }} <br/>
                        {{ contactInfo.name.last }}
                    </h4>
                    <p>
                        {{ contactInfo.phone }}<br/>
                        <small>{{ contactInfo.email }}</small>
                    </p>
                </div>
            </div>
            <button @click="cancel">Close</button>
        </div>
        <div class="overlay"></div>
    </teleport>
</template>

<script>
export default {
    name: "ZoomContact",
    emits: ["cancel"],
    props: {
        contactInfo: Object
    },
    methods: {
        cancel() {
            this.$emit("cancel");
        }
    }
}
</script>

<style scoped lang="scss">
    .zoom-contact-popup {
        width: 320px;
        min-height: 200px;
        text-align: center;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        max-width: 100%;
        background-color: #FFFFFF;
        padding: 20px;
        border: solid 2px #39485c;
        z-index: 2;

        &__body {
            display: flex;
            align-items: center;
            text-align: left;
            margin: 10px;
        }

        img {
            overflow: hidden;
            border: solid 2px #39485c;
            border-radius: 50%;
            margin-right: 10px;
            min-width: 72px;
        }
    }

    .overlay {
        background-color: #000000;
        opacity: 0.5;
        z-index: 1;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
    }
</style>
