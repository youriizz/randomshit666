<template>
    <div class="right-card" :class="{ show: isActive }">
      <div class="text-container-1">Did YOU Know That?!
        <div class='text-container-2'>{{ fact }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isActive: Boolean,
      itemId: {
        type: Number,
        required: true
      }
    },
    computed: {
      fact() {
        switch (this.itemId) {
          case 1:
            return 'The heart beats approximately 100,000 times a day?!';
          case 2:
            return 'A single cloud can weigh over a million pounds?!';
          case 3:
            return 'Bananas are berries, but strawberries aren’t?!';
          case 4:
            return 'A single strand of spaghetti is called a “spaghetto”?!';
          case 5:
            return 'There are more stars in the universe than grains of sand on all the world’s beaches?!';
          case 6:
            return 'Octopuses have three hearts and blue blood?!';
          default:
            return 'Default fact';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .right-card {
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 10%;
    border: 0px solid black;
    background-color: rgba(131, 131, 131, 0.8);
    color: white;
    top: 55%;
    right: -85%;
    transform: translateX(100%);
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    opacity: 0;
    pointer-events: none;
  }
  
  .right-card.show {
    opacity: 1;
    transform: translateX(-60%);
    pointer-events: auto;
  }
  .text-container-1 {
    margin: 10px;
    font-size: clamp(20px, 1.9vw, 24px);
  }
  
  .text-container-2 {
    position: absolute;
    top: 30%;
    padding: 30px;
    animation: scaleUp 4s forwards, trampoline 2s 4s infinite;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transform: scale(0);
    text-align: center;
    font-size: clamp(18px, 1.7vw, 20px);

  }
  
  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1.1);
    }
  }
  
  @keyframes trampoline {
    0%,
    100% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.9);
    }
  }
  
  
  p {
    margin: 0;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .right-card {
      width: 175%;
      height: 85%;
      border-radius: 10%;
      top: 104%;
      right: -142.5%;
    }
    .text-container-2 {
        top: 30%;
    }
  }
  </style>
  