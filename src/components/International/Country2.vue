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
  import TheBestDrop from '@/assets/International/sounds/best-beat-drop-in-human-history.mp3'
  const Citizens = 'https://media.tenor.com/sPwYxT9KqZEAAAAj/the-united-nations-is-our-one-great-hope-for-a-peaceful-moveon.gif'
  const FalseBorders = 'https://media1.tenor.com/m/rgrem9AcbVAAAAAd/maravillosodia-girl.gif'
  
  import TheFuture from '@/assets/International/sounds/the-future-is-ours-to-decide.mp3'
  const GrowingCity = 'https://lh3.googleusercontent.com/-NBFy10FBq2Q/UTtqy4BFUaI/AAAAAAAAAFE/Pau6AlX24Hk/s500/timelapselow.gif'
  const FutureCity = 'https://media1.tenor.com/m/w0cSSjxkAwgAAAAd/mundo-feliz-onetreehsll.gif'


  const WorriedCat = 'https://media.tenor.com/h4Jp8GaeC5cAAAAj/huh-what.gif'
  const Fearful = 'https://media.tenor.com/mB9GZ2qW9rQAAAAj/boa-noite.gif'
  import Whatisgoingon from '@/assets/International/sounds/whatisgoingon.mp3'

  import nobodycares from '@/assets/International/sounds/nobodycares.mp3'
  const nobodycaresgif = 'https://media.tenor.com/sPGE00PcxlYAAAAj/nobody-cares-text.gif';

  const Surrendering = 'https://media.tenor.com/Hw-ThEGxIAoAAAAi/surrender-give-up.gif'





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
        { src: Friends, start: 4, end: 7, class: 'friends' },
        { src: Education, start: 6, end: 9, class: 'education' },
        { src: Maths, start: 7, end: 11, class: 'maths' },
        { src: HarmoniaPattern, start: 9, end: 20, class: 'harmoniapattern' },
        { src: IAmChill, start: 10, end: 13, class: 'iamchill' },
        { src: Citizens, start: 11, end: 15, class: 'citizens' },
        { src: FalseBorders, start: 12, end: 15, class: 'falseborders' },
        { src: GrowingCity, start: 13, end: 15, class: 'growingcity' },
        { src: FutureCity, start: 14, end: 15, class: 'futurecity' },
        { src: WorriedCat, start: 16, end: 19, class: 'worriedcat' },
        { src: Fearful, start: 17, end: 20, class: 'fearful' },
        { src: Surrendering, start: 17, end: 20, class: 'surrendering' },



        { src: nobodycaresgif, start: 17, end: 19, class: 'nobodycaresimg' },
        { src: nukehand, start: 18, end: 19, class: 'nukehand' },
        { src: nuke1, start: 19, end: 21, class: 'nuke1' },
        { src: nuke1, start: 18, end: 20, class: 'nuke2' },
        { src: nuke2, start: 19, end: 22, class: 'nuke3' },
      ],
      sounds: [
      { src: AnimalCrossing, start: 3, end: 9, class: 'animalcrossing' },
      { src: SubwaySurfers, start: 5, end: 9, class: 'subwaysurfers' },
      { src: TheBestDrop, start: 10, end: 15, class: 'thebestdrop' },
      { src: TheFuture, start: 16, end: 16, class: 'thefuture' },
      { src: Whatisgoingon, start: 16, end: 25, class: 'whatisgoingon' },
        { src: nobodycares, start: 16, end: 25, class: 'nobodycaresaudio' },
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
        { content: 'Hey guys, do you want to be friends with our country??', start: 3, end: 5, class: 'doyouwanttobefriends'},
        { content: 'GUYS, Stop doing this!! We can still be friends', start: 16, end: 19, class: 'doyouwanttobefriends'}
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
.nobodycaresimg {
  left: -20%;
  top: 0;

}
.surrendering {
  right: 0;
}
.fearful {
  width: 40%;
  bottom: -10%;
}
.worriedcat {
  left: 0;
  bottom: 0;
}
.futurecity {
  width: 50%;
  right: 0;
}
.growingcity {
  width: 40%;
  left: 0;
  top: 0;
}
.falseborders {
  width: 40%;
  left: 10%;
  top: 0;
}
.citizens {
  width: 50%;
  left: -20%;
  bottom: -10%;
  z-index: 1;

}
.iamchill {
  width: 30%;
  right: 10%;
  transform: rotate(380deg);
  transition: 2s;
}
.harmoniapattern {
  z-index: -1;
  width: 120%;
}
.maths {
  width: 40%;
  top: 0;
  left: 20%;
}
.education {
 width: 50%;
 right: 0;
}

.friends {
  width: 50%;
  left: -15%;
  bottom: -15%;
}

@media (max-width: 600px) {
  

  .nobodycaresimg {
  left: -20%;
  top: 0;

}
.surrendering {
  right: -10%;
  width: 140%;

}
.fearful {
  width: 40%;
  bottom: -10%;
}
.worriedcat {
  left: -10%;
  bottom: 0;
  width: 70%;

}
.futurecity {
  width: 90%;
  bottom: 10%;
}
.growingcity {
  width: 80%;
  left: 0;
  top: 20%;
}
.falseborders {
  width: 60%;
  left: 10%;
  top: 0;
}
.citizens {
  width: 80%;
  left: -40%;
  bottom: -10%;
  z-index: 1;

}
.iamchill {
  width: 70%;
  right: 10%;
  bottom: -10%;
  transform: rotate(380deg);
  transition: 2s;
}
.harmoniapattern {
  z-index: -1;
  left: -10%;
  width: 250%;
  height: 120%;
}
.maths {
  width: 80%;
  top: 0;
  left: -10%;
}
.education {
 width: 80%;
 right: 0;
}

.friends {
  width: 80%;
  left: -35%;
  bottom: -15%;
}

}

.doyouwanttobefriends {
  position: absolute;
  font-size: clamp(20px, 7vw, 70px);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
  width: 50%;
  top: 0;
  right: 10%;
  transition: 1s;
  transform: rotate(360deg);
  z-index: 1;
}
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

  
 
  