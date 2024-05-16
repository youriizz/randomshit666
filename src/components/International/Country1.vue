<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>
  
  <script>
  import BaseCountry from './BaseCountry.vue';
  import oceanImage from '@/assets/ILoveGaza/ocean9.png';
import TrafficLight from '../TrafficLight.vue';
import explosion from '@/assets/International/explosion.gif'
import softpower from '@/assets/International/softpower.gif'
import twofaces from '@/assets/International/twofaces.svg'
import churchill from '@/assets/International/churchill.mp3'
import flagwestalia from '@/assets/International/flagwestalia.webp'
  
  export default {
    components: {
      BaseCountry,
      TrafficLight
    },
    data() {
      return {
        images: [
          {src: flagwestalia, start: 1, end: 3, class: 'flag', animation : {className: 'littleflag', start: 2, end: 3}},
          { src: softpower, start: 20, end: 20, class: 'softpower-image' },
          { src: explosion, start: 5, end: 7, class: 'explosion-image', animation: {className: 'fade-in-out', start: 6, end: 6}}
        ],
        sounds: [
          { src: churchill, start: 5, end: 8, class: 'churchill-sound' },
        ],
        videos: [
          { src: 'path/to/video1.mp4', start: 3, end: 5, class: 'video1' }
        ],
        styles: [
          { class: 'border-red', start: 7, end: 8 },
          { class: 'background-yellow', start: 3, end: 5 }
        ],
        texts: [
        { content: 'Westalia', start: 2, end: 2, class: 'countryname countryname1' }
        ]
    }
  }
}
  </script>
  
<style>
.softpower-image {
  width: 40%;
}
.ocean-image, .explosion-image {
  width: 40%;
  top: 0;
  left: 0;
  transition: 0.3s;
}

.flag {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.littleflag {
  object-fit: contain;
  width: 50%;
  height: 50%;
  transition: 0.3s;
}

.fade-in-out {
  transform: scale(1.5);
  transition: 0.3s;
  left: 100%;
}

.countryname {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  font-family: 'Georgia', serif; /* Police plus élégante */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Ombre pour donner du relief */
  background-color: rgba(255, 255, 255, 0.8); /* Fond blanc légèrement transparent */
  padding: 10px 20px; /* Espace autour du texte */
  border-radius: 8px; /* Bords arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre portée pour effet 3D */
  z-index: 10;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Transition pour l'animation */
}

.countryname1 {
  color: #ff0000; /* Rouge vif */
  border: 2px solid #ff0000; /* Bordure assortie à la couleur du texte */
}

.countryname2 {
  color: #004cff; /* Bleu vif */
  border: 2px solid #004cff; /* Bordure assortie à la couleur du texte */
}

.countryname3 {
  color: #00c817; /* Vert vif */
  border: 2px solid #00c817; /* Bordure assortie à la couleur du texte */
}

.countryname4 {
  color: #000000; /* Noir */
  border: 2px solid #000000; /* Bordure assortie à la couleur du texte */
}
</style>
  