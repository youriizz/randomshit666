<template>
    <div class="top-right-card" :class="{ show: isActive }">
        <div class="blur-background"></div>
      <slot></slot>
      <div class="date-text">Fri, Sep 11</div>
    <div class="temperature-text">666°C</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isActive: Boolean
    }
  };
  </script>
  
  <style scoped>
  .top-right-card {
    position: absolute;
    width: 80%;
    height: 35%;
    border-radius: 2vw;
    border: 0px solid rgb(255, 255, 255);
    background-color: rgb(255, 255, 255, 0);
    left: 105%;
    top: -20%;
    transform: translateY(-100%);
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .blur-background {
  position: absolute;
  border-radius: 2vw;
  width: 100%;
  height: 100%;
  background-image: url('https://images.radio-canada.ca/v1/ici-info/16x9/world-trade-center-new-york-tours-jumelles.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(2px);
  z-index: 0;
  
}
  
  .top-right-card.show {
    opacity: 1;
    transition-delay: 2s;
    transform: translateY(100%);
    pointer-events: auto;
    
  }

  .date-text {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: rgb(255, 255, 255);
  font-size: clamp(25px, 2vw, 50px);; /* Adjust size as needed */
  font-weight: bold;
}

.temperature-text {
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgb(255, 255, 255);
  font-size: clamp(25px, 3vw, 50px); /* Adjust size as needed */
  font-weight: bold;
}


@media (max-width: 768px) {
    .top-right-card {
        width: 176%;
        height: 37%;
        border-radius: 2vw;
        top: -125%;
        left: -38%;
  }
  .date-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  }
  }
  </style>
  