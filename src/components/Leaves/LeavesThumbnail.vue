<template>
  <div class="container-1">
    <div class="overlay-container">
      <div class="gradient-overlay"></div>
      <img src="https://d2w9rnfcy7mm78.cloudfront.net/8933674/original_2091e3194c06a3cbaf80922447c470cc.gif?1601546262?bc=0" alt="Trees" class="trees" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.overlay-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure the overlay doesn't block interactions with the image below */
  z-index: 2; /* Ensure it's on top of the image */
  background: radial-gradient(circle, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 20%, rgba(255, 255, 255, 1) 100%);
  animation: animateGradient 5s infinite alternate; /* Animation for changing the gradient */
}

@keyframes animateGradient {
  0% {
    transform: scale(1.7);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.7);
    opacity: 1;
  }
}

.gradient-overlay:hover, .container-1:hover, .trees:hover {
  filter: contrast(70%)

}

.trees {
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  transition: filter 0.3s, transform 0.3s; /* Transition pour les filtres et les transformations */
}



.container-1:active .trees {
  filter: blur(5px);
}

@media (max-width: 600px) {
  .gradient-overlay:hover, .container-1:hover, .trees:hover {
  filter: contrast(100%)
}
}
</style>
