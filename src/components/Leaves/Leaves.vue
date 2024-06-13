<template>
  <div>
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['touch', 'scroll-right', 'scroll-left']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
    <div class="container">
      <div class="background"></div>
      <div class="carousels">
        <TreesCarousel :currentIndex="currentIndex" @containerClick="updateIndex" />
        <LeavesCarousel :currentIndex="currentIndex" @containerClick="updateIndex" />
      </div>
    </div>
  </div>
  </template>
  
  <script>
   import TreesCarousel from './TreesCarousel.vue';
   import LeavesCarousel from './LeavesCarousel.vue';
   import Introduction from '../GestureIndications/Introduction.vue';
 
  
  
  export default {
    name: 'CarouselContainer',
    components: {
      LeavesCarousel,
      TreesCarousel,
      Introduction
    },
    data() {
      return {
        currentIndex: 6, // Index initial pour centrer le 6ème container
        showIntroduction: true,
        title: 'Leaves',
        description: 'Duration : 30 Seconds',
        startButtonText: 'Start',
        orangeRoute: 'notsimilar',
        greenRoute: 'similar', 
      };
    },
    methods: {
      updateIndex(newIndex) {
        this.currentIndex = newIndex;
        // Sync the currentIndex with both carousels
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 0;
  }
  
  .carousels {
    position: relative;
    z-index: 1;
    height: 100%;
  }
  
  .carousels :deep .gallery {
    opacity: 1;
  }
  </style>
  