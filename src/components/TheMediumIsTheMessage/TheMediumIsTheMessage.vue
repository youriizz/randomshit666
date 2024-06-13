<template>
  <div>
  <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['scroll-down']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
  <div class="main-page">
    <LayerDown :scroll-position="scrollPosition" />
    <LayerUp @scroll="updateScrollPosition" />
  </div>
</div>
</template>

<script>
import LayerDown from './LayerDown.vue';
import LayerUp from './LayerUp.vue';
import Introduction from '../GestureIndications/Introduction.vue';

export default {
  components: {
    LayerDown,
    LayerUp,
    Introduction
  },
  data() {
    return {
      showIntroduction: true,
      title: 'The Medium is The Message',
      description: 'Duration : 45 Seconds',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      scrollPosition: 0
    };
  },
  methods: {
    updateScrollPosition(position) {
      if (typeof position === 'number') {
        this.scrollPosition = position;
      }
    }
  }
};
</script>

<style scoped>
.main-page {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Désactiver le défilement global */
}
</style>
