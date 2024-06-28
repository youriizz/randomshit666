<template>
    <div>
      <!-- Introduction Component -->
      <Introduction
        v-if="showIntroduction"
        :title="title"
        :description="description"
        :gestureType="['touch and hold']"
        :buttonText="startButtonText"
        :clickThrough="true"
        :orangeRoute="orangeRoute"
        :greenRoute="greenRoute"
        @start="handleStart"
      />
      <div 
        class="video-container" 
        v-if="!showIntroduction && !allVideosPlayed"
        @mousedown="startPlayback" 
        @mouseup="stopPlayback" 
        @mouseleave="stopPlayback"
        @touchstart.prevent="startPlayback"
        @touchend.prevent="stopPlayback"
        @contextmenu.prevent
      >
        <video ref="video" class="video-element" :src="currentVideoSrc" preload="metadata" @timeupdate="onTimeUpdate" @ended="onVideoEnd" playsinline controlslist="nodownload nofullscreen noremoteplayback" webkit-playsinline />
      </div>
      <div v-if="showTransition">
        <VideoTransition
          :imageSrc="videos[currentVideoIndex].transitionImage"
          :audioSrc="videos[currentVideoIndex].transitionAudio"
          :duration="transitionDuration"
          @transitionEnd="handleTransitionEnd"
        />
      </div>
      <div v-if="allVideosPlayed">
        <TrafficLight
          class="traffic-light"
          :orange-route="orangeRoute"
          :green-route="greenRoute"
          :relativeSize="true"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { nextTick, ref, computed } from 'vue';
  import video1 from '/HoldIt/abscomputer.mp4';
  import video1phone from '/HoldIt/absphone.mp4';
  import transition1 from '/HoldIt/transition1.png';
  import audio1 from '/HoldIt/transition1.mp3';
  import video2 from '/HoldIt/pregnancycomputer.mp4';
  import video2phone from '/HoldIt/pregnancyphone.mp4'; // Ajoutez d'autres vidéos ici
  import transition2 from '/HoldIt/transition2.png';
  import audio2 from '/HoldIt/dinosaur.mp3';
  import video3 from '/HoldIt/crashtestcomputer.mp4';
  import video3phone from '/HoldIt/crashtest.mp4';
  import transition3 from '/HoldIt/transition3.png';
  import audio3 from '/HoldIt/boing.mp3';
  import video4 from '/HoldIt/sun.mp4';
  import video4phone from '/HoldIt/sunphone.mp4'; // Ajoutez d'autres vidéos ici
  import transition4 from '/HoldIt/transition4.png';
  import audio4 from '/HoldIt/pulseambience.mp3';
  import video5 from '/HoldIt/signer.mp4';
  import video5phone from '/HoldIt/signerphone.mp4';
  import transition5 from '/HoldIt/transition5.png';
  import audio5 from '/HoldIt/goofy.mp3';
  import video6 from '/HoldIt/plants.mp4';
  import video6phone from '/HoldIt/plantsphone.mp4'; // Ajoutez d'autres vidéos ici
  import transition6 from '/HoldIt/transition6.png';
  import audio6 from '/HoldIt/sweep01.mp3';
  import video7 from '/HoldIt/house.mp4';
  import video7phone from '/HoldIt/housephone.mp4';
  import transition7 from '/HoldIt/transition7.png';
  import audio7 from '/HoldIt/boingcrowd.mp3';
  import video8 from '/HoldIt/buildings.mp4';
  import video8phone from '/HoldIt/buildingsphone.mp4'; // Ajoutez d'autres vidéos ici
  import transition8 from '/HoldIt/transition8.png';
  import audio8 from '/HoldIt/airplane.mp3';
  import video9 from '/HoldIt/twintowers.mp4';
  import video9phone from '/HoldIt/twintowersphone.mp4';
  import transition9 from '/HoldIt/transition9.png';
  import audio9 from '/HoldIt/arpeggio.mp3';
  import video10 from '/HoldIt/movies.mp4';
  import video10phone from '/HoldIt/moviesphone.mp4'; // Ajoutez d'autres vidéos ici
  import transition10 from '/HoldIt/transition10.png';
  import Introduction from '../GestureIndications/Introduction.vue';
  import TrafficLight from '../TrafficLight.vue';
  import VideoTransition from './VideoTransition.vue';
  
  export default {
    name: 'VideoPlayerComponent',
    components: {
      Introduction,
      TrafficLight,
      VideoTransition
    },
    setup() {
      const isMobile = ref(window.innerWidth <= 768);
  
      const handleResize = () => {
        isMobile.value = window.innerWidth <= 768;
      };
  
      window.addEventListener('resize', handleResize);
  
      return {
        isMobile
      };
    },
    data() {
      return {
        orangeRoute: 'notsimilar',
        greenRoute: 'similar',
        videos: [
          { src: video1, srcPhone: video1phone, transitionImage: transition1, transitionAudio: audio1 },
          { src: video2, srcPhone: video2phone, transitionImage: transition2, transitionAudio: audio2 },
          { src: video3, srcPhone: video3phone, transitionImage: transition3, transitionAudio: audio3 },
          { src: video4, srcPhone: video4phone, transitionImage: transition4,transitionAudio: audio4},
          { src: video5, srcPhone: video5phone, transitionImage: transition5,transitionAudio: audio5 },
          { src: video6, srcPhone: video6phone, transitionImage: transition6,transitionAudio: audio6 },
          { src: video7, srcPhone: video7phone, transitionImage: transition7,transitionAudio: audio7 },
          { src: video8, srcPhone: video8phone, transitionImage: transition8,transitionAudio: audio8 },
          { src: video9, srcPhone: video9phone, transitionImage: transition9,transitionAudio: audio9 },
          { src: video10, srcPhone: video10phone, transitionImage: transition10 },
          // Ajoutez d'autres vidéos ici
        ],
        currentVideoIndex: 0,
        isPlaying: false,
        accumulatedTime: 0,
        startTime: null,
        showMessage: false,
        showTransition: false,
        reverseInterval: null,
        showIntroduction: true,
        allVideosPlayed: false,
        title: 'Hold It',
        description: 'Duration : 1 Minute',
        startButtonText: 'Start',
        orangeRoute: 'notsimilar',
        greenRoute: 'similar',
        globalClickCount: 0,
        transitionDuration: 3000 // Durée par défaut de la transition
      };
    },
    computed: {
      currentVideoSrc() {
        return this.isMobile ? this.videos[this.currentVideoIndex].srcPhone || this.videos[this.currentVideoIndex].src : this.videos[this.currentVideoIndex].src;
      }
    },
    mounted() {
      nextTick(() => {
        this.preloadVideo(this.$refs.video);
      });
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      preloadVideo(video) {
        video.src = this.currentVideoSrc;
        video.load(); // Charge la vidéo pour garantir que la première frame est disponible
        video.onloadeddata = () => {
          video.pause(); // Met en pause immédiatement après le chargement
        };
      },
      handleStart() {
        this.showIntroduction = false;
        nextTick(() => {
          this.preloadVideo(this.$refs.video);
        });
      },
      startPlayback(event) {
        if (this.showMessage || this.showIntroduction) return; // Ne pas recommencer si la vidéo est déjà terminée ou si l'introduction est visible
        if (event.type === 'mousedown' || event.type === 'touchstart') {
          this.isPlaying = true;
          this.startTime = Date.now();
          this.$refs.video.play();
          if (this.reverseInterval) {
            clearInterval(this.reverseInterval);
            this.reverseInterval = null;
          }
        }
      },
      stopPlayback(event) {
        if (this.isPlaying && (event.type === 'mouseup' || event.type === 'touchend' || event.type === 'mouseleave')) {
          this.isPlaying = false;
          const elapsedTime = (Date.now() - this.startTime) / 1000; // Convertir en secondes
          this.accumulatedTime += elapsedTime;
          this.startTime = null;
          this.$refs.video.pause();
    
          if (this.$refs.video.currentTime < this.$refs.video.duration) {
            // Si la vidéo n'a pas été entièrement visionnée, jouer en arrière
            const durationToRewind = this.accumulatedTime;
            const intervalTime = 30; // temps d'intervalle en millisecondes
            let elapsedRewindTime = 0;
    
            this.reverseInterval = setInterval(() => {
              if (elapsedRewindTime >= durationToRewind || this.$refs.video.currentTime <= 0) {
                clearInterval(this.reverseInterval);
                this.reverseInterval = null;
                this.accumulatedTime = 0;
              } else {
                this.$refs.video.currentTime -= intervalTime / 1000;
                elapsedRewindTime += intervalTime / 1000;
              }
            }, intervalTime);
          }
        }
      },
      onTimeUpdate() {
        if (!this.isPlaying && !this.reverseInterval && this.$refs.video.currentTime > 0) {
          // Si l'utilisateur a relâché la pression, démarrer le retour en arrière
          this.stopPlayback({ type: 'mouseleave' });
        }
      },
      onVideoEnd() {
        this.isPlaying = false;
        this.accumulatedTime = 0;
        this.showTransition = true; // Affiche la transition
    
        setTimeout(() => {
          this.showTransition = false;
          if (this.currentVideoIndex + 1 < this.videos.length) {
            this.currentVideoIndex++;
            nextTick(() => {
              this.preloadVideo(this.$refs.video);
            });
          } else {
            this.allVideosPlayed = true; // Toutes les vidéos ont été jouées
          }
        }, 3000);
      },
      handleTransitionEnd() {
        if (this.currentVideoIndex + 1 < this.videos.length) {
          this.currentVideoIndex++;
          nextTick(() => {
            this.preloadVideo(this.$refs.video);
          });
        } else {
          this.allVideosPlayed = true;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    overflow: hidden;
    cursor: pointer;
    -webkit-touch-callout: none; /* Disable callout, tap highlight, etc. */
    -webkit-user-select: none; /* Disable user select */
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .video-element {
    width: 100%;
    height: auto;
    pointer-events: none; /* Prevent video controls from showing */
  }
  
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 0, 0);
    font-size: 24px;
    text-align: center;
  }
  </style>
  