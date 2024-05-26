<template>
    <div class="arrow-container">
      <img :src="arrowSrc" alt="Down Arrow" class="arrow-svg" />
    </div>
  </template>
  
  <script>
  import arrowSrc from '@/assets/GestureIndications/arrowround.svg';
  
  export default {
    name: 'DownArrow',
    data() {
      return {
        arrowSrc,
      };
    },
  };
  </script>
  
  <style scoped>
  .arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0;
    height: 100%;
  
  }
  
  .arrow-svg {
    width: 40%; /* You can adjust this as needed */
    height: 80%;
    max-width: 480px; /* or any size you prefer */
    height: auto;
    transform: rotate(180deg);
  }
  </style>
  