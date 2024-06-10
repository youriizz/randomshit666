<template>
  <div class="bottom-left-card" :class="{ show: isActive }">
    <TrafficLight :relativeSize="true" />
  </div>
</template>

<script>
import TrafficLight from '../TrafficLight.vue';

export default {
  props: {
    isActive: Boolean
  },
  components: {
    TrafficLight
  }
};
</script>

<style scoped>
.bottom-left-card {
  position: absolute;
  width: 20%;
  height: 70%;
  border-radius: 1.7vw;
  border: 0px solid black;
  background-color: rgb(45, 45, 45);
  top: 60%;
  left: -30%;
  transform: scale(0);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  opacity: 0;
  pointer-events: none;
}

.bottom-left-card.show {
  opacity: 1;
  transition-delay: 3s;
  transform: scale(1);
  pointer-events: auto;
}


@media (max-width: 768px) {
  .bottom-left-card {
    width: 34%;
    height: 80%;
    border-radius: 15vw;
    top: 0%;
    left: -38.5%;
  }
}
</style>
