<template>
  <div class="BB200grille-1">
    <div v-for="n in 23" :key="n" :class="`BB200item BB200item-${n}`">Item {{ n }}</div>
    <div class="BB200item BB200item-24">
      <TrafficLight :orangeRoute="'orangePage'" :greenRoute="'greenPage'"/>
      <div class="BB100EXITrondinfo" @mouseover="showInfo = !isMobile" @mouseleave="showInfo = false" @click="toggleInfo">?</div>
    </div>
    <div v-if="showInfo && !isMobile" class="info-popup">
      The symbol has no single function or meaning. In Hinduism, Jainism and Buddhism, the Swastika is still used today as a religious symbol of good luck. In German, a heraldic symbol that resembles the Swastika has been called a „Hakenkreuz“ since the 18th century.
    </div>
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight.vue";

export default {
  components: { TrafficLight },
  data() {
    return {
      showInfo: false,
      isMobile: false
    };
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    toggleInfo() {
      this.showInfo = !this.showInfo;
    }
  }
};
</script>

<style scoped>
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Helvetica neue", sans-serif;
  font-weight: 500;
  overflow-x: hidden;
}

.BB200grille-1 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0px;
  overflow: hidden;
}

.BB200item {
  aspect-ratio: 1;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: clamp(1.5rem, 1vw, 2.5rem);
}

@media (min-width: 1200px) {
  .BB200grille-1 {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
  }
}

@media (max-width: 600px) {
  .BB200grille-1 {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }
}

.BB200item:nth-child(1) { background-image: url('@/assets/Swastika/jaune.png'); }
.BB200item:nth-child(2) { background-image: url('@/assets/Swastika/viking.png'); }
.BB200item:nth-child(3) { background-image: url('@/assets/Swastika/monnaie.png'); }
.BB200item:nth-child(4) { background-image: url('@/assets/Swastika/graphic.png'); }
.BB200item:nth-child(5) { background-image: url('@/assets/Swastika/metal.png'); }
.BB200item:nth-child(6) { background-image: url('@/assets/Swastika/roches.png'); }
.BB200item:nth-child(7) { background-image: url('@/assets/Swastika/carré.png'); }
.BB200item:nth-child(8) { background-image: url('@/assets/Swastika/coussinswastiska.png'); }
.BB200item:nth-child(9) { background-image: url('@/assets/Swastika/rouge.png'); }
.BB200item:nth-child(10) { background-image: url('@/assets/Swastika/armoiries.png'); }
.BB200item:nth-child(11) { background-image: url('@/assets/Swastika/indianphoto.png'); }
.BB200item:nth-child(12) { background-image: url('@/assets/Swastika/chaise.png'); }
.BB200item:nth-child(13) { background-image: url('@/assets/Swastika/rond.png'); }
.BB200item:nth-child(14) { background-image: url('@/assets/Swastika/deuxboutons.png'); }
.BB200item:nth-child(15) { background-image: url('@/assets/Swastika/communist.png'); }
.BB200item:nth-child(16) { background-image: url('@/assets/Swastika/cocacola.png'); }
.BB200item:nth-child(17) { background-image: url('@/assets/Swastika/vaserond.png'); }
.BB200item:nth-child(18) { background-image: url('@/assets/Swastika/kidhead.png'); }
.BB200item:nth-child(19) { background-image: url('@/assets/Swastika/old.png'); }
.BB200item:nth-child(20) { background-image: url('@/assets/Swastika/photovase.png'); }
.BB200item:nth-child(21) { background-image: url('@/assets/Swastika/peigne.png'); }
.BB200item:nth-child(22) { background-image: url('@/assets/Swastika/soleil.png'); }
.BB200item:nth-child(23) { background-image: url('@/assets/Swastika/dessins.png'); }

.BB200item-24 {
  position: relative;
}

.BB100EXITrondinfo {
  position: absolute;
  top: -30px;
  left: 10%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(224, 224, 224);
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: black;
  cursor: pointer;
  z-index: 10;
}

.BB100EXITrondinfo::after {
  content: "The symbol has no single function or meaning. In Hinduism, Jainism and Buddhism, the Swastika is still used today as a religious symbol of good luck. In German, a heraldic symbol that resembles the Swastika has been called a „Hakenkreuz“ since the 18th century.";
  position: absolute;
  width: max(250px, 15vw);
  left: -255%; /* Adjusted to move to the left */
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  display: none;
  z-index: 2;
  font-size: clamp(12px, 1.5vw, 25px);
}

.BB100EXITrondinfo:hover::after {
  display: block;
}

.BB100EXITrondinfo:hover {
  background-color: rgb(251, 251, 251);
}

.info-popup {
  position: fixed;
  bottom: -30vh; /* Initially hidden below the view */
  left: 0;
  width: 100vw;
  height: 30vh;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(12px, 2vw, 16px);
  z-index: 100;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}

.info-popup.show {
  transform: translateY(0);
}


@media (max-width: 768px) {
    .BB100EXITrondinfo {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(224, 224, 224);
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: black;
    cursor: pointer;
  }
  
  .BB100EXITrondinfo::after {
    content: "The symbol has no single function or meaning. In Hinduism, Jainism and Buddhism, the Swastika is still used today as a religious symbol of good luck. In German, a heraldic symbol that resembles the Swastika has been called a „Hakenkreuz“ since the 18th century.";
    position: absolute;
    width: max(250px, 25vw);
    right: 100%; /* Adjusted to move to the left */
    top: -100%;
    transform: translateY(-50%);
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    display: none;
    z-index: 2;
    font-size: clamp(12px, 1.5vw, 25px);
  }
}
</style>
