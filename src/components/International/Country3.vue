<template>
    <BaseCountry :images="images" :sounds="sounds" :videos="videos" :styles="styles" :texts="texts" />
  </template>
  
  <script>
  import EventBus from '../../eventBus';
  import BaseCountry from './BaseCountry.vue';
  import flagkwezula from '@/assets/International/images/flagkwezula.webp'

  const GoodLookingGuy = 'https://media1.tenor.com/m/PB2AVQMB280AAAAd/african-dark.gif'

  const AmericanNative = 'https://media1.tenor.com/m/Uo0aVEQa1vkAAAAC/ryer-native-american.gif'
  import Slavery from '@/assets/International/sounds/slavery.mp3'
  const Slave = 'https://media1.tenor.com/m/8K2zKQrFT2EAAAAd/toby-kunta-kinte.gif'

  const WhiteGuyEating = 'https://media.tenor.com/f58yDgm4CT8AAAAj/ohio-would-have-all-have-the-resources-we-need-if-the-rich-contributed-what-they-owe-taxes.gif'
  import Thatyourefine from '@/assets/International/sounds/thatyourefine.mp3'
  import Sadviolin from '@/assets/International/sounds/sad-hamster.mp3'
  const TearsIndian = 'https://media1.tenor.com/m/MUsiaG6f9lgAAAAd/native-american.gif'
  const ColonizationIsTrauma = 'https://media0.giphy.com/media/Y33wmpgMgSavXeBlhU/200w.gif?cid=6c09b952kspsqcya246jlsgaw9mm79v08ii1ctchobcdhhhu&ep=v1_gifs_search&rid=200w.gif&ct=g'


  import FukThePolice from '@/assets/International/sounds/fukthepolice.mp3'
  const Riot = 'https://media1.tenor.com/m/yXvb1_auWTkAAAAd/rally-demonstration.gif'
  const Tiananmen = 'https://media1.tenor.com/m/Y34VZoyLViwAAAAd/janestree.gif'
  const HappyCat = 'https://media.tenor.com/CnP64S7lszwAAAAi/meme-cat-cat-meme.gif'


  const BushPresident = 'https://media1.tenor.com/m/uGuEdugia0AAAAAd/african-dancing.gif'
  const Dictature = 'https://media1.tenor.com/m/8Gk6cqp8aDwAAAAd/colonel-singala-singala.gif'
  

  const Cercueil = 'https://media1.tenor.com/m/-lef55uNCOMAAAAd/coffin-dance.gif'
  import DeathDance from '@/assets/International/sounds/coffindance.mp3'
  
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
        { src : GoodLookingGuy, start: 3, end: 5, class: 'goodlookingguy'},
        { src : AmericanNative, start: 4, end: 10, class: 'americannative'},
        { src : Slave, start: 5, end: 11, class: 'slave'},
        { src : WhiteGuyEating, start: 6, end: 11, class: 'whiteguyeating'},
        { src : TearsIndian, start: 8, end: 11, class: 'tearsindian'},
        { src : ColonizationIsTrauma, start: 10, end: 11, class: 'colonizationistrauma'},
        { src : Riot, start: 12, end: 16, class: 'riot'},
        { src : Tiananmen, start: 12, end: 14, class: 'tiananmen'},
        { src : HappyCat, start: 13, end: 15, class: 'happycat'},
        { src : Dictature, start: 15, end: 18, class: 'dictature'},
        { src : BushPresident, start: 16, end: 18, class: 'bushpresident'},
        { src : Cercueil, start: 17, end: 20, class: 'cercueil'},


        { src : nukehand, start: 18, end: 19, class: 'nukehand'},
          { src: nuke1, start: 19, end: 21, class: 'nuke1'},
          { src: nuke2, start: 18, end: 20, class: 'nuke2'},
          { src: nuke1, start: 19, end: 22, class: 'nuke3'},
        ],
        sounds: [
        { src: Slavery, start: 3, end: 30, class: 'slavery'},
        { src: Thatyourefine, start: 5, end: 11, class: 'thatyourefine'},
        { src: Sadviolin, start: 6, end: 11, class: 'sadviolin'},
        { src: FukThePolice, start: 12, end: 14, class: 'FukThePolice'},
        { src: DeathDance, start: 15, end: 30, class: 'deathdance'},
        


     { src: CommunistAlert, start: 18, end: 25, class: 'communistalert' },
        ],
        videos: [
          // Vidéos spécifiques à ce pays
        ],
        styles: [
          { class: 'TrafficLights', start: 20, end: 100},
        ],
        texts: [
        { content: 'Kwezula', start: 2, end: 2, class: 'countryname countryname3' },
        { content: 'Did you really think you were going to be free??', start: 15, end: 17, class: 'doyouwanttobefriends2' }
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
.cercueil {
  width: 100%;
  left: 20%;
}
.bushpresident {
  width: 40%;
  right: 0;
  top: -40%;
}
.dictature {
  width: 80%;
  left: -10%;
}
.happycat {
  width: 30%;
  right: 0;
  bottom: 0;
}
.tiananmen {
  width: 40%;
  bottom: 0;
  left: 20%;
}

.riot {
  width: 100%;
  top: -10%;
}
.colonizationistrauma {
    width: 30%;

}
  .tearsindian {
    width: 50%;
    right: 0;
  }
  .whiteguyeating {
    width: 40%;
    top: -40%;
    left: 40%;
  }
  .slave {
    width: 50%;
    left: 0;
  }
  .americannative {
    left: 10%;
    top: -100%;
    width: 35%;
  }
  .goodlookingguy {
    bottom: 0;
    right: -10%;
  }

  @media (max-width: 600px) {
    .cercueil {
  width: 150%;
  left: -20%;
}
.bushpresident {
  width: 80%;
  right: -20%;
  top: -10%;
  transition: 1s;
}
.dictature {
  width: 130%;
  left: -10%;
  bottom: 0;
  transition: 0.5s;
}
.happycat {
  width: 70%;
  left: 0;
  bottom: 0;
}
.tiananmen {
  width: 70%;
  bottom: 0;
  right: 10%;
}

.riot {
  width: 200%;
  top: 10%;
  left: -80%;
}
.colonizationistrauma {
    width: 60%;
    right: 10%;

}
  .tearsindian {
    width: 80%;
    right: 0;
    bottom: 0;
  }
  .whiteguyeating {
    width: 90%;
    top: -20%;
    left: 30%;
  }
  .slave {
    width: 70%;
    left: 0;
  }
  .americannative {
    left: 10%;
    top: -50%;
    width: 60%;
    transform: rotate(360deg);
    transition: 1s;
  }
  .goodlookingguy {
    width: 100%;
    bottom: 0;
    right: -10%;
  }
  }

  .doyouwanttobefriends2 {
  position: absolute;
  font-size: clamp(20px, 7vw, 70px);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
  color: white;
  width: 50%;
  top: 0;
  right: 10%;
  transition: 1s;
  transform: rotate(360deg);
  z-index: 1;
}


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
  