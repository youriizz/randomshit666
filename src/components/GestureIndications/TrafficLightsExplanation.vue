<template>
    <div class="traffic-lights-explanation" :class="{ 'visible': visible }">
      <div class="explanations">
        <div class="header">
          <span>Click on start, you'll find a way out at the end of the artwork :</span>
        </div>
        <div class="light-explanation">
          <span>If you click on red, you will be taken to the homepage.</span>
        </div>
        <div class="light-explanation">
          <span>If you click on orange, you will be taken to a different themed page.</span>
        </div>
        <div class="light-explanation">
          <span>If you click on green, you will be taken to a similar themed page.</span>
        </div>
      </div>
      <div class="traffic-light-container">
        <TrafficLight
          :orange-route="orangeRoute"
          :green-route="greenRoute"
        />
      </div>
    </div>
  </template>
  
  <script>
  import TrafficLight from "@/components/TrafficLight.vue";
  
  export default {
    components: { TrafficLight },
    props: {
      orangeRoute: {
        type: String,
        required: true
      },
      greenRoute: {
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
      // Make it visible after a delay
      setTimeout(() => {
        this.visible = true;
      }, 2000); // 2 seconds delay to match StartButton
    }
  }
  </script>
  
  <style scoped>
  .traffic-lights-explanation {
    position: absolute;
    bottom: 3%;
    right: 3%;
    height: 40%;
    width: 30%;
    border: 1px solid black;
    border-radius: 3vw;
    padding: 10px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: row; /* Place explanations and traffic light side by side */
    justify-content: space-between; /* Ensure space between the explanations and traffic light */
    align-items: center; /* Align items in the center vertically */
    opacity: 0;
    transition: opacity 1s;
    z-index: 10;
    font-weight: 400;
    font-size: clamp(0.2em, 1vw, 1em);
  }
  
  .traffic-lights-explanation.visible {
    opacity: 1;
  }
  
  .explanations {
    margin-left: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; /* Distribute space evenly between items */
    align-items: flex-start; /* Align text to the start */
    width: 70%; /* Take up most of the container width */
    height: 100%; /* Ensure it uses the full height */
    box-sizing: content-box;
  }
  
  .header {
    position: relative;
    top: 0%;
    font-size: clamp(1em, 4vw, 2em); /* Larger font size for the header */
    font-weight: 500;
  }
  
  .light-explanation {
    width: 100%; /* Ensure each explanation takes full width */
    margin-bottom: 0%;
    margin-top: 10%;
  }
  
  .light-explanation span {
    display: block; /* Ensure each explanation is on a new line */
  }
  
  .traffic-light-container {
    position: absolute;
    display: flex;
    align-items: flex-end; /* Align the traffic lights to the bottom */
    bottom: 0;
    right: 10px;
    width: 30%; /* Adjust the width as needed */
    height: 80%; /* Adjust the height as needed */
  }

  @media (max-width: 768px) {
    .traffic-lights-explanation {
    position: absolute;
    bottom: 1%;
    right: 2.5%;
    height: 25%;
    width: 90%;
    border: 1px solid black;
    border-radius: 3vw;
    padding: 10px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: row; /* Place explanations and traffic light side by side */
    justify-content: space-between; /* Ensure space between the explanations and traffic light */
    align-items: center; /* Align items in the center vertically */
    opacity: 0;
    transition: opacity 1s;
    z-index: 5;
    font-weight: 400;
    font-size: clamp(0.7em, 1vw, 1em);
  }
  .light-explanation {
    width: 100%; /* Ensure each explanation takes full width */
    margin-bottom: 0%;
    margin-top: 0%;
  }
  }
  </style>
  