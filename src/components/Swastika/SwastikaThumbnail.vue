<template>
  <div class="image-container">
    <img 
      :src="imageSrc" 
      alt="Medium Message Thumbnail"
      class="responsive-image">
  </div>
</template>

<script>
import imageFile from '@/assets/Swastika/churchrain.gif';

export default {
  data() {
    return {
      imageSrc: imageFile
    };
  }
}
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Vous pouvez ajuster la hauteur selon vos besoins */
  cursor: pointer;
  animation: churchrain 15s linear infinite;
  transition: background-color 2s;
}

.responsive-image {
  max-height: 125%;
  max-width: 100%;
  height: auto;
  width: auto;
  z-index: 10;
}

@media (max-width: 768px) {
  .responsive-image {
    max-height: 130%;
    max-width: 130%;
  }
}

@keyframes churchrain {
  0%, 100% {
    background-color: rgb(199, 199, 199);
  }
  50% {
    background-color: rgb(56, 56, 56);
  }
}

@keyframes churchrain2 {
  0%, 100% {
    background-color: rgb(148, 38, 58);
  }
}

.image-container:hover, .image-container:active {
  animation: churchrain2 15s linear infinite;
}

.image-container:hover {
  transition: background-color 2s;
}
</style>
