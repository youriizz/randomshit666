<template>
    <h1 :class="{ 'visible': visible }">{{ description }}</h1>
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
  h1 {
    background-color: rgb(255, 255, 255);
    border: 0px solid rgb(0, 0, 255);
    padding: 1vw;
    text-align: center;
    width: 30%;
    font-size: clamp(15px, 2.5vw, 35px);
    position: absolute;
    font-weight: normal;
    bottom: 5%;
    left: 5%;
    transition: opacity 1s;
    opacity: 0;
  }
  
  h1.visible {
    opacity: 1;
  }

  @media (max-width:768px) {
    h1 {
        width: 35%;
        border: 0.5px solid rgb(0, 0, 255);
    }
  }
  </style>
  