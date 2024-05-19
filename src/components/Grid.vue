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
    border-bottom: 2px solid black; /* Bordure en bas */
    border-right: 2px solid black; /* Bordure à droite */
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
}

.grid {
  display: grid;
  grid-template-rows: repeat(minmax(300px, 1fr), auto-fit);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0px;
 }

@media (max-width: 600px) {


.item-wrapper {
    aspect-ratio: 1;
    border-bottom: 0.5px solid black;
    border-right: 0.5px solid black;
}

.grid {
    grid-template-rows: repeat(minmax(100px, 1fr), auto-fit);
    grid-template-columns: repeat(auto-fit, minmax(calc(33.33% - 2px), 1fr)); 
}
}


</style>
