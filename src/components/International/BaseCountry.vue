<template>
    <div class="country" @click.stop="handleClickAndEmit" :class="currentClass" :style="{ zIndex: zIndex }">
      <div v-for="(text, index) in activeTexts"
           v-show="clickCount >= text.start && clickCount <= text.end"
           :class="getClassForText(text)"
           :key="`text-${index}`">
        {{ text.content }}
      </div>
      <img v-for="(image, index) in activeImages" 
           v-show="clickCount >= image.start && clickCount <= image.end"
           :src="image.src" 
           :class="getClassForImage(image)" 
           :key="`image-${index}`" />
      <audio v-for="(sound, index) in activeSounds" 
             :src="sound.src" 
             :class="[sound.class, { 'active': clickCount >= sound.start && sound.end }]" 
             autoplay
             :key="`sound-${index}`" />
      <video v-for="(video, index) in activeVideos" 
             :src="video.src" 
             :class="[video.class, { 'active': clickCount >= video.start && video.end }]" 
             autoplay loop
             :key="`video-${index}`" />
      <div v-for="(style, index) in activeStyles"
           :class="getClassForStyle(style)"
           :key="`style-${index}`"></div>
      <TrafficLight v-if="showTrafficLights" />
    </div>
  </template>
  
  <script>
  import TrafficLight from '../TrafficLight.vue';
  import EventBus from '../../eventBus';
  
  export default {
    components: {
      TrafficLight
    },
    props: {
      id: String,
      images: {
        type: Array,
        default: () => []
      },
      sounds: {
        type: Array,
        default: () => []
      },
      videos: {
        type: Array,
        default: () => []
      },
      styles: {
        type: Array,
        default: () => []
      },
      texts: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        clickCount: 0,
        zIndex: 1,
      };
    },
    computed: {
      currentClass() {
        let activeClass = '';
        this.styles.forEach(style => {
          if (this.clickCount >= style.start && this.clickCount <= style.end) {
            activeClass = style.class;
          }
        });
        return activeClass;
      },
      activeSounds() {
        return this.sounds.filter(sound => this.clickCount >= sound.start && this.clickCount <= sound.end);
      },
      activeImages() {
        return this.images.filter(image => this.clickCount >= image.start && this.clickCount <= image.end);
      },
      activeVideos() {
        return this.videos.filter(video => this.clickCount >= video.start && this.clickCount <= video.end);
      },
      activeTexts() {
        return this.texts.filter(text => this.clickCount >= text.start && this.clickCount <= text.end);
      },
      activeStyles() {
        return this.styles.filter(style => this.clickCount >= style.start && this.clickCount <= style.end);
      },
      showTrafficLights() {
        return this.clickCount >= 9;
      }
    },
    methods: {
      handleClick() {
        this.clickCount++;
        EventBus.emit('update-click-count', this.clickCount);
        console.log("handleClick called, clickCount is now", this.clickCount);
        if (this.clickCount >= 3) {
          this.bringToFront();
        }
      },
      handleClickAndEmit() {
        this.$emit('country-selected', this.id);
        this.handleClick();
      },
      syncClickCount(count) {
        this.clickCount = count;
      },
      bringToFront() {
        console.log(`bringToFront called on ${this.id}`);
        this.zIndex = 10;
      },
      getSrcForImage(image) {
        if (this.clickCount + 1 >= image.start) {
          return image.src;
        }
        return '';
      },
      getClassForImage(image) {
        let classes = [image.class];
        if (this.clickCount >= image.start && this.clickCount <= image.end) {
          classes.push('active');
        }
        if (image.animation && this.clickCount >= image.animation.start && this.clickCount <= image.animation.end) {
          classes.push(image.animation.className);
        }
        return classes.join(' ');
      },
      getClassForText(text) {
        let classes = [text.class];
        if (this.clickCount >= text.start && this.clickCount <= text.end) {
          classes.push('active');
        }
        if (text.animation && this.clickCount >= text.animation.start && this.clickCount <= text.animation.end) {
          classes.push(text.animation.className);
        }
        return classes.join(' ');
      },
      getClassForStyle(style) {
        let classes = [style.class];
        if (style.animation && this.clickCount >= style.animation.start && this.clickCount <= style.animation.end) {
          classes.push(style.animation.className);
        }
        return classes.join(' ');
      }
    },
    created() {
      EventBus.on('update-click-count', (count) => {
        if (count <= 2) {
          this.clickCount = count;
          console.log(`BaseCountry ${this.id} clickCount updated to ${this.clickCount}`);
        }
      });
    }
  }
  </script>
  
  <style>
  .country {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid blue;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible; /* Permettre le débordement */
  }
  
  .country img, .country video {
    position: absolute;
    max-width: none; /* Permettre le débordement */
    max-height: none; /* Permettre le débordement */
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
  
  .softpower-image, .explosion-image {
    width: 40%;
    height: auto;
    transition: 0.3s;
  }
  
  .blue {
    width: 120%;
    height: 120%;
    background-color: blue;
    transition: 0.3s;
  }
  
  .bigger {
    transform: scale(1.5);
    transition: 0.3s;
  }
  
  .countryname {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    color: red;
    z-index: 10;
  }
  .redpoint {
    width: 80%;
    height: 80%;
    left: 0%;
    top: 0%;
    background-color: rgb(255, 0, 0);
    transition: 0.3s;
  }
  
  .redbigger {
    transform: scale(1.5);
    transition: 0.3s;
  }
  </style>
  