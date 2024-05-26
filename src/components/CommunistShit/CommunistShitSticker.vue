<template>
    <div
      class="sticker"
      :style="stickerStyle"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <img
        :src="stickerSVG"
        :width="stickerStyle.width"
        :height="stickerStyle.height"
        alt="sticker"
        class="sticker-image"
      />
      <div class="resize-handle" @mousedown.stop="startResize"></div>
      <div class="color-picker" @click="toggleColorPicker">🎨</div>
      <div class="colors" v-if="showColorPicker">
        <div
          class="color-option"
          v-for="color in colors"
          :key="color"
          :style="{ backgroundColor: color }"
          @click="changeColor(color)"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  import logowritingblack from '@/assets/CommunistShit/logowritingblack.svg';
  import logowritingwhite from '@/assets/CommunistShit/logowritingwhite.svg';
  
  export default {
    data() {
      return {
        dragging: false,
        resizing: false,
        stickerStyle: {
          top: '100px',
          left: '100px',
          width: '200px',
          height: '100px',
          backgroundColor: 'white', // Default color to white
        },
        showColorPicker: false,
        colors: ['#FFC0CB', '#000000', '#FF0000', '#FFFF00', '#FFFFFF'], // Rose, Black, Red, Yellow, White
      };
    },
    computed: {
      stickerSVG() {
        // Determine the appropriate SVG based on the background color
        switch (this.stickerStyle.backgroundColor.toLowerCase()) {
          case '#ffc0cb': // Rose
          case '#000000': // Black
          case '#ff0000': // Red
            return logowritingwhite;
          case '#ffff00': // Yellow
          case '#ffffff': // White
            return logowritingblack;
          default:
            return logowritingblack; // Fallback to black
        }
      }
    },
    methods: {
      startDrag(event) {
        this.dragging = true;
        document.addEventListener('mousemove', this.onDrag);
        document.addEventListener('mouseup', this.stopDrag);
        document.addEventListener('touchmove', this.onDrag);
        document.addEventListener('touchend', this.stopDrag);
      },
      onDrag(event) {
        if (this.dragging) {
          const { clientX, clientY } = event.touches ? event.touches[0] : event;
          this.stickerStyle.left = `${clientX - 100}px`; // Adjust based on SVG dimensions
          this.stickerStyle.top = `${clientY - 50}px`;
        }
      },
      stopDrag() {
        this.dragging = false;
        document.removeEventListener('mousemove', this.onDrag);
        document.removeEventListener('mouseup', this.stopDrag);
        document.removeEventListener('touchmove', this.onDrag);
        document.removeEventListener('touchend', this.stopDrag);
      },
      startResize(event) {
        this.resizing = true;
        document.addEventListener('mousemove', this.onResize);
        document.addEventListener('mouseup', this.stopResize);
        document.addEventListener('touchmove', this.onResize);
        document.addEventListener('touchend', this.stopResize);
      },
      onResize(event) {
        if (this.resizing) {
          const { clientX, clientY } = event.touches ? event.touches[0] : event;
          const newWidth = clientX - this.$el.getBoundingClientRect().left;
          const newHeight = clientY - this.$el.getBoundingClientRect().top;
          this.stickerStyle.width = `${newWidth}px`;
          this.stickerStyle.height = `${newHeight}px`;
        }
      },
      stopResize() {
        this.resizing = false;
        document.removeEventListener('mousemove', this.onResize);
        document.removeEventListener('mouseup', this.stopResize);
        document.removeEventListener('touchmove', this.onResize);
        document.removeEventListener('touchend', this.stopResize);
      },
      toggleColorPicker() {
        this.showColorPicker = !this.showColorPicker;
      },
      changeColor(color) {
        this.stickerStyle.backgroundColor = color;
        this.showColorPicker = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .sticker {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    user-select: none;
    border: 2px dashed #aaa; /* Optional: to visualize the sticker boundaries */
  }
  .sticker-image {
    pointer-events: none; /* Prevent interaction with the SVG */
    user-select: none; /* Prevent text selection */
  }
  .resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: gray;
    cursor: nwse-resize;
  }
  .color-picker {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .colors {
    position: absolute;
    top: 20px;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  .color-option {
    width: 20px;
    height: 20px;
    margin: 2px;
    cursor: pointer;
  }
  </style>
  