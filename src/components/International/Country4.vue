<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>
  
  <script>
    import EventBus from '../../eventBus';
    import BaseCountry from './BaseCountry.vue';
    import flagzhequiang from '@/assets/International/images/flagzhequiang.webp'
    const Idontlikeyouimg = 'https://media.tenor.com/SI8lrqPtSeQAAAAj/i-dont-like-you-detective-mulligan.gif';
    import Chineseman1 from '@/assets/International/sounds/chineseman.mp3'
    import BorderSVG from '@/assets/International/svg/border.svg'
    const Chinesewall = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3NoazFpZWJ6aWFiNmgyenJnOThzOW54dGg0cjQzcndzcDRndGtydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aTnUj30mS6gFVDO/giphy.gif'

    
    const CommunismRabbit = 'https://media1.tenor.com/m/X1_F13WBLHsAAAAd/coelho-comunista.gif'
    import MaoZedongSong from '@/assets/International/sounds/maozedongmusic.mp3'
    import Population from '@/assets/International/svg/population.webp'

    const CatCommunism = 'https://media.tenor.com/hlSpNW4l9joAAAAj/very-funny-huh.gif'
    import CatCommunismHuh from '@/assets/International/sounds/huhcat.mp3'


    const MassProduction = 'https://media1.tenor.com/m/MJy-i6Vs7i8AAAAd/gif.gif'
    import ChinaPattern from '@/assets/International/svg/chinapattern.svg'
    import JohnCenaSound from '@/assets/International/sounds/johncena.mp3'
    const MaritimeTransportMap = 'https://cdn.vox-cdn.com/thumbor/kGJbQracNCYNWm_2yqB2is3tBp8=/0x0:789x437/1200x0/filters:focal(0x0:789x437):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6386873/Screen_Shot_2016-04-25_at_2.43.07_PM.0.png'


    const XiJinpingWalk = 'https://media1.tenor.com/m/Kz0RVtGEcl4AAAAd/xi-jinping.gif'
    import SocialCreditSiren from '@/assets/International/sounds/socialcreditsiren.mp3'
    const SocialCreditMeme = 'https://media1.tenor.com/m/LBrPvE_WJUkAAAAd/corre-social-credit.gif'
    const ChinaArmy = 'https://media1.tenor.com/m/cmoSSFcZk9UAAAAd/military-parade.gif'


    const JohnCena = 'https://media1.tenor.com/m/dHCK7XkcGzUAAAAd/john-cena.gif'

  
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
        {src: flagzhequiang, start: 1, end: 2, class: 'flag', animation : {className: 'littleflag', start: 2, end: 2}},
        {src: Idontlikeyouimg, start: 4, end: 6, class: 'Idontlikeyouimg1'},
        {src: Idontlikeyouimg, start: 4, end: 6, class: 'Idontlikeyouimg2'},
        {src: Idontlikeyouimg, start: 3, end: 6, class: 'Idontlikeyouimg3'},
        {src: BorderSVG, start: 5, end: 9, class: 'BorderSVG'},
        {src: Chinesewall, start: 5, end: 8, class: 'ChineseWall1'},
        {src: Chinesewall, start: 5, end: 8, class: 'ChineseWall2'},
        {src: Chinesewall, start: 5, end: 8, class: 'ChineseWall3'},
        {src: CommunismRabbit, start: 8, end: 10, class: 'CommunistRabbit'},
        {src: Population, start: 7, end: 11, class: 'Population'},
        {src: MassProduction, start: 9, end: 13, class: 'MassProduction'},
        {src: ChinaPattern, start: 11, end: 19, class: 'ChinaPattern'},
        {src: MaritimeTransportMap, start: 12, end: 16, class: 'MaritimeTransportMap'},
        {src: XiJinpingWalk, start: 13, end: 18, class: 'XiJinpingWalk'},
        {src: CatCommunism, start: 9, end: 12, class: 'CatCommunism'},
        {src: JohnCena, start: 14, end: 18, class: 'JohnCena'},
        {src: SocialCreditMeme, start: 16, end: 19, class: 'SocialCreditMeme'},
        {src: ChinaArmy, start: 17, end: 19, class: 'ChinaArmy'},





        { src : nukehand, start: 18, end: 19, class: 'nukehand'},
          { src: nuke2, start: 19, end: 21, class: 'nuke1'},
          { src: nuke1, start: 18, end: 20, class: 'nuke2'},
          { src: nuke1, start: 19, end: 22, class: 'nuke3'},

        ],
        sounds: [
        {src: Chineseman1, start: 3, end: 30, class: 'Idontlikeyouimg3'},
        {src: MaoZedongSong, start: 9, end: 30, class: 'MaoZedongSong'},
        {src: CatCommunismHuh, start: 7, end: 30, class: 'CatCommunismHuh'},
        {src: JohnCenaSound, start: 14, end: 25, class: 'JohnCenaSound'},
        {src: SocialCreditSiren, start: 17, end: 26, class: 'SocialCreditSiren'},
        
        ],
        videos: [
          // Vidéos spécifiques à ce pays
        ],
        styles: [
        { class: 'TrafficLights', start: 20, end: 100},
          ],
        texts: [
        { content: 'Zhequiang', start: 2, end: 2, class: 'countryname countryname4' }
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

.Idontlikeyouimg1, .Idontlikeyouimg2, .Idontlikeyouimg3 {
  filter: brightness(1.2);
  position: absolute;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.Idontlikeyouimg1 {
  height: 40%;
  left: -15%;
}

.Idontlikeyouimg2 {
  height: 40%;
  right: 20%;
  top: -20%;
  transform: rotate(40deg);
}

.Idontlikeyouimg3 {
  height: 40%;
  left: -10%;
  top: -20%;
  transform: rotate(20deg);
}

.frontierclosed {
    width: 130%;
    height: 120%;
    background-color: rgb(246, 255, 0);
    transition: 0.3s;
    left: -10%;
    bottom: 0;
    border: 5px solid black;
    animation: frontierborder;
 }

 .frontierborder {
    border: 150px solid black;
    width: 90%;
    height: 90%;
 }

 .ChineseWall1 {
  position: absolute;
  top: -20%;
  left: 5%;
  width: 40%; /* Ajustez la taille selon vos besoins */
  height: auto;
  transition: transform 2s ease, filter 2s ease;
}

.ChineseWall2 {
  position: absolute;
  top: -30%;
  left: 50%;
  width: 30%; /* Ajustez la taille selon vos besoins */
  height: auto;
  transition: transform 5s ease, filter 0.5s ease;
}

.ChineseWall3 {
  position: absolute;
  top: 30%;
  left: -10%;
  width: 30%; /* Ajustez la taille selon vos besoins */
  height: auto;
  transition: transform 0.9s ease, filter 0.9s ease;
  transform: rotate(360deg) ;
}


.BorderSVG {
  height: 140%;
  width: 150%;
  transition: 1s;
}

.CommunistRabbit {
  width: 120%;
  height: 120%;
}

.Population {
 z-index: 0;
 width: 100%;
 height: 100%;
 opacity: 30%;
}

.MassProduction {
 width:  50%;
 right: 0;
 bottom: 0;
}

.CatCommunism {
  width: 60%;
  left: -100%;
  top: -100%;
}

.ChinaPattern {
  z-index: -1;
  opacity: 100%;
}

.MaritimeTransportMap {
  width: 50%;
  left: -30%;
  top: -20%;
}

.XiJinpingWalk {
  width: 60%;
  bottom: 10%;
  left: 0;
}

.SocialCreditMeme {
  width: 30%;
  top: -10%;
}

.JohnCena {
  width: 30%;
  top: -20%;
  right: 0;
}

.ChinaArmy {
  right: 10%;
  bottom: 10%;
}


@media (max-width: 600px) {

  .Idontlikeyouimg1, .Idontlikeyouimg2, .Idontlikeyouimg3 {
  filter: brightness(1.2);
  position: absolute;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.Idontlikeyouimg1 {
  height: 40%;
  left: -40%;
  bottom: 20%;
}

.Idontlikeyouimg2 {
  height: 40%;
  right: -10%;
  top: -20%;
  transform: rotate(50deg);
}

.Idontlikeyouimg3 {
  height: 30%;
  left: -30%;
  top: -20%;
  transform: rotate(30deg);
}


 .ChineseWall1 {
  position: absolute;
  top: 10%;
  left: -20%;
  width: 60%; /* Ajustez la taille selon vos besoins */
  height: auto;
  transition: transform 2s ease, filter 2s ease;
}

.ChineseWall2 {
  position: absolute;
  top: -10%;
  left: 50%;
  width: 70%; /* Ajustez la taille selon vos besoins */
  transition: transform 2s ease, filter 0.5s ease;
}

.ChineseWall3 {
  position: absolute;
  top: 70%;
  left: -10%;
  width: 70%; /* Ajustez la taille selon vos besoins */
  height: auto;
  transition: transform 0.9s ease, filter 0.9s ease;
  transform: rotate(360deg) ;
}


.BorderSVG {
  height: 200%;
  width: 250%;
  left: -50%;
  bottom: -50%;
  transition: 1s;
}

.CommunistRabbit {
  width: 120%;
  height: 120%;
}

.Population {
 z-index: 0;
 width: 100%;
 height: 100%;
 opacity: 30%;
}

.MassProduction {
 width:  100%;
 right: 0;
 bottom: 10%;
}

.ChinaPattern {
  z-index: -1;
  width: 150%;
  opacity: 100%;
}

.MaritimeTransportMap {
  width: 100%;
  left: -30%;
  top: 0%;
}

.XiJinpingWalk {
  width: 90%;
  bottom: 0%;
  left: 0;
}

.JohnCena {
  width: 60%;
  top: -10%;
  right: 0;
}

.SocialCreditMeme {
  width: 70%;
  top: 30%;
}


.ChinaArmy {
  left: -30%;
  top: 0%;
  width: 80%;
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
  