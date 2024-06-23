<template>
  <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['touch', 'scroll-right']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
    
    <div class="gallery" v-dragscroll @click="handleGlobalClick">
      <ILoveGazaDynamicTshirt v-if="tshirts[0]" :contents="tshirts[0].contents" :clickCount="clickCount"
        @clicked="handleClick(0)" class="gallery-item" />
      <ILoveGazaStaticTshirts v-for="(tshirt, index) in tshirts.slice(1, -1)" :key="tshirt.id" :contents="tshirt.contents"
        :class="{ 'is-hidden': !showGallery }" class="gallery-item" @clicked="handleClick(index + 1)">
        <img :src="tshirt.contents[0]" alt="T-shirt image" />
      </ILoveGazaStaticTshirts>
      <div v-if="clickCount >= 6" class="gallery-item centered">
        <TrafficLights />
      </div>
    </div>
  </div>
</template>

<script>
import ILoveGazaDynamicTshirt from './ILoveGazaDynamicTshirts.vue';
import ILoveGazaStaticTshirts from './ILoveGazaStaticTshirts.vue';
import TrafficLights from '../TrafficLight.vue';
import Introduction from '../GestureIndications/Introduction.vue';
import image1 from '@/assets/ILoveGaza/I.png';
import image2 from '@/assets/ILoveGaza/heart.png';
import image3 from '@/assets/ILoveGaza/Gaza.png';
import image4 from '@/assets/ILoveGaza/TshirtWhite.png';
import image5 from '@/assets/ILoveGaza/recycle5.png';
import image6 from '@/assets/ILoveGaza/stopwar6.png';
import image7 from '@/assets/ILoveGaza/green7.png';
import image8 from '@/assets/ILoveGaza/queer8.png';
import image9 from '@/assets/ILoveGaza/ocean9.png';
import image10 from '@/assets/ILoveGaza/fastfashion10.png';
import image11 from '@/assets/ILoveGaza/capitalism11.png';
import image12 from '@/assets/ILoveGaza/capitalism12.png';

export default {
  components: {
    ILoveGazaDynamicTshirt,
    ILoveGazaStaticTshirts,
    TrafficLights, 
    Introduction
  },
  data() {
    return {
      showIntroduction: true,
      title: 'I love',
      description: 'Duration : 30 Seconds',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      tshirts: [
        {
          id: 0,
          contents: [
            image1,
            image2,
            image3,
            image4,
            "25$",
            ''
          ]
        },
        {
          id: 1,
          contents: [image5, '15$']
        },
        {
          id: 2,
          contents: [image6, '35$|20$']
        },
        {
          id: 3,
          contents: [image7, '25$']
        },
        {
          id: 4,
          contents: [image8, '15$']
        },
        {
          id: 5,
          contents: [image9, '45$']
        },
        {
          id: 6,
          contents: [image10, '9.99$']
        },
        {
          id: 7,
          contents: [image11, '299$']
        },
        {
          id: 8,
          contents: [image12, '75$|50$']
        },
        {
          id: 9,
          contents: []
        }
      ],
      currentIndex: 0,
      clickCount: 1, // Initialisation du clickCount à 1
      showGallery: false
    };
  },

  computed: {
    isGreyBackground() {
      return this.clickCount >= 5;
    }
  },

  methods: {
    handleStart() {
      console.log('Start button clicked, handling start');
      this.showIntroduction = false;
    },
    handleClick(index) {
      console.log(`handleClick called with index ${index}`);
      if (index === 0) {
        this.clickCount++;
        console.log(`clickCount is now ${this.clickCount}`);
        if (this.clickCount >= 6) {
          this.showGallery = true;
        }
      } else {
        this.currentIndex = index;
      }
    },
    handleGlobalClick(event) {
      console.log('Global click detected in gallery', event);
    }
  },

  mounted() {
    console.log('ILoveGaza.vue mounted');
  }
}
</script>

<style scoped>
.is-hidden {
  display: none;
}

img {
  pointer-events: none;
}

.gallery {
  display: flex;
  justify-content: flex-start;
  position: relative;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0;
  gap: 10vw;
  height: 100vh;
  align-items: center;
  min-width: 100vw;
}

.gallery-item {
  flex: 0 0 auto;
  border: 0px solid #000000;
  padding: 0vw;
  width: 60vw;
  height: 90vh;
  box-sizing: border-box;
  z-index: 1;
}

.gallery-item:first-child {
  margin-left: 20vw;
}

.gallery-item:nth-child(10) {
  margin-right: 20vw;
}

/* Styles to center the TrafficLights component */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .gallery {
    gap: 4vw;
  }

  .gallery-item {
    width: 80vw;
    height: 70vh;
  }

  .gallery-item:first-child {
    margin-left: 10vw;
  }

  .gallery-item:last-child {
    margin-right: 10vw;
  }
}
</style>
