<template>
  <div 
    :style="[computedStyle, additionalStyles]" 
    :class="{ hovered: isHovered || isActive }" 
    class="container-title" 
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

<style>

  .container-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 2vw;
    border: 0px solid black;
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    font-size: clamp(30px, 4vw, 70px);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    cursor: grab;
  }
  .container-title.hovered {
  background-color: #f1f1f1;
}
  


  .libre-baskerville-regular {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

  </style>
  