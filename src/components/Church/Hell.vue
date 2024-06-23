<template>
    <div class="section hell">
      
    <TrafficLight
      class="traffic-light"
      :orange-route="orangeRoute"
      :green-route="greenRoute"
      :relativeSize="false"
    />
    </div>
  </template>
  
  <script>
  import TrafficLight from '../TrafficLight.vue';
  export default {
    name: "Hell",
    components: {
    TrafficLight
  },
  data() {
    return {
      orangeRoute: 'notsimilar',
      greenRoute: 'similar'
    };
  },
  };
  </script>
  
  <style scoped>
  .section {
    height: 1000vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: darkred;
    position: relative;
  }

  .traffic-light {
  position: absolute;
  bottom: 0;
  transform: rotate(90deg);
  justify-content: center;
}
  </style>
  