<template>
    <transition name="question-text" mode="out-in">
      <p v-if="show" class="question-text">{{ text }}</p>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      text: String,
      show: Boolean
    }
  };
  </script>
  
  <style scoped>
  .question-text {
    font-size: clamp(2em, 7vw, 3em);
    position: absolute;
    top: 50%;
    left: -100%;
    white-space: nowrap;
    animation: questionTextSlide 2s forwards, questionTextScale 2s 2s forwards;
    background-color: yellow;
    padding: clamp(5px, 1vw, 10px);
    border: 1px solid black;
    z-index: 10;
  }
  
  @media (max-width: 1024px) {
    .question-text {
      width: 70%;
      top: 50%;
      left: -100%;
      white-space:break-spaces;
      animation: questionTextSlide 2s forwards, questionTextScale 2s 2s forwards;
      background-color: yellow;
      padding: clamp(5px, 1vw, 10px);
      border: 1px solid black;
      z-index: 10;
    }
  }
  
  @keyframes questionTextSlide {
    0% {
      left: -100%;
    }
    50% {
      left: 50%;
      transform: translateX(-50%);
    }
    100% {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @keyframes questionTextScale {
    0% {
      transform: translateX(-50%) scale(1);
      top: 50%;
    }
    100% {
      transform: translateX(-20%) scale(0.5);
      top: -5%;
      left: 0;
    }
  }
  
  @media (max-width: 1024px) {
    @keyframes questionTextSlide {
      0% {
        left: -200%;
      }
      50% {
        left: 50%;
        transform: translateX(-50%);
      }
      100% {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    @keyframes questionTextScale {
      0% {
        width: 70%;
        transform: translateX(-50%) scale(1);
        top: 50%;
      }
      80% {
        width: 90%;
      }
      100% {
        width: 150%;
        transform: translate(-24%, -48%) scale(0.5);
        top: 0;
        left: 0;
      }
    }
  }
  
  /* Transition for question-text */
  .question-text-enter-active, .question-text-leave-active {
    transition: opacity 1s;
  }
  
  .question-text-enter, .question-text-leave-to {
    opacity: 0;
  }
  </style>
  