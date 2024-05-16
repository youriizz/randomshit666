<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>  
  
  <script>
  import BaseCountry from './BaseCountry.vue';
  import flagharmonia from '@/assets/International/flagharmonia.webp'
 
  
  export default {
    components: {
      BaseCountry
    },
    data() {
      return {
        images: [
        {src: flagharmonia, start: 1, end: 2, class: 'flag', animation : {className: 'littleflag', start: 2, end: 3}},
        ],
        sounds: [
          // Sons spécifiques à ce pays
        ],
        videos: [
          // Vidéos spécifiques à ce pays
        ],
        styles: [
        { class: 'greenpoint', start: 3, end: 6, animation: {
          className: 'greenbigger',
          start: 4,
          end: 5} },
        ],
        texts: [
        { content: 'Harmonia', start: 2, end: 2, class: 'countryname countryname2' }
        ]
      };
    }
  }
  </script>

<style>

.greenpoint {
    width: 120%;
    height: 120%;
    background-color: rgb(0, 255, 0);
    transition: 0.3s;
 }

 .greenbigger {
    transform: scale(1.5);
 }

</style>

  
 
  