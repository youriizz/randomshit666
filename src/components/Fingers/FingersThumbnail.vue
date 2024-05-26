<template>
  <div class="thumbnail" :style="{ backgroundColor: backgroundColor, transform: hoverSkew }" @mouseenter="applyRandomSkew" @mouseleave="resetSkew">
    <div class="fixed-time" v-if="fixedTimes[0]">{{ fixedTimes[0] }}</div>
    <div class="counter" :class="{ whiteText: currentTime >= 20 }" v-if="currentTime < 9">{{ formatTime(currentTime) }}</div>
    <div class="fixed-time" v-if="fixedTimes[1]">{{ fixedTimes[1] }}</div>
    <div class="counter" :class="{ whiteText: currentTime >= 20 }" v-if="currentTime >= 9 && currentTime < 14">{{ formatTime(currentTime) }}</div>
    <div class="fixed-time" v-if="fixedTimes[2]">{{ fixedTimes[2] }}</div>
    <div class="counter" :class="{ whiteText: currentTime >= 20 }" v-if="currentTime >= 14 && currentTime < 20">{{ formatTime(currentTime) }}</div>
    <div class="fixed-time" v-if="fixedTimes[3]">{{ fixedTimes[3] }}</div>
    <div class="counter" :class="{ whiteText: currentTime >= 20 }" v-if="currentTime >= 20 && currentTime < 24">{{ formatTime(currentTime) }}</div>
    <div class="fixed-time whiteText" v-if="currentTime >= 24">00:00</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: 0,
      backgroundColor: '',
      fixedTimes: [],
      startTime: null,
      interval: null,
      resetTimeout: null,
      hoverSkew: '' // Add this data property
    };
  },
  mounted() {
    this.startCounter();
  },
  methods: {
    startCounter() {
      this.startTime = performance.now();
      this.updateCounter();
    },
    updateCounter() {
      this.interval = requestAnimationFrame(() => {
        const elapsed = performance.now() - this.startTime;
        const seconds = Math.floor(elapsed / 1000);
        const centiseconds = Math.floor((elapsed % 1000) / 16.67);

        if (seconds >= 24) {
          this.currentTime = 24;
          this.backgroundColor = 'black';
          cancelAnimationFrame(this.interval);
          this.resetTimeout = setTimeout(() => {
            this.resetCounter();
          }, 5000); // Wait for 5 seconds before resetting
        } else {
          this.currentTime = seconds + centiseconds / 100;
          
          if (seconds >= 20) {
            this.backgroundColor = 'red';
            if (seconds === 20 && !this.fixedTimes.includes('20:00')) this.fixedTimes.push('20:00');
          } else if (seconds >= 14) {
            this.backgroundColor = 'pink';
            if (seconds === 14 && !this.fixedTimes.includes('14:00')) this.fixedTimes.push('14:00');
          } else if (seconds >= 9) {
            this.backgroundColor = 'yellow';
            if (seconds === 9 && !this.fixedTimes.includes('09:00')) this.fixedTimes.push('09:00');
          }
          
          this.updateCounter();
        }
      });
    },
    formatTime(time) {
      const seconds = Math.floor(time).toString().padStart(2, '0');
      const centiseconds = Math.floor((time % 1) * 60).toString().padStart(2, '0');
      return `${seconds}:${centiseconds}`;
    },
    resetCounter() {
      this.currentTime = 0;
      this.backgroundColor = '';
      this.fixedTimes = [];
      this.startCounter();
    },
    applyRandomSkew() {
      const skewValue = Math.random() > 0.5 ? 'skew(10deg, 10deg)' : 'skew(-10deg, -10deg)';
      this.hoverSkew = `scale(1.4) rotate(5deg) ${skewValue}`;
    },
    resetSkew() {
      this.hoverSkew = '';
    }
  },
  beforeDestroy() {
    cancelAnimationFrame(this.interval);
    clearTimeout(this.resetTimeout);
  }
};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px solid #000;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.counter, .fixed-time {
  font-size: clamp(20px, 6.5vw, 50px);
  font-weight: bold;
  color: rgb(0, 0, 0);
}

.counter.whiteText, .fixed-time.whiteText {
  color: white;
}
</style>
