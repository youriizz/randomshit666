<template>
    <div
      :class="[lightClass, 'draggable-light']"
      :style="lightStyle"
      @mousedown="dragStart"
      @touchstart="dragStart"
    ></div>
  </template>
  
  <script>
  export default {
    props: {
      lightType: String,
      appearanceTime: Number,
      duration: Number,
      width: Number,
      height: Number,
      additionalClass: String,
      orangeRoute: String,
      greenRoute: String,
    },
    data() {
      return {
        isDragging: false,
        x: 0,
        y: 0,
        moved: false,
        start: null,
        isVisible: false,
        opacity: 0,
      };
    },
    computed: {
      lightStyle() {
        const width = this.isMobile ? this.width / 2 : this.width;
        const height = this.isMobile ? this.height / 2 : this.height;
        return {
          display: this.isVisible ? 'block' : 'none',
          opacity: this.opacity,
          width: `${width}px`,
          height: `${height}px`,
          top: this.top,
          left: this.left,
        };
      },
      lightClass() {
        return [this.lightType, this.additionalClass];
      },
      isMobile() {
        return window.innerWidth <= 768; // Example breakpoint for mobile devices
      }
    },
    mounted() {
      // Schedule the appearance of the light
      setTimeout(() => {
        this.isVisible = true;
        this.fadeIn();
      }, this.appearanceTime);
  
      // Schedule the disappearance of the light
      setTimeout(() => {
        this.fadeOut();
      }, this.appearanceTime + this.duration);
  
      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('mouseup', this.dragEnd);
      document.addEventListener('touchmove', this.dragging, { passive: false });
      document.addEventListener('touchend', this.dragEnd);
    },
    beforeDestroy() {
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('mouseup', this.dragEnd);
      document.removeEventListener('touchmove', this.dragging);
      document.removeEventListener('touchend', this.dragEnd);
    },
    methods: {
      fadeIn() {
        let op = 0;
        const timer = setInterval(() => {
          if (op >= 1) {
            clearInterval(timer);
          }
          this.opacity = op;
          op += 0.02;
        }, 100);
      },
      fadeOut() {
        let op = 1;
        const timer = setInterval(() => {
          if (op <= 0) {
            clearInterval(timer);
            this.isVisible = false;
          }
          this.opacity = op;
          op -= 0.02;
        }, 100);
      },
      dragStart(e) {
        e.preventDefault();
  
        this.isDragging = true;
  
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        this.x = clientX - this.$el.offsetLeft;
        this.y = clientY - this.$el.offsetTop;
  
        this.$el.style.cursor = 'grabbing';
        this.$el.style.opacity = '1';
  
        if (!this.moved) {
          this.start = this.$el.getBoundingClientRect();
        }
  
        this.moved = true;
      },
      dragging(e) {
        if (this.isDragging) {
          e.preventDefault();
          const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
          const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
  
          this.$el.style.left = clientX - this.x + 'px';
          this.$el.style.top = clientY - this.y + 'px';
        }
      },
      dragEnd() {
        if (this.isDragging) {
          this.isDragging = false;
          this.$el.style.cursor = 'grab';
          this.navigate();  // Call navigate when drag ends
        }
      },
      navigate() {
        if (this.lightType === 'red') {
          this.$router.push({ name: 'home' });
        } else if (this.lightType === 'orange' && this.orangeRoute) {
          this.$router.push({ name: this.orangeRoute });
        } else if (this.lightType === 'green' && this.greenRoute) {
          this.$router.push({ name: this.greenRoute });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .draggable-light {
    position: absolute;
    border-radius: 50%;
    cursor: grab;
    transition: opacity 0.5s, transform 0.3s, box-shadow 0.3s;
  }
  
  .red {
    background-color: red;
  }
  
  .orange {
    background-color: orange;
  }
  
  .green {
    background-color: green;
  }
  
  .draggable-light:active,
  .draggable-light:hover,
  .draggable-light:focus {
    transform: scale(1.2);
    box-shadow: 0 0 20px var(--shadow-color);
    opacity: 100%;
  }
  
  @media (min-width: 600px) {
    .draggable-light {
      width: 80px;
      height: 80px;
    }
  }
  
  @media (max-width: 350px) {
    .draggable-light {
      width: 40px;
      height: 40px;
    }
  }
  </style>
  