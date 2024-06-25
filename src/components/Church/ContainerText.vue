<template>
    <div :style="[computedStyle, additionalStyles]" class="container-text">
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: String,
      height: Number,
      additionalStyles: Object
    },
    computed: {
      computedStyle() {
        return {
          height: this.height + 'vh'
        };
      }
    }
  }
  </script>
  
  <style scoped>
  .container-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vw;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  p {
    font-size: clamp(20px, 6vw, 70px);
    text-align: center;
    z-index: 1;
  }
  </style>
  