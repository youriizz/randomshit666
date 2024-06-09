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
  };
  </script>
  
  <style scoped>
  .traffic-light {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  </style>
  