<template>
    <div class="transition-container">
      <img :src="imageSrc" alt="Transition Image" class="transition-image" />
      <audio ref="audio" :src="audioSrc"></audio>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoTransition',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      audioSrc: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        default: 3000
      }
    },
    mounted() {
      this.$refs.audio.play();
      setTimeout(() => {
        this.$emit('transitionEnd');
      }, this.duration);
    }
  };
  </script>
  
  <style scoped>
  .transition-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .transition-image {
    position: relative;
    left: -90%;
    top: 10%;
    width: 100%;
    height: auto;
  }
  
  audio {
    display: none;
  }

  @media (max-width: 768px) {
    .transition-image {
    position: relative;
    left: -40%;
    top: -400%;
    width: 150%;
    transform: translateY(-50%);
    height: auto;
  }
  }
  </style>
  