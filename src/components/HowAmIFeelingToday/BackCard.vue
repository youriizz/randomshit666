<template>
    <div class="back-card" :class="{ show: isActive, 'transform-style': isActive }" :style="backCardStyle">
      <button class="close-button" @click="closeCard">X</button>
      <div class="text-container">{{ displayedText }}</div>
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
    data() {
      return {
        displayedText: '', // New data property for the displayed text
        typingInterval: null // To store the interval ID
      };
    },
    computed: {
      backCardStyle() {
        return {
          backgroundColor: '#FFFFFF', // Always white background
          backfaceVisibility: 'hidden',
          borderRadius: '10%',
          border: '0px solid black',
          boxSizing: 'border-box',
          transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
          transformStyle: 'preserve-3d',
          opacity: this.isActive ? 1 : 0
        };
      },
      phrase() {
        switch (this.itemId) {
          case 1:
            return 'The energies of Saturn weigh heavily on you today, bringing a gravity and depth to your thoughts. I see an invisible force weighing on your aura, like a burden you carry on your shoulders.';
          case 2:
            return 'The light breeze of Venus envelops you, bringing a sense of lightness and freedom. Your spirit is like a feather in the wind, light and free, floating with the currents.';
          case 3:
            return 'The Sun shines brightly in your sign, enveloping you in a radiant aura and attracting admiring gazes. Your aura glows with a golden light, illuminating everything around you and radiating vitality.';
          case 4:
            return 'The influence of Jupiter in your house of discipline grants you impeccable organization and structure. I see clear lines and geometric shapes around you, symbolizing a perfectly ordered and well-structured life.';
          case 5:
            return 'The influence of Mercury in retrograde creates an emotional detachment, making your interactions more rational than sentimental. I see a gray veil over your heart, preventing emotions from passing through and leaving a cold implacability.';
          case 6:
            return 'The energy of Mercury in Gemini stimulates your curiosity, prompting you to explore new ideas and knowledge. I perceive an insatiable thirst for knowledge in your gaze, like an eternal traveler seeking new discoveries.';
          default:
            return 'Default phrase';
        }
      }
    },
    watch: {
      isActive(newVal) {
        if (newVal) {
          this.startTypingEffect();
        } else {
          this.displayedText = ''; // Reset the displayed text
          clearInterval(this.typingInterval); // Clear any existing interval
        }
      },
      phrase() {
        this.startTypingEffect();
      }
    },
    methods: {
  startTypingEffect() {
    this.displayedText = ''; // Reset the displayed text
    clearInterval(this.typingInterval); // Clear any existing interval
    const newPhrase = this.phrase;
    let index = 0;

    setTimeout(() => {
      this.typingInterval = setInterval(() => {
        if (index < newPhrase.length) {
          this.displayedText += newPhrase.charAt(index);
          index++;
        } else {
          clearInterval(this.typingInterval); // Clear the interval when done
        }
      }, 60); // Adjust the typing speed here
    }, 1800); // 2-second delay before starting to type
    },
    closeCard() {
        this.$emit('close-card', this.itemId);
    }
    },
    beforeDestroy() {
      clearInterval(this.typingInterval); // Clear the interval when component is destroyed
    }
  };
  </script>
  
  <style scoped>
  .back-card {
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 10%;
    border: 2px solid black;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255); /* White background */
    transform: rotateY(180deg);
    color: rgb(0, 0, 0); 
    padding: 20px;
    text-align: center;
    font-size: clamp(13px, 1.7vw, 24px);
    transform-style: preserve-3d;
    opacity: 0;
    transition: opacity 2s ease-in-out, transform 2s ease-in-out; /* Add opacity transition */
  }
  
  .back-card.show {
    opacity: 1;
    pointer-events: auto;
  }
  
  .back-card::before, .back-card::after {
    content: '';
    position: absolute;
    top: -2px; /* Adjust the blur size */
    left: -2px; /* Adjust the blur size */
    right: -2px; /* Adjust the blur size */
    bottom: -2px; /* Adjust the blur size */
    border-radius: inherit;
    background: inherit;
    z-index: -1;
    filter: blur(6px); /* Adjust the blur intensity */
  }
  
  .text-container {
    color: rgb(0, 0, 0); 
    margin: 3vw;
    transform: translateZ(90px); /* Move the text 90px in front */
  }
  
  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgb(180, 180, 180);
    font-size: 0.8em;
    color: rgb(180, 180, 180);
    cursor: pointer;
    z-index: 10;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.3); /* Add blur effect */
    z-index: 0;
  }
  
  .close-button:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    .back-card::before, .back-card::after {
      filter: blur(0px); /* Adjust the blur intensity */
    }
    .close-button {
      width: 20px;
      height: 20px;
      top: 10px;
      right: 10px;
    }
  }
  
  @keyframes TextMoving {
    0% {
      margin: 2vw;
      color: rgb(0, 0, 0);
    }
    100% {
      margin: 4vw;
    }
  }
  </style>
  