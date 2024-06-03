<template>
  <div class="container-1" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <img id="meditationThumbnail" src="@/assets/Meditation/meditation.svg" alt="Meditation" class="MeditationThumbnail" width="100%" height="100%">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      currentAngle: 0,
      lastAnimationTime: Date.now()
    };
  },
  mounted() {
    this.disableDragStart();
    this.rotate();
  },
  methods: {
    handleMouseEnter() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
    disableDragStart() {
      const thumbnail = document.getElementById('meditationThumbnail');
      thumbnail.addEventListener('dragstart', (event) => {
        event.preventDefault();
      });
    },
    rotate() {
      const now = Date.now();
      const elapsed = now - this.lastAnimationTime;
      this.lastAnimationTime = now;
      
      // Ajustez les vitesses de rotation ici
      const rotationSpeed = this.isHovered ? 200 : 60; // 360deg/3.6s or 360deg/9s
      this.currentAngle += (rotationSpeed * elapsed) / 1000;

      const thumbnail = document.getElementById('meditationThumbnail');
      
      // Ajustez l'échelle ici
      thumbnail.style.transform = `rotate(${this.currentAngle}deg) scale(${this.isHovered ? 0.8 : 1})`;

      requestAnimationFrame(this.rotate);
    }
  }
};
</script>

<style scoped>

.container-1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.MeditationThumbnail {
  display: flex;
  height: 90%;
  cursor: pointer;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.container-1:active {
  filter: blur(3px);
}

</style>
