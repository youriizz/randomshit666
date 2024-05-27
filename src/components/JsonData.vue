<template>
    <pre> {{ jsonData }}</pre>
</template>

<script>
export default {
    props: {
        jsonData: {
            type: Object,
            default: {}
        },
    },
}
</script>

<style></style>