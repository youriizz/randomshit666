<template>
    <div
      ref="circle"
      class="animated-circle"
      :class="additionalClass"
      :style="circleStyle"
      @mousedown="dragStart"
      @touchstart="dragStart"
    ></div>
  </template>
  
  <script>
  export default {
    props: {
      audioRef: {
        type: Object,
        required: true
      },
      appearanceTime: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 10000
      },
      initialDiameter: {
        type: Number,
        default: 100
      },
      sizeMultiplier: {
        type: Number,
        default: 1.5
      },
      additionalClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isDragging: false,
        x: 0,
        y: 0,
        moved: false,
        isVisible: false,
        analyser: null,
        circleDiameter: this.initialDiameter,
        targetDiameter: this.initialDiameter // New state to store the target diameter
      };
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 768; // Example breakpoint for mobile devices
        },
        circleStyle() {
            const diameter = this.isMobile ? this.circleDiameter * 0.5 : this.circleDiameter;
            return {
            display: this.isVisible ? 'block' : 'none',
            width: `${diameter}px`,
            height: `${diameter}px`,
            transform: `translate(-50%, -50%) scale(${diameter / this.initialDiameter})`
            };
        }
        },

    mounted() {
      // Schedule the appearance of the circle
      setTimeout(() => {
        this.isVisible = true;
        this.animateCircle();
      }, this.appearanceTime);
    
      // Schedule the disappearance of the circle
      setTimeout(() => {
        this.isVisible = false;
      }, this.appearanceTime + this.duration);
    
      // Initialize audio analyser
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaElementSource(this.audioRef);
      this.analyser = audioContext.createAnalyser();
      source.connect(this.analyser);
      this.analyser.connect(audioContext.destination);
      this.analyser.fftSize = 256;
    },
    methods: {
                animateCircle() {
        if (!this.analyser) return;

        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(dataArray);
        const sum = dataArray.reduce((a, b) => a + b, 0);
        const average = sum / dataArray.length;
        this.targetDiameter = Math.max(this.initialDiameter, average * this.sizeMultiplier);

        // Smooth transition using interpolation
        this.circleDiameter += (this.targetDiameter - this.circleDiameter) * 0.1;

        if (this.isVisible) {
            requestAnimationFrame(this.animateCircle);
        }
        },

      dragStart(e) {
        e.preventDefault();
        this.isDragging = true;
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        this.x = clientX - this.$refs.circle.offsetLeft;
        this.y = clientY - this.$refs.circle.offsetTop;
        this.$refs.circle.style.cursor = 'grabbing';
    
        document.addEventListener('mousemove', this.dragging);
        document.addEventListener('mouseup', this.dragEnd);
        document.addEventListener('touchmove', this.dragging, { passive: false });
        document.addEventListener('touchend', this.dragEnd);
      },
      dragging(e) {
        if (this.isDragging) {
          e.preventDefault();
          const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
          const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
          this.$refs.circle.style.left = `${clientX - this.x}px`;
          this.$refs.circle.style.top = `${clientY - this.y}px`;
        }
      },
      dragEnd() {
        if (this.isDragging) {
          this.isDragging = false;
          this.$refs.circle.style.cursor = 'grab';
          document.removeEventListener('mousemove', this.dragging);
          document.removeEventListener('mouseup', this.dragEnd);
          document.removeEventListener('touchmove', this.dragging);
          document.removeEventListener('touchend', this.dragEnd);
        }
      }
    }
  };
  </script>
  

<style scoped>
.animated-circle {
  position: absolute;
  top: 7%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid black;
  transition: width 0.1s, height 0.1s, transform 0.5s ease;
  cursor: grab;
  animation: pulse 2s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.9);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}
</style>
