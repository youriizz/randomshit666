<template>
  <div class="thumbnail-container">
    <img :src="gifUrl" alt="Person Scan" class="thumbnail-gif">
  </div>
</template>

<script>
import PersonScan from '@/assets/HowAmIFeelingToday/personscan.gif';

export default {
  data() {
    return {
      gifUrl: PersonScan
    };
  }
};
</script>

<style scoped>
.thumbnail-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease-in-out; /* Smooth transition for background color */
  cursor: pointer;
}

.thumbnail-container:hover,
.thumbnail-container:active {
  background-color: black; /* Change to your desired color */
}

.thumbnail-gif {
  height: 80%; /* Adjust size as needed */
  transition: filter 0.3s ease-in-out; /* Smooth transition for filter */
  animation: rotateFigure 10s infinite ease-in-out; /* Ensure the animation is applied here */
}

.thumbnail-container:hover .thumbnail-gif,
.thumbnail-container:active .thumbnail-gif {
  filter: invert(1);
}

@media (max-width: 768px) {
  .thumbnail-gif {
    transition: filter 0s; /* Remove smooth transition for filter on mobile */
  }
  .thumbnail-container {
    transition: background-color 0s; /* Remove smooth transition for background color on mobile */
  }
}

@keyframes rotateFigure {
  0%, 25%, 100% {
    transform: rotateY(0deg);
  }
  50%, 75% {
    transform: rotateY(180deg);
  }
}
</style>
