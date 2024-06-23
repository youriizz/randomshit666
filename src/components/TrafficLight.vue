<template>

  <div :class="['traffic-light', { 'relative-size': relativeSize }]">
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
    },
    relativeSize: {
      type: Boolean,
      default: false
    }
  }
};

</script>

<style scoped>
.traffic-light {
  border: 0px solid black;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.traffic-light.relative-size {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  border: 0px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>