<template>
  <div class="camera-container">
    <video ref="video" class="video" autoplay playsinline></video>
    <CommunistShitSticker ref="sticker" class="sticker" />
    <button v-if="showCameraButton" @click="initCamera" class="camera-button">Activer la caméra</button>
    <button v-else @click="takePhoto" class="photo-button">Prendre la photo</button>
    <canvas ref="canvas" class="canvas"></canvas>
  </div>
</template>

<script>
import CommunistShitSticker from './CommunistShitSticker.vue';

export default {
  components: {
    CommunistShitSticker,
  },
  data() {
    return {
      showCameraButton: true,
    };
  },
  methods: {
    async initCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' } // Use 'user' for front camera and 'environment' for rear camera
        });
        this.$refs.video.srcObject = stream;
        this.showCameraButton = false;
      } catch (err) {
        console.error("Error accessing camera: ", err);
        alert("Please allow access to the camera in your browser settings.");
      }
    },
    takePhoto() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const sticker = this.$refs.sticker.$el;

      // Set canvas size to video size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw video frame on canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Draw sticker on canvas
      const stickerRect = sticker.getBoundingClientRect();
      const svg = sticker.querySelector('img');
      context.drawImage(
        svg,
        stickerRect.left - canvas.getBoundingClientRect().left,
        stickerRect.top - canvas.getBoundingClientRect().top,
        stickerRect.width,
        stickerRect.height
      );

      // Convert canvas to image
      const dataURL = canvas.toDataURL('image/png');
      this.savePhoto(dataURL);
    },
    savePhoto(dataURL) {
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'photo.png';
      link.click();
    }
  },
};
</script>

<style scoped>
.camera-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.video {
  width: 100%;
  height: auto;
  z-index: 0;
}
.sticker {
  position: absolute;
  z-index: 1;
}
.canvas {
  display: none;
}
button {
  position: absolute;
  padding: 10px 20px;
  z-index: 2; /* Ensure the button is above the video */
}
.camera-button {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.photo-button {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
