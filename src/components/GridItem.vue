<script>
export default {
    props: {
        item: Object,
    }
}
</script>

<template>
    <div>
        <component v-if="item.component" :is="item.component"></component>
        <div v-else>
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped>
</style>
