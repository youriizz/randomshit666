<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        goToItemRoute() {
            console.log(this.item.route);
            this.$router.push(this.item.route);
        }
    },
}
</script>

<template>
    <div @click="goToItemRoute" class="grid-item">
        <component v-if="item.component" :is="item.component"></component>
        <div v-else>
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped>
.grid-item {
    height: 100%;
    width: 100%;
}
</style>
