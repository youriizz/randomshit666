<script>

import NetflixCarousel from './NetflixCarousel.vue'
import { carousels } from './carousels';
import Introduction from '../GestureIndications/Introduction.vue';

export default {
    components: { 
        NetflixCarousel, 
        Introduction 
    },
    data() {
        return {
            carousels,
            showIntroduction: true,
            title: 'Interchangeable',
            description: 'Duration : 45 Seconds',
            startButtonText: 'Start',
            orangeRoute: 'notsimilar',
            greenRoute: 'similar',
        }
    },
}
</script>

<template>
    <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['grab','scroll-down']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
    <div class="netflix">
        <netflix-carousel v-for="(carousel, index) in carousels" :carousel="carousel" :key="index" :idx="index" />
    </div>
    </div>
</template>

<style scoped>
img {
    border: 1px solid black;
    background-color: red;
}
</style>
