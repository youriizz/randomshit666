<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>
  
  <script>
  import EventBus from '../../eventBus';
  import BaseCountry from './BaseCountry.vue';
import TrafficLight from '../TrafficLight.vue';
import explosion from '@/assets/International/images/explosion.gif'
import softpower from '@/assets/International/images/softpower.gif'
import flagwestalia from '@/assets/International/images/flagwestalia.webp'


  const ColonialismMap = 'https://media1.tenor.com/m/289h6FnKs3AAAAAd/travel-time.gif'
  const ColonialMapAfrica = 'https://mavunoharvest.com/cdn/shop/articles/Screen_Shot_2023-05-18_at_6.49.36_AM_704x.png?v=1684407175'
  const Stealing = 'https://media1.tenor.com/m/_jHMKINZLOUAAAAd/steal-this-is-mine.gif'
  import Money from '@/assets/International/sounds/Money.mp3'
  const ColonialismPhoto = 'https://cdn.thecollector.com/wp-content/uploads/2022/11/colonial-argentina-patagonia-natives.jpg?width=1400&quality=70'

  const Democracy = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXBseWtwcngzcG92MXptYnV2eGpxdXoyNWZsMGQzbmg3dThiYWIwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0jPeMwdyYSWTsHUVmo/giphy.gif'
  import Democracysound from '@/assets/International/sounds/Democracy.mp3'
  import Mozart from '@/assets/International/sounds/mozart.mp3'
  
  import WestaliaPattern from '@/assets/International/images/westaliapattern.png'
  const Posh = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemM1dnVrMmhudnl6OHZ2cGNwNHJrMTk5ZzR1b2RzZzc1c2dmZDBxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dQrnLv1POHUH8dpoG8/200.webp'
  const Capitalism = 'https://media1.tenor.com/m/V2tK7_-dHiYAAAAd/animatedtext-animated.gif'

  import RobloxWii from '@/assets/International/sounds/RobloxWii.mp3'
  const TwinTowers = 'https://i.gifer.com/F0Wx.gif'
  const Angry = 'https://media1.tenor.com/m/WcI2X8ZyX_8AAAAd/hibag-salutationsbag.gif'
  const Healthcare = 'https://media1.tenor.com/m/ODwN_mzoi-cAAAAd/stop-nuclear-weapons-nti.gif'
  const President = 'https://media1.tenor.com/m/hJhKkmx-LR0AAAAd/bush-president.gif'
  import Avengers from '@/assets/International/sounds/Avengers.mp3'
  const Warfare = 'https://media1.tenor.com/m/ubi2CyF-uBwAAAAd/ww3-world-war3.gif'


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
          { src: ColonialismMap, start: 3, end: 5, class: 'colonialismmap'},
          { src: ColonialMapAfrica, start: 4, end: 6, class: 'colonialismmapafrica'},
          { src: Stealing, start: 4, end: 9, class: 'stealing'},
          { src: ColonialismPhoto, start: 5, end: 8, class: 'colonialismphoto'},
          { src: Democracy, start: 7, end: 11, class: 'democracy'},
          { src: WestaliaPattern, start: 9, end: 20, class: 'westaliapattern'},
          { src: Posh, start: 11, end: 14, class: 'posh'},
          { src: Capitalism, start: 12, end: 15, class: 'capitalism'},
          { src: softpower, start: 13, end: 14, class: 'softpower-image' },
          { src: TwinTowers, start: 14, end: 18, class: 'twintowers'},
          { src: Angry, start: 15, end: 20, class: 'angry'},
          { src: Healthcare, start: 15, end: 17, class: 'healthcare'},
          { src: President, start: 16, end: 19, class: 'president'},
          { src: Warfare, start: 17, end: 20, class: 'warfare'},



          
          { src: explosion, start: 18, end: 20, class: 'explosion-image', animation: {className: 'fade-in-out', start: 17, end: 19}},
          { src : nukehand, start: 18, end: 19, class: 'nukehand'},
          { src: nuke1, start: 19, end: 21, class: 'nuke1'},
          { src: nuke1, start: 18, end: 20, class: 'nuke2'},
          { src: nuke2, start: 19, end: 22, class: 'nuke3'},
        ],
        sounds: [
          { src: Money, start: 4, end: 9, class: 'moneysound' },
          { src: Democracysound, start: 9, end: 13, class: 'democracysound' },
          { src: Mozart, start: 9, end: 13, class: 'democracysound' },
          { src: RobloxWii, start: 14, end: 19, class: 'robloxwii'},
          { src: Avengers, start: 16, end: 22, class: 'avengers'},
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
.warfare {
  width: 50%;
  bottom: -20%;
}
.president {
}
.healthcare {
  width: 30%;
  left: -10%;
}
.angry {
  right: 0;
  width: 30%;
  bottom: -10%;
  transform: rotate(-30deg);

}
.twintowers {
  width: 60%;
  transform: rotate(-360deg);
  transition: 0.5s ease;
}
.capitalism {
  top: 0;
  width: 60%;
}

.softpower-image {
  bottom: 0;
  right: 0;
  width: 40%;
}
.posh {
  width: 40%;
  left: 10%;
  bottom: -10%;
}
.westaliapattern {
  z-index: -1;
  width: 100%;
}


.democracy {
 width: 60%;
 top: 0;
 right: 0%;
}
.colonialismphoto {
  width: 40%;
  transform: rotate(-30deg);
  bottom: -10%;
  left: 0%;
  transition: 1s ease;
}
.stealing {
  width: 40%;
  bottom: -20%;
}

.colonialismmapafrica {
  width: 30%;
  bottom: -60%;
  left: 20%;
  transition: 1s;
  transform: rotate(360deg);
  
}

.colonialismmap {
  width: 40%;
  bottom: -30%;
  right: -20%;
}

@media (max-width: 600px) {

  .warfare {
  width: 90%;
  bottom: -20%;
}
.president {
  width: 80%;
  bottom: -10%;
  left: 30%;
}
.healthcare {
  width: 50%;
  left: 0%;
  top: 0;
}
.angry {
  right: 0;
  width: 80%;
  bottom: -10%;
  transform: rotate(-30deg);

}
.twintowers {
  width: 140%;
  transform: rotate(-360deg);
  transition: 0.5s ease;
}
.capitalism {
  left: 0;
  width: 130%;
}

.softpower-image {
  bottom: 25%;
  right: -20%;
  width: 90%;
}
.posh {
  width: 80%;
  left: 10%;
  bottom: -5%;
}
.westaliapattern {
  z-index: -1;
  width: 140%;
  height: 100%;
}


.democracy {
 width: 100%;
 top: 10%;
 right: 0%;
}
.colonialismphoto {
  width: 100%;
  transform: rotate(0deg);
  bottom: 30%;
  left: 0%;
  transition: 1s ease;
}
.stealing {
  width: 70%;
  bottom: -30%;
  left: 0;
}

.colonialismmapafrica {
  width: 50%;
  bottom: -50%;
  left: 0%;
  transition: 1s;
  transform: rotate(360deg);
  
}

.colonialismmap {
  width: 70%;
  bottom: -20%;
  right: -25%;
}

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

@media (max-width: 600px) {
  .countryname {
    font-size: 23px;
  }
  
  
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
  width: 30%;
  left: 10%;
  top: 30%;
}

.nuke2 {
  width: 40%;
  top: -20%;
  left: 0;
}

.nuke3 {
  width: 50%;
  left: 20%;
  transition: 1s;
  transform: perspective(30deg);
}

@media (max-width: 600px) {
  .nuke1 {
  width: 90%;
  left: 10%;
  top: 30%;
}

.nuke2 {
  width: 90%;
  top: -20%;
  left: 0;
}

.nuke3 {
  width: 70%;
  left: 20%;
  transition: 1s;
  transform: perspective(30deg);
}

  
}

.TrafficLights {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: all 1s ease; /* Assurez-vous que toutes les propriétés changent de manière fluide */
}



</style>
  