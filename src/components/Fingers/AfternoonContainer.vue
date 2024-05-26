<template>
  <div 
    :style="[computedStyle, additionalStyles]" 
    :class="{ hovered: isHovered || isActive }" 
    class="container-afternoon" 
    @mouseenter="handleMouseEnter" 
    @click="toggleActive" 
    @touchstart="toggleActive">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    height: Number,
    additionalStyles: Object
  },
  data() {
    return {
      isHovered: false,
      isActive: false
    };
  },
  computed: {
    computedStyle() {
      return {
        height: this.height + '%'
      };
    }
  },
  methods: {
    handleMouseEnter() {
      this.isHovered = true;
    },
    toggleActive() {
      this.isActive = true;
      this.isHovered = true; // Ensure the color stays after click
    }
  }
}
</script>


  <style scoped>
  .container-afternoon {
    width: 100%;
    display: flex;
    padding: 2vw;
    justify-content: left;
    align-items: start;
    border: 0px solid black;
    font-family: 'Libre Baskerville', serif;
    font-weight: 500;
    font-size: clamp(23px, 3vw, 45px);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    cursor: grab;
  }
  .container-afternoon.hovered {
    background-color: rgb(255, 185, 223);
  }


@media (max-width: 600px) {
  .container-afternoon {
    padding: 5vw
  }
  
}
  </style>
  