<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>
  
  <script>
  import EventBus from '../../eventBus';
  import BaseCountry from './BaseCountry.vue';
import TrafficLight from '../TrafficLight.vue';
import explosion from '@/assets/International/images/explosion.gif'
import softpower from '@/assets/International/images/softpower.gif'
import churchill from '@/assets/International/sounds/churchill.mp3'
import flagwestalia from '@/assets/International/images/flagwestalia.webp'


const healthcare = 'https://media1.tenor.com/m/ODwN_mzoi-cAAAAd/stop-nuclear-weapons-nti.gif'




 import CommunistAlert from '@/assets/International/sounds/communistalert.mp3'

 const nuke1 = 'https://media.tenor.com/OYFqADjduDsAAAAj/nuclear-explosion-starcraft-remastered.gif'
 const nuke2 = 'https://media1.tenor.com/m/SaNndlb2qbQAAAAd/janestree.gif'
 const nukehand = 'https://media1.tenor.com/m/nSS5geb1XGoAAAAd/nuke-press-button.gif'




  
  export default {
    components: {
      BaseCountry,
      TrafficLight
    },
    data() {
      return {
        images: [
          {src: flagwestalia, start: 1, end: 2, class: 'flag', animation : {className: 'littleflag', start: 2, end: 2}},
          { src: softpower, start: 13, end: 13, class: 'softpower-image' },
          { src: explosion, start: 18, end: 20, class: 'explosion-image', animation: {className: 'fade-in-out', start: 17, end: 19}},
          { src : nukehand, start: 18, end: 19, class: 'nukehand'},
          { src: nuke1, start: 19, end: 21, class: 'nuke'},
          { src: nuke1, start: 18, end: 20, class: 'nuke2'},
          { src: nuke2, start: 19, end: 22, class: 'nuke3'},
        ],
        sounds: [
          { src: churchill, start: 5, end: 8, class: 'churchill-sound' },
          { src: CommunistAlert, start: 18, end: 25, class: 'communistalert' },
        ],
        videos: [
          { src: 'path/to/video1.mp4', start: 3, end: 5, class: 'video1' }
        ],
        styles: [
          { class: 'TrafficLights', start: 20, end: 100},
          
        ],
        texts: [
        { content: 'Westalia', start: 2, end: 2, class: 'countryname countryname1' }
        ]
      };
    },
    created() {
    EventBus.on('nuke-triggered', this.triggerNukes);
  },
  methods: {
    triggerNukes() {
      console.log('Nuke event received in Country2');
      this.images = this.images.map(image => {
        if (['nuke', 'nuke2', 'nuke3'].includes(image.class)) {
          image.start = 0;
          image.end = Infinity;
        }
        return image;
      });
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


.nukehand {
  width: 20%;
  top: 70%;
  left: 0;
}
.nuke1 {
  width: 20%;
  left: 10%;
  top: 30%;
}

.nuke2 {
  width: 40%;
  top: -20%;
  left: 0;
}

.nuke3 {
  width: 100%;
  left: 20%;
}

.TrafficLights {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: all 1s ease; /* Assurez-vous que toutes les propriétés changent de manière fluide */
}



</style>
  