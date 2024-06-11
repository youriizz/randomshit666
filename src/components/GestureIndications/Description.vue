<template>
    <p :class="{ 'visible': visible }">{{ description }}</p>
  </template>
  
  <script>
  export default {
    props: {
      description: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        visible: false
      };
    },
    mounted() {
      setTimeout(() => {
        this.visible = true;
      }, 3000);
    }
  }
  </script>
  
  <style scoped>
  p {
    text-align: center;
    font-size: 1.2em;
    margin: 20px 0;
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: opacity 1s;
    opacity: 0;
  }
  
  p.visible {
    opacity: 1;
  }
  </style>
  