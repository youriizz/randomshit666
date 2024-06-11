<template>
  <div v-if="visible" class="introduction">
    <TitleComponent :title="title" @titleMoved="handleTitleMoved"/>
    <Description v-if="descriptionVisible" :description="description" />
    <GestureIndications v-if="gestureVisible" :type="gestureType" />
    <StartButton v-if="startButtonVisible" 
      :buttonText="buttonText" 
      @start="start" 
      :clickThrough="clickThrough" 
    />
    <TrafficLightsExplanation 
      v-if="trafficLightsVisible"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
    />
  </div>
</template>

<script>
import TitleComponent from './Title.vue';
import Description from './Description.vue';
import GestureIndications from './GestureIndications.vue';
import StartButton from './StartButton.vue';
import TrafficLightsExplanation from './TrafficLightsExplanation.vue';

export default {
  components: {
    TitleComponent,
    Description,
    GestureIndications,
    StartButton,
    TrafficLightsExplanation
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    gestureType: {
      type: Array,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Start'
    },
    clickThrough: {
      type: Boolean,
      default: false
    },
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
      visible: true,
      descriptionVisible: false,
      gestureVisible: false,
      startButtonVisible: false,
      trafficLightsVisible: false
    };
  },
  methods: {
    handleTitleMoved() {
      console.log('Title has moved');
      // Show description when title movement is done
      this.descriptionVisible = true;
      // Show gesture indications 0.5s before title finishes moving
      setTimeout(() => {
        console.log('Gesture indications visible');
        this.gestureVisible = true;
      }, 1000); // 1 second after title starts moving

      // Show start button 2 seconds after title finishes moving
      setTimeout(() => {
        console.log('Start button visible');
        this.startButtonVisible = true;
      }, 2000); // 2 seconds after title finishes moving

      // Show traffic lights explanation 2 seconds after title finishes moving
      setTimeout(() => {
        console.log('Traffic lights explanation visible');
        this.trafficLightsVisible = true;
      }, 2000); // 2 seconds after title finishes moving
    },
    start() {
      console.log('Start button clicked');
      this.visible = false;
      this.$emit('start');
    }
  }
}
</script>

<style scoped>
.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95); /* Make the background opaque */
  z-index: 20; /* Ensure Introduction.vue is above other elements */
  padding: 20px;
  transition: opacity 1s;
  font-weight: normal;
}

.introduction.hidden {
  opacity: 0;
}
</style>
