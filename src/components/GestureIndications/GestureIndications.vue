<template>
  <div v-if="visible" class="gesture-indications" @click="hideIndication" @touchstart="hideIndication">
    <div class="text-container">
      <div v-for="gesture in type" :key="gesture" class="gesture-text">{{ formatGestureText(gesture) }}</div>
    </div>
    <div v-if="type.includes('touch')" class="touch-animation">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div v-if="type.includes('scroll-down')" class="scroll-animation">
      <div class="arrow-down"></div>
    </div>
    <div v-if="type.includes('scroll-up')" class="scroll-animation">
      <div class="arrow-up"></div>
    </div>
    <div v-if="type.includes('scroll-left')" class="scroll-animation">
      <div class="arrow-left"></div>
    </div>
    <div v-if="type.includes('scroll-right')" class="scroll-animation">
      <div class="arrow-right"></div>
    </div>
    <div v-if="type.includes('zoom')" class="zoom-animation">
      <img src="https://imgvisuals.com/cdn/shop/products/animated-zoom-out-linear-ui-icon-900016.gif?v=1697071168" alt="Zoom animation" class="zoom-gif"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Array,
      required: true,
      validator: value => value.every(val => ['touch', 'scroll-left', 'scroll-right', 'scroll-up', 'scroll-down', 'zoom'].includes(val))
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
    },
    formatGestureText(gesture) {
      return gesture.replace('-', ' ');
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
  height: 100vh; /* Ensure full height */
  width: 100vw; /* Ensure full width */
}

.text-container {
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column; /* Ensure text is in a column */
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: clamp(20px, 2vw, 40px);
}

.gesture-text {
  margin-bottom: 10px; /* Add some space between lines */
  text-transform: lowercase; /* Ensure text is lowercase */
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

.arrow-down,
.arrow-up,
.arrow-left,
.arrow-right {
  width: 30px;
  height: 30px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  position: fixed; /* Ensure arrows are fixed to the window */
}

.arrow-down {
  bottom: 10%;
  left: 50%;
  animation: bounce-down 1s infinite;
}

.arrow-up {
  top: 10%;
  left: 50%;
  animation: bounce-up 1s infinite;
}

.arrow-left {
  left: 10%;
  top: 50%;
  animation: bounce-left 1s infinite;
}

.arrow-right {
  right: 10%;
  top: 50%;
  animation: bounce-right 1s infinite;
}

.zoom-animation .zoom-gif {
  object-fit: contain;
  width: 400px;
  height: 400px;
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

@keyframes bounce-left {
  0%, 100% {
    transform: translateX(0) rotate(45deg);
  }
  50% {
    transform: translateX(-20px) rotate(45deg);
  }
}

@keyframes bounce-right {
  0%, 100% {
    transform: translateX(0) rotate(225deg);
  }
  50% {
    transform: translateX(20px) rotate(225deg);
  }
}

@keyframes bounce-up {
  0%, 100% {
    transform: translateY(0) rotate(135deg);
  }
  50% {
    transform: translateY(-20px) rotate(135deg);
  }
}

@keyframes bounce-down {
  0%, 100% {
    transform: translateY(0) rotate(-45deg);
  }
  50% {
    transform: translateY(20px) rotate(-45deg);
  }
}
</style>





