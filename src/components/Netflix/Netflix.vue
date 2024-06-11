<script>
import NetflixCarousel from './NetflixCarousel.vue'
import { carousels } from './carousels';

export default {
    components: { NetflixCarousel },
    data() {
        return {
            carousels,
        }
    },
}
</script>

<template>
    <div class="netflix">
        <netflix-carousel v-for="(carousel, index) in carousels" :carousel="carousel" :key="index" :idx="index" />
    </div>
</template>

<style scoped>
img {
    border: 1px solid black;
    background-color: red;
}
</style>
