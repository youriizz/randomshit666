<template>
  <div
    class="item"
    :class="{ active: isActive, hidden: !isActive && isAnyItemActive }"
    @click="toggleActive"
    :style="getStyle"
  >
    <div class="card">
      <FrontCard :item-id="item.id" />
      <BackCard :is-active="isActive" :item-id="item.id" />
    </div>
    <LeftCard :is-active="isActive" :item-id="item.id" />
    <RightCard :is-active="isActive" :item-id="item.id" />
    <BottomLeftCard :is-active="isActive" />
    <TopLeftCard :is-active="isActive" :item-id="item.id" />
    <TopRightCard :is-active="isActive" />
  </div>
</template>

<script>
import BackCard from './BackCard.vue';
import FrontCard from './FrontCard.vue';
import LeftCard from './LeftCard.vue';
import RightCard from './RightCard.vue';
import BottomLeftCard from './BottomLeftCard.vue';
import TopLeftCard from './TopLeftCard.vue';
import TopRightCard from './TopRightCard.vue';

export default {
  props: ['item', 'activeItemId'],
  components: {
    BackCard,
    FrontCard,
    LeftCard,
    RightCard,
    BottomLeftCard,
    TopLeftCard,
    TopRightCard
  },
  methods: {
    toggleActive() {
      this.$emit('toggle-active', this.item.id);
    }
  },
  computed: {
    isActive() {
      return this.item.id === this.activeItemId;
    },
    isAnyItemActive() {
      return this.activeItemId !== null;
    },
    getStyle() {
      const isMobile = window.innerWidth <= 768;
      if (this.isActive) {
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      } else {
        const position = isMobile ? this.item.mobilePosition : this.item.activePosition;
        return { ...position, transform: 'translate(0, 0)' };
      }
    }
  }
};
</script>

<style scoped>
.item {
  position: absolute;
  display: flex;
  height: 35%;
  width: 20%;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  transition: top 2s ease-in-out, left 2s ease-in-out, transform 2s ease-in-out, opacity 2s ease-in-out, height 2s ease-in-out, width 2s ease-in-out;
  opacity: 1;
}

.item.hidden {
  opacity: 0;
  pointer-events: none; /* Disable interactions when hidden */ 
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 2s ease-in-out;
}

.item.active .card {
  transform: rotateY(180deg);
}

.item.active {
  height: 50%;
  width: 30%;
}

.back-card {
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 10%;
  border: 2px solid black;
  box-sizing: border-box;
  background-color: rgb(0, 0, 0);
  transform: rotateY(180deg);
  color: white;
}

@media (max-width: 768px) {
  .item {
    height: 25%;
    width: 40%;
  }
  .item.active {
    height: 35%;
    width: 55%;
  }
}
</style>
