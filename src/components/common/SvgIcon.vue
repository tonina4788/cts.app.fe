<template>
    <i v-if="asHtml" v-html="asHtml" />
    <i
        v-else-if="asImage"
        :style="{
            backgroundImage: `url(${asImage})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: backgroundPosition != null ? backgroundPosition : 'cover'
        }"
    />
</template>
<script>
export default {
    name: "SvgIcon",
    props: {
        asHtml: {
            type: String
        },
        asImage: {
            type: String
        },
        backgroundPosition: {
            type: String
        }
    },
    created() {
        if (this.asHtml && this.asImage) {
            throw new Error("Please notice that you cannot use asHtml and asImage together");
        }
    }
};
</script>