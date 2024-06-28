<template>
    <div class="container-1">
        <img src="/HoldIt/cattimelapse.gif" alt="Animated Heart" class="gif-cat">
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .container-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  
  .gif-cat {
    display: block;
    max-width: 110%;
    max-height: 110%;
    cursor: pointer;
    object-fit: contain;
  }
  
  .container-1:active, .container-1:hover {
    filter:blur(5px)
  }
  </style>
  