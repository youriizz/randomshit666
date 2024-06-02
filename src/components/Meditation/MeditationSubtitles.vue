<template>
    <div class="subtitles-container">
      <div
        v-for="(subtitle, index) in subtitles"
        :key="index"
        :style="getSubtitleStyle(subtitle)"
        class="subtitle"
      >
        {{ subtitle.text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      subtitles: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentTime: 0,
        intervalId: null
      };
    },
    computed: {
      visibleSubtitles() {
        return this.subtitles.filter(subtitle => {
          return this.currentTime >= subtitle.appearanceTime && this.currentTime < (subtitle.appearanceTime + subtitle.duration);
        });
      }
    },
    methods: {
      getSubtitleStyle(subtitle) {
        let opacity = 0;
        const fadeInEnd = subtitle.appearanceTime + 2; // 2 seconds fade-in
        const fadeOutStart = subtitle.appearanceTime + subtitle.duration - 2; // 2 seconds fade-out
  
        if (this.currentTime >= subtitle.appearanceTime && this.currentTime < fadeInEnd) {
          opacity = (this.currentTime - subtitle.appearanceTime) / 2;
        } else if (this.currentTime >= fadeInEnd && this.currentTime < fadeOutStart) {
          opacity = 1;
        } else if (this.currentTime >= fadeOutStart && this.currentTime < (subtitle.appearanceTime + subtitle.duration)) {
          opacity = 1 - (this.currentTime - fadeOutStart) / 2;
        }
  
        return {
          opacity: opacity,
          transition: 'opacity 2s',
          position: 'absolute',
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)'
        };
      }
    },
    mounted() {
      this.intervalId = setInterval(() => {
        this.currentTime += 0.1;
      }, 100);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  };
  </script>
  
  <style scoped>
  .subtitles-container {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: clamp(20px, 4vw, 30px);
    pointer-events: none;
    width: 100%; /* Ensure the container takes the full width */
  }
  
  .subtitle {
    transition: opacity 2s;
  }
  </style>
  