<script>
import NetflixCarousel from './NetflixCarousel.vue'

export default {
    components: { NetflixCarousel },
    computed: {
    },
}
</script>

<template>
    <div class="netflix">
        <netflix-carousel v-for="splide in 10" :key="splide" :idx="splide" />
    </div>
</template>

<style scoped>
img {
    border: 1px solid black;
    background-color: red;
}
</style>
