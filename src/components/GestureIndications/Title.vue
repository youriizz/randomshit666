<template>
    <h1 :class="{ 'move': move }">{{ displayedTitle }}</h1>
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
        displayedTitle: '',
        move: false
      };
    },
    mounted() {
      this.typeWriterEffect(this.title, 0);
    },
    methods: {
      typeWriterEffect(text, index) {
        if (index < text.length) {
          this.displayedTitle += text.charAt(index);
          setTimeout(() => {
            this.typeWriterEffect(text, index + 1);
          }, 100); // Adjust typing speed here
        } else {
          setTimeout(() => {
            this.move = true;
            this.$emit('titleMoved'); // Emit event when title moves
          }, 1000); // Delay before moving the title
        }
      }
    }
  }
  </script>
  
  
  <style scoped>
  h1 {
    font-size: clamp(40px, 7vw, 100px);
    text-align: center;
    transition: all 1s;
    position: absolute;
    padding: 2vw;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background-color: rgb(255, 255, 255);
    width: 60%; /* Maintain initial width for multiline text */
    white-space: pre-wrap; /* Preserve whitespace for multiline text */
    border: 1px solid rgb(0, 0, 0);
    border-radius: 20vw;
    
  }
  
  h1.move {
    top: 5%;
    left: 5%;
    transform: translate(-25%, -25%) scale(0.5); /* Adjust scale to resize text */
    white-space: pre-wrap; /* Maintain whitespace for multiline text */
  }
  

  
  @media (max-width: 768px) {
    h1 {
      width: 90%;
      border: 0.5px solid rgb(255, 0, 0);
    }
    h1.move {
    left: 4%;
    width: 70%;
    }
  }
  </style>
