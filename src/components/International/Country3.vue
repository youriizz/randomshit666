<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>
  
  <script>
  import EventBus from '../../eventBus';
  import BaseCountry from './BaseCountry.vue';
    import flagkwezula from '@/assets/International/images/flagkwezula.webp'

    import CommunistAlert from '@/assets/International/sounds/communistalert.mp3'
  const nuke1 = 'https://media.tenor.com/OYFqADjduDsAAAAj/nuclear-explosion-starcraft-remastered.gif'
 const nuke2 = 'https://media1.tenor.com/m/SaNndlb2qbQAAAAd/janestree.gif'
 const nukehand = 'https://media1.tenor.com/m/nSS5geb1XGoAAAAd/nuke-press-button.gif'
    
  
  export default {
    components: {
      BaseCountry
    },
    data() {
      return {
        images: [
        {src: flagkwezula, start: 1, end: 2, class: 'flag', animation : {className: 'littleflag', start: 2, end: 2}},

        { src : nukehand, start: 18, end: 19, class: 'nukehand'},
          { src: nuke1, start: 19, end: 21, class: 'nuke'},
          { src: nuke2, start: 18, end: 20, class: 'nuke2'},
          { src: nuke1, start: 19, end: 22, class: 'nuke3'},
        ],
        sounds: [
     { src: CommunistAlert, start: 18, end: 25, class: 'communistalert' },
        ],
        videos: [
          // Vidéos spécifiques à ce pays
        ],
        styles: [
        { class: 'bluepoint', start: 3, end: 6, animation: {
          className: 'bluebigger',
          start: 4,
          end: 5} },
          { class: 'TrafficLights', start: 20, end: 100},
        ],
        texts: [
        { content: 'Kwezula', start: 2, end: 2, class: 'countryname countryname3' }
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
  
  .bluepoint {
    width: 120%;
    height: 120%;
    background-color: blue;
    transition: 0.3s;
 }

 .bluebigger {
    transform: scale(1.5);
 }

 .TrafficLights {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: all 1s ease; /* Assurez-vous que toutes les propriétés changent de manière fluide */
}

 </style> 
  