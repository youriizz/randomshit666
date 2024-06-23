<template>
   <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['touch']"
      :buttonText="startButtonText"
      :clickThrough="false"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
    <AskTheQuestion />
   </div>
  </template>
  
  <script>
  import Introduction from '../GestureIndications/Introduction.vue';
import AskTheQuestion from './AskTheQuestion.vue';
  
  
  export default {
    name: 'Quiz',
    components: {
      AskTheQuestion,
      Introduction
    },
    data() {
      return {
      showIntroduction: true,
      title: 'Quiz',
      description: 'Duration : 2 Minutes',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      }
    }
  };
  </script>
  
  <style scoped>
  .quiz {
    width: 100%;
    height: 100%;
  }
  </style>
  