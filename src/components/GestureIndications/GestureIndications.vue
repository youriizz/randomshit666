<template>
    <div v-if="visible" class="gesture-indications" @click="hideIndication" @touchstart="hideIndication">
      <div class="text-container">
        <span v-if="type === 'touch'">Touch</span>
        <span v-else-if="type === 'scroll'">Scroll</span>
        <span v-else-if="type === 'zoom'">Zoom In, Zoom Out</span>
      </div>
      <div v-if="type === 'touch'" class="touch-animation">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div v-else-if="type === 'scroll'" class="scroll-animation">
        <div class="arrow down"></div>
        <div class="arrow up"></div>
      </div>
      <div v-else-if="type === 'zoom'" class="zoom-animation">
        <div class="arrow in"></div>
        <div class="arrow out"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
        validator: value => ['touch', 'scroll', 'zoom'].includes(value)
      }
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      hideIndication() {
        this.visible = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .gesture-indications {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    z-index: 10;
  }
  
  .text-container {
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: clamp(40px, 3vw, 100px);
  }
  
  .touch-animation,
  .scroll-animation,
  .zoom-animation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .touch-animation .circle {
    width: 20px;
    height: 20px;
    margin: 10px;
    border-radius: 50%;
    background-color: black;
    opacity: 0;
    animation: pulse 1.5s infinite;
  }
  
  .scroll-animation .arrow,
  .zoom-animation .arrow {
    width: 30px;
    height: 30px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    margin: 10px;
  }
  
  .scroll-animation .arrow.down {
    transform: rotate(45deg);
    animation: bounce-down 1s infinite;
  }
  
  .scroll-animation .arrow.up {
    transform: rotate(225deg);
    animation: bounce-up 1s infinite;
  }
  
  .zoom-animation .arrow.in {
    transform: rotate(45deg);
    animation: zoom-in 1s infinite;
  }
  
  .zoom-animation .arrow.out {
    transform: rotate(45deg) scale(-1);
    animation: zoom-out 1s infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes bounce-down {
    0%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    50% {
      transform: translateY(20px) rotate(45deg);
    }
  }
  
  @keyframes bounce-up {
    0%, 100% {
      transform: translateY(0) rotate(225deg);
    }
    50% {
      transform: translateY(-20px) rotate(225deg);
    }
  }
  
  @keyframes zoom-in {
    0%, 100% {
      transform: rotate(45deg) scale(1);
    }
    50% {
      transform: rotate(45deg) scale(1.2);
    }
  }
  
  @keyframes zoom-out {
    0%, 100% {
      transform: rotate(45deg) scale(-1);
    }
    50% {
      transform: rotate(45deg) scale(-1.2);
    }
  }
  </style>
  