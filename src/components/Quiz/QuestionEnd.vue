<template>
    <div class="responses">
        <TrafficLight
          :orange-route="orangeRoute"
          :green-route="greenRoute"
          :relativeSize="false"
        />
  </div>
  </template>
  
  <script>
  import TrafficLight from '../TrafficLight.vue';
  
  export default {
    components: {
      TrafficLight
    },
    data() {
    return {
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',     // Remplacez par votre route
    };
  }
};
 </script>
  
  <style scoped>
  .responses {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: clamp(50px, 10vw, 200px);
  }
  </style>
  