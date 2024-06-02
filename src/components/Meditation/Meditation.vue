<template>
  <div class="meditation-app">
    <audio ref="audio" :src="MeditationAudio" />
    <button v-if="isMobile && !audioReady" @click="initializeAudio" class="start-button">Start</button>
    <MeditationDraggable
      :src="babouchka"
      :appearanceTime="2000"
      :duration="5000"
      :width="200"
      :height="200"
      additionalClass="babouchka-position"
    />
    <MeditationDraggable
      :src="tree1"
      :appearanceTime="3000"
      :duration="8000"
      :width="400"
      :height="400"
      additionalClass="tree1-position"
    />
    <MeditationDraggable
      :src="house"
      :appearanceTime="6000"
      :duration="20000"
      :width="400"
      :height="400"
      additionalClass="house-position"
    />
    <MeditationDraggable
      :src="'https://i.pinimg.com/originals/54/d3/ae/54d3ae04cae803cafc21389dfd31fc88.gif'"
      :appearanceTime="10000"
      :duration="20000"
      :width="200"
      :height="200"
      additionalClass="sun-position"
    />
    <TrafficLightDraggable
      lightType="red"
      :appearanceTime="11000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-red"
    />
    <TrafficLightDraggable
      lightType="orange"
      orangeRoute="notsimilar"
      :appearanceTime="10000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-orange"
    />
    <TrafficLightDraggable
      lightType="green"
      greenRoute="similar"
      :appearanceTime="9000"
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
      subtitles: [
        { text: 'Welcome to the meditation session', appearanceTime: 0, duration: 5 },
        { text: 'Focus on your breathing', appearanceTime: 7, duration: 8 },
        { text: 'Let go of your thoughts', appearanceTime: 15, duration: 4 },
        // Add more subtitles as needed
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

.babouchka-position {
  top: 80%;
  left: 80%;
}

.tree1-position {
  top: 20%;
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
