<template>
  <div 
    :style="[computedStyle, additionalStyles]" 
    :class="{ hovered: isHovered || isActive }" 
    class="container-morning" 
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
.container-morning {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: start;
  padding: 2vw;
  border: 0px solid black;
  font-family: 'Libre Baskerville', serif;
  font-weight: 500;
  font-size: clamp(23px, 3vw, 45px);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  cursor: grab;
}
.container-morning.hovered {
  background-color: rgb(247, 255, 173);
}

.libre-baskerville-regular {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}


@media (max-width: 600px) {
  .container-morning {
    padding: 5vw
  }
  
}
</style>
