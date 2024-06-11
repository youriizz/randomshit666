<template>
    <div v-if="visible" class="introduction">
      <Title :title="title" />
      <Description :description="description" />
      <GestureIndications :type="gestureType" />
      <StartButton :buttonText="buttonText" @start="start" :clickThrough="clickThrough" />
    </div>
  </template>
  
  <script>
  import Title from './Title.vue';
  import Description from './Description.vue';
  import GestureIndications from './GestureIndications.vue';
  import StartButton from './StartButton.vue';
  
  export default {
    components: {
      Title,
      Description,
      GestureIndications,
      StartButton
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
      }
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      start() {
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
    background: rgba(255, 255, 255, 0.9); /* Make the background opaque */
    z-index: 20; /* Ensure Introduction.vue is above other elements */
    padding: 20px;
    transition: opacity 1s;
  }
  
  .introduction.hidden {
    opacity: 0;
  }
  
  .start-button {
    margin-top: 40px;
    transition: opacity 3s;
    opacity: 0;
    position: relative;
    top: 50px;
  }
  
  .start-button.visible {
    opacity: 1;
  }
  </style>
  