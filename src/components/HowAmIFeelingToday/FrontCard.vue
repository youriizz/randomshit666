<template>
    <div class="front-card" :style="frontCardStyle">
      <div class="image-container" :style="imageContainerStyle"></div>
    </div>
  </template>
  
  
  <script>
  import brickemoji from '@/assets/HowAmIFeelingToday/brickemoji.webp';
import bubbleemoji from '@/assets/HowAmIFeelingToday/bubbleemoji.png';
import buttonemoji from '@/assets/HowAmIFeelingToday/buttonemoji.webp';
import clampemoji from '@/assets/HowAmIFeelingToday/clampemoji.png';
import moaiemoji from '@/assets/HowAmIFeelingToday/moaiemoji.png';
import petriemoji from '@/assets/HowAmIFeelingToday/petriemoji.webp';

export default {
  props: {
    itemId: Number
  },
  computed: {
    frontCardStyle() {
      let backgroundColor;
      switch (this.itemId) {
        case 1:
          backgroundColor = '#5F9EA0'; // Gold
          break;
        case 2:
          backgroundColor = '#FFFACD'; // DeepSkyBlue
          break;
        case 3:
          backgroundColor = '#CD5C5C'; // OrangeRed
          break;
        case 4:
          backgroundColor = '#9ACD32'; // LimeGreen
          break;
        case 5:
          backgroundColor = '#8B008B'; // BlueViolet
          break;
        case 6:
          backgroundColor = '#FF69B4'; // HotPink
          break;
        default:
          backgroundColor = '#FFFFFF'; // Default to white
      }
      return {
        backgroundColor,
        backfaceVisibility: 'hidden',
        borderRadius: '10%',
        border: '2px solid black',
        boxSizing: 'border-box',
        transition: 'transform 2s ease-in-out',
        transformStyle: 'preserve-3d'
      };
    },
    imageContainerStyle() {
      let imageUrl, size;
      switch (this.itemId) {
        case 1:
          imageUrl = brickemoji;
          size = '55%';
          break;
        case 2:
          imageUrl = bubbleemoji;
          size = '70%';
          break;
        case 3:
          imageUrl = buttonemoji;
          size = '50%';
          break;
        case 4:
          imageUrl = clampemoji;
          size = '75%';
          break;
        case 5:
          imageUrl = moaiemoji;
          size = '45%';
          break;
        case 6:
          imageUrl = petriemoji;
          size = '50%';
          break;
        default:
          imageUrl = '';
          size = '100%';
      }
      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: size,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transform: 'translateZ(90px)' // Move the image 50px in front
      };
    }
  }
};
</script>

  
<style scoped>
.front-card {
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 10%;
  border: 2px solid black;
  box-sizing: border-box;
  transition: transform 2s ease-in-out;
  transform-style: preserve-3d; /* Ensure 3D transform is respected */
  cursor: pointer;
}

.front-card::before, .front-card::after {
  content: '';
  position: absolute;
  top: -5px; /* Adjust the blur size */
  left: -5px; /* Adjust the blur size */
  right: -5px; /* Adjust the blur size */
  bottom: -5px; /* Adjust the blur size */
  border-radius: inherit;
  background: inherit;
  z-index: -1;
  filter: blur(10px)  /* Adjust the blur intensity */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 2s ease-in-out;
  background-repeat: no-repeat;
  background-position: center;
}


</style>

  