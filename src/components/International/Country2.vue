<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>  
  
  <script>
  import EventBus from '../../eventBus';
  import BaseCountry from './BaseCountry.vue';
  import flagharmonia from '@/assets/International/images/flagharmonia.webp'

  const Friends = 'https://media1.tenor.com/m/e-msDFGlCU0AAAAd/hello.gif'
  import AnimalCrossing from '@/assets/International/sounds/animal-crossing.mp3'
  

  import SubwaySurfers from '@/assets/International/sounds/subway-surfers.mp3'
  const Education = 'https://media.tenor.com/cj9DCDCk-rAAAAAj/wikipedia-wiki.gif'
  const Maths = 'https://media1.tenor.com/m/SXYU8BG983IAAAAd/melissabug-thinking.gif'
  import HarmoniaPattern from '@/assets/International/svg/earthpattern.svg'

  const IAmChill = 'https://media1.tenor.com/m/2yueWwSxqAgAAAAd/frog-lily.gif'
  const CitizensOfTheWorld = 'https://tenor.com/en-GB/view/moveon-foreign-policy-united-nations-day-united-nations-un-gif-23484079'
  const FalseBorders = 'https://tenor.com/en-GB/view/spongebob-spongebob-rainbow-spongebob-imagination-borders-are-a-social-construct-moveon-gif-23493321'
  
  import TheFuture from '@/assets/International/sounds/the-future-is-ours-to-decide.mp3'
  const GrowingCity = 'https://lh3.googleusercontent.com/-NBFy10FBq2Q/UTtqy4BFUaI/AAAAAAAAAFE/Pau6AlX24Hk/s500/timelapselow.gif'
  const FutureCity = 'https://tenor.com/en-GB/view/mundo-feliz-onetreehsll-world-if-gif-14071235670792471304'


  const WorriedCat = 'https://media.tenor.com/h4Jp8GaeC5cAAAAj/huh-what.gif'
  const Fearful = 'https://media.tenor.com/mB9GZ2qW9rQAAAAj/boa-noite.gif'
  import Whatisgoingon from '@/assets/International/sounds/whatisgoingon.mp3'

  import nobodycares from '@/assets/International/sounds/nobodycares.mp3'
  const nobodycaresgif = 'https://media.tenor.com/sPGE00PcxlYAAAAj/nobody-cares-text.gif';

  const Surrendering = 'https://tenor.com/en-GB/view/surrender-give-up-포기하다-항복-항복하다-gif-2238169736073519114'





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
        { src: flagharmonia, start: 1, end: 2, class: 'flag', animation: { className: 'littleflag', start: 2, end: 2 } },
        { src: nobodycaresgif, start: 3, end: 4, class: 'nobodycaresimg' },
        { src: nukehand, start: 18, end: 19, class: 'nukehand' },
        { src: nuke1, start: 19, end: 21, class: 'nuke' },
        { src: nuke1, start: 18, end: 20, class: 'nuke2' },
        { src: nuke2, start: 19, end: 22, class: 'nuke3' },
      ],
      sounds: [
        { src: nobodycares, start: 3, end: 4, class: 'nobodycaresaudio' },
        { src: CommunistAlert, start: 18, end: 25, class: 'communistalert' },
      ],
      videos: [
        // Vidéos spécifiques à ce pays
      ],
      styles: [
        { class: 'TrafficLights', start: 20, end: 100 },
      ],
      texts: [
        { content: 'Harmonia', start: 2, end: 2, class: 'countryname countryname2' },
        { content: 'Hey guys, do you want to be friends with our country', start: 3, end: 5, class: 'doyouwanttobefriends'},
        { content: 'GUYS, Stop doing this!! We can still be friends', start: 6, end: 9, class: 'doyouwanttobefriends'}
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

.greenpoint {
    width: 120%;
    height: 120%;
    background-color: rgb(0, 255, 0);
    transition: 0.3s;
 }

 .greenbigger {
    transform: scale(1.5);
 }

 .nobodycaresimg {
  left: 20%;
  height: 20%;
  transform: rotate(360deg);
  transition: 1s ease;
}

.TrafficLights {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: all 1s ease; /* Assurez-vous que toutes les propriétés changent de manière fluide */
}

</style>

  
 
  