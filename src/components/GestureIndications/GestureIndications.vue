<template>
  <div :class="['gesture-indications', { 'visible': visible }]">
    <div class="text-container">
      <div v-for="gesture in type" :key="gesture" class="gesture-text">{{ formatGestureText(gesture) }}</div>
    </div>
  
    <div v-if="type.includes('scroll-down')" class="scroll-animation arrow-down"></div>
    <div v-if="type.includes('scroll-up')" class="scroll-animation arrow-up"></div>
    <div v-if="type.includes('scroll-left')" class="scroll-animation arrow-left"></div>
    <div v-if="type.includes('scroll-right')" class="scroll-animation arrow-right"></div>

    <div class="gif-container">
      <div v-if="type.includes('grab and drop')" class="gif-animation">
        <img src="@/assets/GestureIndications/grabanddrop.gif" alt="Grab and Drop animation" class="gif"/>
      </div>
      <div v-if="type.includes('write')" class="gif-animation">
        <img src="@/assets/GestureIndications/write.gif" alt="Write animation" class="gif"/>
      </div>
      <div v-if="type.includes('touch')" class="gif-animation">
        <img src="@/assets/GestureIndications/touch.gif" alt="Touch animation" class="gif"/>
      </div>
      <div v-if="type.includes('touch and hold')" class="gif-animation">
        <img src="@/assets/GestureIndications/touchandhold.gif" alt="Touch and Hold animation" class="gif"/>
      </div>
      <div v-if="type.includes('watch')" class="gif-animation">
        <img src="@/assets/GestureIndications/watch.gif" alt=" Watch animation" class="gif"/>
      </div>
      <div v-if="type.includes('move around')" class="gif-animation">
        <img src="@/assets/GestureIndications/movearound.gif" alt="Watch animation" class="gif"/>
      </div>
      <div v-if="type.includes('zoom-in zoom-out')" class="gif-animation">
        <img src="@/assets/GestureIndications/zoominzoomout.gif" alt="Zoom-in Zoom-out animation" class="gif"/>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  props: {
    type: {
      type: Array,
      required: true,
      validator: value => value.every(val => ['zoom-in zoom-out', 'move around','watch', 'touch', 'touch and hold', 'scroll-left', 'scroll-right', 'scroll-up', 'scroll-down', 'zoom', 'grab and drop', 'write'].includes(val))
    },
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 100); // Delay before making elements visible
  },
  methods: {
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
  background: transparent;
  z-index: 5; /* Set z-index lower than Introduction.vue */
  height: 100%; /* Ensure full height */
  width: 100vw; /* Ensure full width */
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.gesture-indications.visible {
  opacity: 1;
  transform: scale(1);
}

.text-container {
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column; /* Ensure text is in a column */
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: clamp(20px, 2vw, 40px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0;
}

.gif-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 30px;
  flex-direction: row;
}

.gesture-indications.visible .text-container {
  opacity: 1;
  transform: translateY(0);
}

.gesture-text {
  margin-bottom: 10px; /* Add some space between lines */
  text-transform: lowercase; /* Ensure text is lowercase */
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
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.gesture-indications.visible .arrow-down,
.gesture-indications.visible .arrow-up,
.gesture-indications.visible .arrow-left,
.gesture-indications.visible .arrow-right {
  opacity: 1;
}

.arrow-down {
  bottom: 10%;
  left: 49%;
  animation: bounce-down 1s infinite;
}

.arrow-up {
  top: 10%;
  left: 49%;
  animation: bounce-up 1s infinite;
}

.arrow-left {
  left: 10%;
  top: 49%;
  animation: bounce-left 1s infinite;
}

.arrow-right {
  right: 10%;
  top: 49%;
  animation: bounce-right 1s infinite;
}

.gif-animation .gif {
  object-fit: contain;
  max-height: 90%;
  max-width: 90%;
  width: 300px; /* Limite la largeur maximale */
  height: 300px; /* Limite la hauteur maximale */
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}


.gesture-indications.visible .gif-animation .gif {
  opacity: 1;
}

@media (max-width: 768px) {
  .gif-animation .gif {
    width: 200px;
    height: 200px;
  }
  .arrow-down {
    bottom: 5%;
    left: 46%;
  }
  .arrow-up {
    top: 5%;
    left: 46%;
  }
  .arrow-left {
    left: 7%;
    top: 48%;
  }
  .arrow-right {
    right: 7%;
    top: 48%;
  }
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


