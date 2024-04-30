<script>
import GridItem from './GridItem.vue';

export default {
    components: { GridItem },
    props: {
        items: Object,
    }
}
</script>

<template>
    <div class="grid">
        <div v-for="(item, index) in items" class="item-wrapper" :key="index">
            <GridItem :item="item" />
        </div>
    </div>
</template>

<style scoped>
.item-wrapper {
    aspect-ratio: 1.25;
    border: 2px solid black;
    overflow: hidden;
    position: relative;
}

.grid {
  display: grid;
  grid-template-rows: repeat(minmax(300px, 1fr), auto-fit);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0px;
 }
</style>
