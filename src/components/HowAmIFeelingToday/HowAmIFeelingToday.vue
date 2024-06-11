<template>
  <div class="container-window">
    <div class="background-layer" :class="{ show: isActiveBackground }" :style="backgroundLayerStyle"></div>
    <GridItem 
      v-for="item in items" 
      :key="item.id" 
      :item="item" 
      :active-item-id="activeItemId"
      @toggle-active="toggleActive" 
    />
  </div>
</template>




<script>
import GridItem from './GridItem.vue';
import brickemojiBg from '@/assets/HowAmIFeelingToday/background2.webp';
import bubbleemojiBg from '@/assets/HowAmIFeelingToday/background5.webp';
import buttonemojiBg from '@/assets/HowAmIFeelingToday/background3.webp';
import clampemojiBg from '@/assets/HowAmIFeelingToday/background4.webp';
import moaiemojiBg from '@/assets/HowAmIFeelingToday/background1.webp';
import petriemojiBg from '@/assets/HowAmIFeelingToday/background6.webp';

export default {
  components: {
    GridItem
  },
  data() {
    return {
      items: [
        { id: 1, activePosition: { top: '10%', left: '10%' }, mobilePosition: { top: '7.5%', left: '5%' }, bgImage: brickemojiBg },
        { id: 2, activePosition: { top: '10%', left: '40%' }, mobilePosition: { top: '7.5%', left: '55%' }, bgImage: bubbleemojiBg },
        { id: 3, activePosition: { top: '10%', left: '70%' }, mobilePosition: { top: '37.5%', left: '5%' }, bgImage: buttonemojiBg },
        { id: 4, activePosition: { top: '55%', left: '10%' }, mobilePosition: { top: '37.5%', left: '55%' }, bgImage: clampemojiBg },
        { id: 5, activePosition: { top: '55%', left: '40%' }, mobilePosition: { top: '67.5%', left: '5%' }, bgImage: moaiemojiBg },
        { id: 6, activePosition: { top: '55%', left: '70%' }, mobilePosition: { top: '67.5%', left: '55%' }, bgImage: petriemojiBg }
      ],
      activeItemId: null
    };
  },
  computed: {
    backgroundLayerStyle() {
      const activeItem = this.items.find(item => item.id === this.activeItemId);
      return {
        backgroundImage: activeItem ? `url(${activeItem.bgImage})` : 'rgb(255, 255, 255)',
        backgroundSize: 'cover'
      };
    },
    isActiveBackground() {
      return this.activeItemId !== null;
    }
  },
  methods: {
    toggleActive(id) {
      this.activeItemId = this.activeItemId === id ? null : id;
    }
  }
};
</script>

<style scoped>
.container-window {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  border: 0px solid black;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  font-family: Helvetica Neue;
  font-weight: 500;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgb(255, 255, 255);
  transition: opacity 1.5s ease-in-out;
  opacity: 0;
}

.background-layer.show {
  transition: opacity 1.5s ease-in-out;
  opacity: 1;
}
</style>



