<template>
    <div class="traffic-light">
      <TrafficLightBtn light-type="red" />
      <TrafficLightBtn light-type="orange" :orange-route="orangeRoute" />
      <TrafficLightBtn light-type="green" :green-route="greenRoute" />
    </div>
  </template>
  
  <script>
  import TrafficLightBtn from "@/components/TrafficLightBtn.vue";
  
  export default {
    components: { TrafficLightBtn },
    props: {
      orangeRoute: {
        type: String,
        default: null
      },
      greenRoute: {
        type: String,
        default: null
      }
    }
  }
  </script>
  
  <style scoped>
  .traffic-light {
    border: 1px solid black;
    position: absolute;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  </style>
  