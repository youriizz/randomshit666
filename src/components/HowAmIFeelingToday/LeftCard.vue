<template>
    <div class="left-card" :class="{ show: isActive }">
      <img :src="dayTaskLogo" alt="Day Task Logo" class="day-task-logo">
      <div class="text-container-1">
        <p>{{ task }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import DayTaskLogo from '@/assets/HowAmIFeelingToday/DayTask.png';
  
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
        dayTaskLogo: DayTaskLogo
      };
    },
    computed: {
      task() {
        switch (this.itemId) {
          case 1:
            return '- Smoke two large packets of cigarettes';
          case 2:
            return '- Drink 8 glasses of blood.';
          case 3:
            return '- Build a church for Marcel Duchamp.';
          case 4:
            return '- Take a Walk On the Wild Side';
          case 5:
            return '- Write us an email at inforandomShit666.com';
          case 6:
            return "- Dig a grave for someone who's still alive";
          default:
            return '- Complete a random act of kindness.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .left-card {
    position: absolute;
    width: 50%;
    height: 40%;
    border-radius: 10%;
    border: 0px solid black;
    background-color: rgb(255, 255, 255);
    top: 10%;
    left: -85%;
    transform: translateX(-100%);
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    opacity: 0;
    pointer-events: none;
    color: rgb(88, 88, 88);
  }
  
  .left-card.show {
    opacity: 1;
    transform: translateX(60%);
    pointer-events: auto;
  }
  
  .day-task-logo {
    position: absolute;
    top: 10px;
    left: clamp(10px, 2vw, 15px);
    width: 30%; /* Adjust the size as needed */
    height: auto; /* Adjust the size as needed */
  }
  
  .text-container-1 {
    padding-right: 100px;
    position: absolute;
    text-align: left;
    font-family:'Times New Roman', Times, serif;
    font-size: clamp(15px, 1.3vw, 20px);
    bottom: 10px;
    left: clamp(10px, 2vw, 15px);
  }

  
  @media (max-width: 768px) {
    .left-card {
      width: 138%;
      height: 42%;
      border-radius: 4vw;
      top: -46%;
      left: -121%;
    }
    .day-task-logo {
    top: 10px;
    width: 30%; /* Adjust the size as needed */
    height: auto; /* Adjust the size as needed */
  }
  
  .text-container-1 {
    padding-right: 10px;
    padding-left: 120px;
    position: absolute;
    top: 20%;
    text-align: left;
    font-family:'Times New Roman', Times, serif;
    font-size: clamp(15px, 1.3vw, 20px);
    left: clamp(10px, 2vw, 15px);
  }
  }
  </style>
  