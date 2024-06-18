<template>
  <div class="quiz-thumbnail">
    <transition name="fade" mode="out-in" @after-enter="handleTransitionEnd">
      <img v-if="showImage" :src="interrogationimg" alt="Static Image" key="static-img" class="fade-in-image" />
    </transition>
    <img v-if="showGif" :src="currentGif" alt="GIF Image" key="gif-img" />
    <transition name="fade" mode="out-in" @after-enter="handleTransitionEnd">
      <div v-if="showWhite" class="white-screen" key="white-screen"></div>
    </transition>
  </div>
</template>



<script>
import interrogationgif from '@/assets/Quiz/interrogation.gif';
import interrogationimg from '@/assets/Quiz/interrogation.jpg';

export default {
  data() {
    return {
      showImage: true,
      showGif: false,
      showWhite: false,
      timer: null,
      interrogationgif,
      interrogationimg,
      currentGif: '' // Store the GIF path dynamically
    };
  },
  mounted() {
    this.preloadGif();
    this.startCycle();
  },
  methods: {
    preloadGif() {
      const img = new Image();
      img.src = this.interrogationgif;
    },
    startCycle() {
      this.timer = setInterval(() => {
        if (this.showImage) {
          this.showImage = false;
          this.showGif = true;
          this.currentGif = this.reloadGif();
        } else if (this.showGif) {
          this.showGif = false;
          this.showWhite = true;
        } else if (this.showWhite) {
          this.showWhite = false;
          this.showImage = true;
        }
      }, 3000); // Adjust this timing to fit your needs
    },
    reloadGif() {
      return `${this.interrogationgif}?t=${new Date().getTime()}`; // Force reload the GIF by appending a timestamp
    },
    handleTransitionEnd() {
      if (this.showWhite) {
        setTimeout(() => {
          this.showImage = true;
          this.showWhite = false;
        }, 2000); // Duration of the white screen
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.quiz-thumbnail {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

img, .white-screen {
  position: absolute;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  top: 0;
  opacity: 1;
  max-width: 125%;
  max-height: 102%;
  filter: saturate(1.1) brightness(1.05);
  
}

.white-screen {
  background-color: white;
}

.fade-enter-active {
  transition: opacity 3s; /* Transition duration for fade in */
}

.fade-enter {
  opacity: 0;
}

.fade-leave-active {
  transition: none; /* No transition for fade out */
}

.fade-in-image {
  opacity: 0;
  animation: fadeIn 4s forwards;
}





.quiz-thumbnail:hover img, .quiz-thumbnail:hover .white-screen {
  transform: scale(0.1);
  filter: brightness(0.01);
}

.quiz-thumbnail:active img, .quiz-thumbnail:active .white-screen {
  filter: blur(5px);
}

@media (max-width: 1024px) {
  

.img:active, .white-screen:active {
  filter: blur(3px);
}
}


@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

</style>

