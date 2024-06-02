<template>
  <div class="meditation-app">
    <audio ref="audio" :src="MeditationAudio" />
    <button v-if="isMobile && !audioReady" @click="initializeAudio" class="start-button">Start</button>
    <MeditationDraggable
      :src="'https://images.vexels.com/media/users/3/126615/isolated/preview/c5989809e0bb7b8c780aa6c4d85c5653-buddhistische-meditationspose-ikone.png'"
      :appearanceTime="2000"
      :duration="20000"
      :width="400"
      :height="400"
      additionalClass="person-sit"
    />
    <MeditationDraggable
      :src="'https://static.vecteezy.com/system/resources/previews/012/996/221/original/beautiful-lotus-flower-transparent-png.png'"
      :appearanceTime="8000"
      :duration="29000"
      :width="400"
      :height="400"
      additionalClass="flower-lotus"
    />
    <MeditationDraggable
      :src="RelievedFaceEmoji"
      :appearanceTime="16000"
      :duration="19000"
      :width="200"
      :height="200"
      additionalClass="relieved-face-emoji"
    />
    <MeditationDraggable
      :src="'https://autocollant-sticker.com/2026-thickbox_default/arbre-de-vie.jpg'"
      :appearanceTime="22000"
      :duration="10000"
      :width="300"
      :height="300"
      additionalClass="tree-life"
    />
    <MeditationDraggable
      :src="'https://i.pinimg.com/originals/82/b0/d9/82b0d91458e8291ddf1529f14c171c1d.png'"
      :appearanceTime="25000"
      :duration="15000"
      :width="200"
      :height="200"
      additionalClass="shakra-1"
    />








    
    <MeditationDraggable
      :src="tree1"
      :appearanceTime="43000"
      :duration="80000"
      :width="400"
      :height="400"
      additionalClass="tree1-position"
    />

    <MeditationDraggable
      :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1GCdUjS2ab-UbfqhGmkTIPTAQRRC8b8hlQ&s'"
      :appearanceTime="50000"
      :duration="65000"
      :width="300"
      :height="300"
      additionalClass="tree2-position"
    />
    <MeditationDraggable
      :src="'https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-green-tree-plant-forest-png-image_11716383.png'"
      :appearanceTime="58000"
      :duration="60000"
      :width="200"
      :height="200"
      additionalClass="tree3-position"
    />
    <MeditationDraggable
      :src="tree1"
      :appearanceTime="67000"
      :duration="60000"
      :width="300"
      :height="300"
      additionalClass="tree4-position"
    />
    <MeditationDraggable
      :src="house"
      :appearanceTime="51000"
      :duration="64000"
      :width="400"
      :height="400"
      additionalClass="house-position"
    />
    <MeditationDraggable
      :src="'https://i.pinimg.com/originals/54/d3/ae/54d3ae04cae803cafc21389dfd31fc88.gif'"
      :appearanceTime="47000"
      :duration="70000"
      :width="200"
      :height="200"
      additionalClass="sun-position"
    />
    <MeditationDraggable
      :src="famille"
      :appearanceTime="50000"
      :duration="42000"
      :width="400"
      :height="400"
      additionalClass="famille"
    />
    <MeditationDraggable
      :src="collines"
      :appearanceTime="55000"
      :duration="67000"
      :width="1000"
      :height="500"
      additionalClass="collines-1"
    />

    <MeditationDraggable
      :src="river"
      :appearanceTime="65000"
      :duration="50000"
      :width="700"
      :height="400"
      additionalClass="river-1"
    />
    <MeditationDraggable
      :src="birdsbackground"
      :appearanceTime="60000"
      :duration="50000"
      :width="300"
      :height="300"
      additionalClass="birds-background"
    />

    <MeditationDraggable
      :src="babouchka"
      :appearanceTime="62000"
      :duration="40000"
      :width="150"
      :height="150"
      additionalClass="babouchka-position"
    />

    <MeditationDraggable
      :src="'https://cdni.iconscout.com/illustration/premium/thumb/kid-birthday-party-9484053-7710789.png?f=webp'"
      :appearanceTime="105000"
      :duration="13000"
      :width="200"
      :height="200"
      additionalClass="birthday-position"
    />













    <TrafficLightDraggable
      lightType="red"
      :appearanceTime="274000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-red"
    />
    <TrafficLightDraggable
      lightType="orange"
      orangeRoute="notsimilar"
      :appearanceTime="273000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-orange"
    />
    <TrafficLightDraggable
      lightType="green"
      greenRoute="similar"
      :appearanceTime="272000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-green"
    />
    <MeditationSubtitles :subtitles="subtitles" />
    <MeditationCircle
      v-if="audioReady"
      :audioRef="$refs.audio"
      :appearanceTime="1000"
      :duration="500000"
      :initialDiameter="40"
      additionalClass="circle-position"
    />
  </div>
</template>



<script>
import MeditationDraggable from './MeditationDraggable.vue';
import TrafficLightDraggable from './TrafficLightDraggable.vue';
import MeditationSubtitles from './MeditationSubtitles.vue';
import babouchka from '@/assets/Meditation/Youth/babouchka.png';
import tree1 from '@/assets/Meditation/Youth/tree1.png';
import house from '@/assets/Meditation/Youth/house.png';
import famille from '@/assets/Meditation/Youth/famille.webp'
import RelievedFaceEmoji from '@/assets/Meditation/Youth/relievedfaceemoji.png'
import birdsbackground from '@/assets/Meditation/Youth/birdsbackground.png'
import collines from '@/assets/Meditation/Youth/collines.png'
import river from '@/assets/Meditation/Youth/river.png'




import MeditationAudio from '@/assets/Meditation/MeditationAudioFull.mp3';
import MeditationCircle from './MeditationCircle.vue';


export default {
  name: 'Meditation',
  components: {
    MeditationDraggable,
    TrafficLightDraggable,
    MeditationSubtitles,
    MeditationCircle,

  },
  data() {
    return {
      babouchka,
      tree1,
      house,
      MeditationAudio,
      RelievedFaceEmoji,
      famille,
      birdsbackground,
      collines,
      river,
      subtitles: [
        { text: 'Welcome to this meditation session.', appearanceTime: 0, duration: 6 },
        { text: 'This session is aimed at your relaxation.', appearanceTime: 6, duration: 5 },
        { text: 'Together, we will try to help you reach the state of well-being.', appearanceTime: 12, duration: 6 },
        { text: 'You will see symbols and objects on the screen.', appearanceTime: 19, duration: 5 },
        { text: 'Take them, move them around.', appearanceTime: 25, duration: 4 },
        { text: 'Play with them.', appearanceTime: 29, duration: 2 },
        { text: 'This will relax you.', appearanceTime: 33, duration: 3 },
        { text: 'Ready?', appearanceTime: 36, duration: 2 },
        { text: 'Let’s begin.', appearanceTime: 38, duration: 2 },
        { text: 'Try to remember your childhood.', appearanceTime: 42, duration: 4 },
        { text: 'Your family.', appearanceTime: 48, duration: 3 },
        { text: 'The path to school.', appearanceTime: 53, duration: 3 },
        { text: 'You can take the objects and arrange them on the screen to tell a story.', appearanceTime: 57, duration: 7 },
        { text: 'Create a forest with the trees.', appearanceTime: 67, duration: 4 },
        { text: 'Place the house in the grass, next to the river and the forest.', appearanceTime: 75, duration: 6 },
        { text: "That's good.", appearanceTime: 84, duration: 3 },
        { text: 'And remember your childhood.', appearanceTime: 87, duration: 3 },
        { text: 'Dive into your memories…', appearanceTime: 91, duration: 3 },
        { text: 'Imaginary stories.', appearanceTime: 97, duration: 3 },
        { text: 'The birthdays of your friends.', appearanceTime: 103, duration: 4 },
        { text: 'The toys that brought you so much joy.', appearanceTime: 110, duration: 4 },
        { text: 'Then you grew up, you became more serious.', appearanceTime: 121, duration: 4 },
        { text: 'You understood that life was not just a game.', appearanceTime: 128, duration: 5 },
        { text: 'You have to go to work.', appearanceTime: 134, duration: 3 },
        { text: 'You have to earn money.', appearanceTime: 139, duration: 3 },
        { text: 'You have to start a family.', appearanceTime: 144, duration: 3 },
        { text: 'You didn’t like that.', appearanceTime: 151, duration: 3 },
        { text: 'You were no longer yourself.', appearanceTime: 156, duration: 4 },
        { text: 'And you lived like that for far too long.', appearanceTime: 162, duration: 4 },
        { text: 'It is important to go through these stages in meditation.', appearanceTime: 170, duration: 6 },
        { text: 'You must feel these different emotions.', appearanceTime: 177, duration: 4 },
        { text: 'Innocence and then maturity.', appearanceTime: 181, duration: 4 },
        { text: 'You need to understand how you feel.', appearanceTime: 187, duration: 4 },
        { text: 'Meditation is here to support you.', appearanceTime: 193, duration: 4 },
        { text: 'To accompany you in your quest for well-being.', appearanceTime: 199, duration: 4 },
        { text: 'For infinite happiness.', appearanceTime: 205, duration: 3 },
        { text: 'Breathe deeply.', appearanceTime: 212, duration: 3 },
        { text: 'Then exhale.', appearanceTime: 218, duration: 3 },
        { text: 'Very good.', appearanceTime: 222, duration: 2 },
        { text: 'I like it when you obey my commands.', appearanceTime: 227, duration: 4 },
        { text: 'Remember.', appearanceTime: 233, duration: 2 },
        { text: 'I am here to support you.', appearanceTime: 235, duration: 4 },
        { text: 'Thanks to me, you will feel better.', appearanceTime: 240, duration: 4 },
        { text: 'You will finally be able to sleep peacefully.', appearanceTime: 247, duration: 5 },
        { text: 'Feel good.', appearanceTime: 253, duration: 2 },
        { text: 'Sleep for eternity.', appearanceTime: 258, duration: 3 },
        { text: 'for eternity.', appearanceTime: 263, duration: 2 },
        { text: 'for eternity.', appearanceTime: 267, duration: 2 },
        { text: 'for eternity.', appearanceTime: 271, duration: 2 },
      ],
      audioReady: false
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768; // Example breakpoint for mobile devices
    }
  },
  methods: {
    initializeAudio() {
      this.$refs.audio.play().then(() => {
        this.audioReady = true;
      }).catch(error => {
        console.error("Audio play failed: ", error);
      });
    }
  },
  mounted() {
    if (!this.isMobile) {
      this.$refs.audio.addEventListener('canplaythrough', () => {
        this.audioReady = true;
        this.$refs.audio.play();
      });
    }
  }
};
</script>


<style scoped>


.meditation-app {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}


.river-1 {
  top: 80%;
  left: 70%;
}

.collines-1 {
  top: 80%;
  left: 30%;
}
.birthday-position {
  top: 30%;
  left: 40%;
}

.birds-background {
  top: 50%;
  right: 5%;
}

.famille {
  top: 20%;
  left: 30%;
}
.babouchka-position {
  top: 80%;
  left: 80%;
}

.tree1-position {
  top: 20%;
  left: 20%;
}
.tree2-position {
  top: 30%;
  left: 80%;
}
.tree3-position {
  top: 60%;
  left: 10%;
}
.tree4-position {
  top: 70%;
  left: 20%;
}

.house-position {
  top: 50%;
  left: 40%;
}

.sun-position {
  top: 20%;
  left: 70%;
}

.tree-life {
  top: 80%;
  left: 80%;
}

.person-sit {
  top: 50%;
  left: 50%;
}

.flower-lotus {
  top: 20%;
  left: 20%;
}

.relieved-face-emoji {
  top: 70%;
  left: 30%;
}

.shakra-1 {
  top: 15%;
  left: 80%;
}



.traffic-light-red {
  bottom: 20%;
  left: 60%;
}

.traffic-light-orange {
  bottom: 50%;
  left: 20%;
}

.traffic-light-green {
  top: 10%;
  right: 20%;
}

.start-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1000;
}
</style>
