<template>
  <div class="video-container">
    <video 
      :src="videoSrc" 
      autoplay 
      loop 
      muted 
      playsinline
      class="responsive-video">
    </video>
  </div>
</template>

<script>
import videoFile from '@/assets/TheMediumIsTheMessage/MediumMessageThumbnail.mp4';

export default {
  data() {
    return {
      videoSrc: videoFile
    };
  },
  mounted() {
    console.log('Video file:', this.videoSrc);
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Vous pouvez ajuster la hauteur selon vos besoins */
  cursor: pointer;
}

.responsive-video {
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  z-index: 10;
}

.video-container:hover, .video-container:active {
  filter: drop-shadow(8px 8px 10px gray);
}
</style>
