<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" />
  </template>
  
  <script>
  import BaseCountry from './BaseCountry.vue';
    import flagkwezula from '@/assets/International/flagkwezula.webp'
  
  export default {
    components: {
      BaseCountry
    },
    data() {
      return {
        images: [
        {src: flagkwezula, start: 1, end: 2, class: 'flag', animation : {className: 'littleflag', start: 2, end: 3}},
        ],
        sounds: [
          // Sons spécifiques à ce pays
        ],
        videos: [
          // Vidéos spécifiques à ce pays
        ],
        styles: [
        { class: 'bluepoint', start: 3, end: 6, animation: {
          className: 'bluebigger',
          start: 4,
          end: 5} },
        ]
      };
    }
  }
  </script>

<style>
  
  .bluepoint {
    width: 120%;
    height: 120%;
    background-color: blue;
    transition: 0.3s;
 }

 .bluebigger {
    transform: scale(1.5);
 }

 </style> 
  