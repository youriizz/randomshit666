<template>
    <div class="top-left-card" :class="{ show: isActive }" :style="cardStyle">
      <div class="text-container">
        <div class="top-left-text">Your ♡ Body Part</div>
        <div class="bottom-center-emoji">{{ emoji }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isActive: Boolean,
      itemId: Number
    },
    data() {
      return {
        emojis: ["🍑", "👁️", "👂", "🍒", "🍆", "👄"],
        colorSets: [
        ["rgba(255, 102, 102, 0.8)", "rgba(255, 200, 98, 0.8)", "rgba(255, 255, 0, 0.8)", "rgba(159, 255, 159, 0.8)", "rgba(151, 151, 255, 0.8)", "rgba(212, 151, 255, 0.8)", "rgba(255, 151, 255, 0.8)"],
        ["rgba(255, 0, 0, 0.8)", "rgba(255, 165, 0, 0.8)", "rgba(255, 255, 0, 0.8)", "rgba(0, 128, 0, 0.8)", "rgba(0, 0, 255, 0.8)", "rgba(75, 0, 130, 0.8)", "rgba(238, 130, 238, 0.8)"],
        ["rgba(255, 105, 180, 0.8)", "rgba(255, 182, 193, 0.8)", "rgba(255, 239, 213, 0.8)", "rgba(240, 230, 140, 0.8)", "rgba(173, 216, 230, 0.8)", "rgba(144, 238, 144, 0.8)", "rgba(255, 228, 225, 0.8)"]
      ]
    };
  },
  computed: {
    emoji() {
      return this.emojis[this.itemId % this.emojis.length];
    },
    cardStyle() {
      const colors = this.colorSets[this.itemId % this.colorSets.length];
      const gradient = `linear-gradient(180deg, ${colors.join(', ')})`;
      return {
        background: gradient,
        backgroundSize: '300% 300%'
      };
      }
    }
  };
  </script>
  
  <style scoped>
  .top-left-card {
    position: absolute;
    width: 70%;
    height: 30%;
    border-radius: 2vw;
    border: 0px solid black;
    left: -20%;
    top: -70%;
    transform: translateY(-100%);
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    opacity: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: 300% 300%; /* For gradient animation */
    animation: gradientAnimation 5s ease infinite; /* Adjust duration as needed */
  }
  
  .top-left-card.show {
    transition-delay: 2s;
    opacity: 1;
    transform: translateY(100%);
    pointer-events: auto;
  }
  
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
  
  .top-left-text {
    width: 70%;
    margin: clamp(8px, 3vw, 20px);
    color: rgb(255, 255, 255);
    font-size: clamp(20px, 3vw, 35px); /* Adjust size as needed */
    font-family: 'Courier New', Courier, monospace;
    font-weight: 500;
  }
  
  .bottom-center-emoji {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: clamp(40px, 5vw, 50px); /* Adjust size as needed */
  }

  @media (min-width: 768px) {
    .bottom-center-emoji {
        position: absolute;
        bottom: 0px;
        right: 30px;
    }

  }
  
  @media (max-width: 768px) {
    .top-left-card {
      width: 35%;
      height: 105%;
      border-radius: 4vw;
      top: -151.2%;
      left: 103%;
    }
    .top-left-text {
        text-align: center;
    }
    }

    @keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 50%; }
}
  </style>
  