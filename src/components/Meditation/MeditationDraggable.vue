<template>
    <img
      :src="src"
      class="draggable-image"
      :ref="imageRef"
      :class="additionalClass"
      :style="imageStyle"
      draggable="true"
      @mousedown="dragStart"
      @touchstart="dragStart"
    />
  </template>
  
  <script>
  export default {
    props: {
      src: String,
      appearanceTime: Number,
      duration: Number,
      width: Number,
      height: Number,
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
          start: null,
          isVisible: false,
          opacity: 0,
          imageRef: 'draggableImage'
      };
    },
    computed: {
      imageStyle() {
          const width = this.isMobile ? this.width / 2 : this.width;
          const height = this.isMobile ? this.height / 2 : this.height;
          return {
              display: this.isVisible ? 'block' : 'none',
              opacity: this.opacity,
              width: `${width}px`,
              height: `${height}px`
          };
      },
      isMobile() {
          return window.innerWidth <= 768; // Example breakpoint for mobile devices
      }
    },
    mounted() {
      // Schedule the appearance of the image
      setTimeout(() => {
          this.isVisible = true;
          this.fadeIn();
      }, this.appearanceTime);
  
      // Schedule the disappearance of the image
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
  
          const img = this.$refs[this.imageRef];
          this.isDragging = true;
  
          const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
          const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
          this.x = clientX - img.offsetLeft;
          this.y = clientY - img.offsetTop;
          img.style.cursor = 'grabbing';
          img.style.opacity = '1';
  
          if (!this.moved) {
              this.start = img.getBoundingClientRect();
          }
  
          this.moved = true;
      },
      dragging(e) {
          if (this.isDragging) {
              e.preventDefault();
              const img = this.$refs[this.imageRef];
              const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
              const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
  
              img.style.position = 'absolute';
              img.style.left = clientX - this.x + 'px';
              img.style.top = clientY - this.y + 'px';
          }
      },
      dragEnd() {
          if (this.isDragging) {
              this.isDragging = false;
              const img = this.$refs[this.imageRef];
              img.style.cursor = 'grab';
          }
      }
    }
  };
  </script>
  
  <style scoped>
  .draggable-image {
      position: absolute;
      object-fit: contain;
      cursor: grab;
      transform: translate(-50%, -50%);
      transition: opacity 0.5s;
  }
  </style>
  