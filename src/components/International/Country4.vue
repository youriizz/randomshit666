<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" />
  </template>
  
  <script>
  import BaseCountry from './BaseCountry.vue';
    import flagzhequiang from '@/assets/International/flagzhequiang.webp'
  
  export default {
    components: {
      BaseCountry
    },
    data() {
      return {
        images: [
        {src: flagzhequiang, start: 1, end: 2, class: 'flag', animation : {className: 'littleflag', start: 2, end: 3}},
        ],
        sounds: [
          // Sons spécifiques à ce pays
        ],
        videos: [
          // Vidéos spécifiques à ce pays
        ],
        styles: [
        { class: 'blackpoint', start: 3, end: 6, animation: {
          className: 'blackbigger',
          start: 4,
          end: 5} },
        ]
      };
    }
  }
  </script>

<style>
  
  .blackpoint {
    width: 120%;
    height: 120%;
    background-color: rgb(0, 0, 0);
    transition: 0.3s;
 }

 .blackbigger {
    transform: scale(1.5);
 }

 </style> 
  