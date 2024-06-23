<template>
  <div class="section heaven">
    <img :src="artefact1" alt="Artefact 1" class="image" />
    <img :src="artefact2" alt="Artefact 2" class="image" />
    <img :src="eglise2" alt="Eglise 2" class="image" />
    <img :src="tableau1" alt="Tableau 1" class="image" />
  
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
import artefact1 from '@/assets/Church/artefact1.png';
import artefact2 from '@/assets/Church/artefact2.png';
import eglise2 from '@/assets/Church/eglise2.png';
import tableau1 from '@/assets/Church/tableau1.png';

export default {
  name: "Heaven",
  components: {
    TrafficLight
  },
  data() {
    return {
      artefact1,
      artefact2,
      eglise2,
      tableau1,
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',  
    };
  },
};
</script>


<style scoped>
.section {
  height: 3000vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: lightblue;
  position: relative;
}

.image {
  max-width: 100%;
  max-height: 100%; /* Adjust size as necessary */
}

.traffic-light {
  position: absolute;
  top: 0;
  transform: rotate(-90deg);
  justify-content: center;
}
</style>

  