<template>
  <div class="gallery" ref="gallery">
    <div
      class="container"
      v-for="(item, index) in duplicatedItems"
      :key="index"
      :class="{ center: isCenterContainer(index) }"
      @click="centerContainer(item.value)"
    >
      <div v-if="item.value === 10" class="traffic-lights">
        <TrafficLightBtn lightType="red" style="top: 45%; left: 30%; transform: scale(0.4);" />
        <TrafficLightBtn lightType="green" greenRoute="similar" style="top: 30%; left: 50%; transform: scale(0.6);" />
        <TrafficLightBtn lightType="orange" orangeRoute="notsimilar" style="top: 40%; left: 75%; transform: scale(0.3);" />
      </div>
      <img :src="item.src" alt="" v-if="item.src" />
      <span v-else>{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
import TrafficLightBtn from '../TrafficLightBtn.vue';

TrafficLightBtn


export default {
  name: 'TreesCarousel',
  components: { TrafficLightBtn },
  props: ['currentIndex'],
  data() {
      return {
        items: [
          { value: 1, src: 'https://media.gerbeaud.net/2023/12/640/bouleau.jpg' },
          { value: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg' },
          { value: 3, src: 'https://lh6.googleusercontent.com/proxy/e2UqVkidBcV3N8EZ32WUDZz21NIZQ-UJUcR9KCv6hslmGgva8Qvxa4YZ-CrntlmlfL3SeEUw9QPQvj9J0iDV-01CFq-yVO6cL3jiET9J14oXug' },
          { value: 4, src: 'https://www.pepinieres-lecomte.com/2381-thickbox_default/saule-pleureur-.jpg' },
          { value: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Giant_Sequoia_Sequoiadendron_giganteum_Tyler_Tree_2000px.jpg/800px-Giant_Sequoia_Sequoiadendron_giganteum_Tyler_Tree_2000px.jpg' },
          { value: 6, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Pachycereus_pringlei_cardon_sahueso.JPG/480px-Pachycereus_pringlei_cardon_sahueso.JPG' },
          { value: 7, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acacia_georginae_habit.jpg/480px-Acacia_georginae_habit.jpg' },
          { value: 8, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pappel_Wonfurt%2C_2.jpg/900px-Pappel_Wonfurt%2C_2.jpg?20110821071302' },
          { value: 9, src: 'https://www.jardinsdefrance.org/wp-content/uploads/2023/05/Jubea-min.png' },
          { value: 10, src: 'https://www.tela-botanica.org/actu/IMG/pommier.jpg' },
          { value: 11, src: 'https://img.fotocommunity.com/brettwurzeln-des-kapokbaums-ceiba-pentandra-fc243ceb-d5c2-4574-b068-abd0d3667998.jpg?height=1080' }
        ],
      };
    },
    computed: {
      duplicatedItems() {
        return [...this.items, ...this.items, ...this.items].map((item, index) => ({ ...item, index }));
      }
    },
    watch: {
      currentIndex(newIndex) {
        this.centerContainer(newIndex);
      }
    },
    methods: {
      isCenterContainer(index) {
        const gallery = this.$refs.gallery;
        if (!gallery) {
          return false;
        }
        const containerCount = this.duplicatedItems.length;
        const containerWidth = gallery.scrollWidth / containerCount;
        const scrollPosition = gallery.scrollLeft + gallery.clientWidth / 2;
        const containerIndex = Math.floor(scrollPosition / containerWidth);
        return index === containerIndex;
      },
      centerContainer(n) {
        const gallery = this.$refs.gallery;
        const containerCount = this.duplicatedItems.length;
        const containerWidth = gallery.scrollWidth / containerCount;
        const galleryWidth = gallery.clientWidth;
        const scrollPosition = containerWidth * (n + this.items.length - 1) - (galleryWidth - containerWidth) / 2;
        gallery.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        this.$emit('containerClick', n);
      }
    },
    mounted() {
      this.$nextTick(() => {
        const gallery = this.$refs.gallery;
        const containerCount = this.duplicatedItems.length;
        const containerWidth = gallery.scrollWidth / containerCount;
        const galleryWidth = gallery.clientWidth;
        const centerItemIndex = 6; // Index du 6ème élément du premier ensemble
        const scrollPosition = containerWidth * (centerItemIndex + this.items.length - 1) - (galleryWidth - containerWidth) / 2;
        gallery.style.scrollBehavior = 'auto';
        gallery.scrollLeft = scrollPosition;
        gallery.style.scrollBehavior = 'smooth';
  
        // Re-check the centered container whenever the scroll position changes
        gallery.addEventListener('scroll', () => {
          this.$forceUpdate();
        });
      });
    }
  }
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    height: 70vh;
    cursor: pointer;
  }
  
  .container {
  flex: 0 0 30%;
  height: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0.4;
  transition: opacity 0.5s, transform 0.5s;
  transform: rotate(-1deg) scale(0.95);
}

.container.center {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

  
  .container img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }

  .traffic-lights {
  position: absolute;
  width: 100%;
  height: 100%;
}

.traffic-lights > * {
  position: absolute;
}
  
  @media (max-width: 600px) {
    .gallery {
      height: 70%;
      cursor: pointer;
    }
    
    .container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

    .container {
      flex: 0 0 60%;
      height: 100%;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000000;
    }
  }
  </style>
  