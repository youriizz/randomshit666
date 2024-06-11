<template>
    <div :class="['traffic-light', { 'relative-size': relativeSize }]">
      <TrafficLightBtn light-type="red" />
      <TrafficLightBtn light-type="orange" />
      <TrafficLightBtn light-type="green" />
    </div>
  </template>
  
  <script>
  import TrafficLightBtn from "@/components/TrafficLightBtn.vue";
  
  export default {
    props: {
      relativeSize: {
        type: Boolean,
        default: false
      }
    },
    components: { TrafficLightBtn },
  }
  </script>
  
  <style scoped>
  .traffic-light {
    border: 1px solid black;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  
  .traffic-light.relative-size {
    width: 100%;
    height: 100%;
    position: relative;
    border: 0px solid black;
  }
  </style>
  