<template>
    <h1 :class="{ 'move': move }">{{ title }}</h1>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        move: false
      };
    },
    mounted() {
      setTimeout(() => {
        this.move = true;
      }, 1000); // Delay before moving the title
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    text-align: center;
    margin: 20px 0;
    transition: all 1s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  h1.move {
    top: 10px;
    left: 10px;
    transform: translate(0, 0);
    font-size: 1.5em;
  }
  </style>
  