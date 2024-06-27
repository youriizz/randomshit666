<template>
   <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['scroll-right']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
  <div class="container-window">
    <div v-if="isMobile">
      <Carousel :items-to-show="1.1" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item">
            <CardComponent 
              :title="slide.title" 
              :image="slide.image"
              :author="slide.author"
              :date="slide.date"
              :price="slide.price"
              :location="slide.location"
              :format="slide.format"
              :technique="slide.technique"
              :highlightAuthor="slide.highlightAuthor"
              :highlightDate="slide.highlightDate"
              :highlightPrice="slide.highlightPrice"
              :highlightLocation="slide.highlightLocation"
              :highlightFormat="slide.highlightFormat"
              :highlightTechnique="slide.highlightTechnique"
              :highlightTitle="slide.highlightTitle"
              :isTrafficLight="slide.isTrafficLight"
            />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div v-else>
      <Carousel :items-to-show="1.5" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item">
            <CardComponent 
              :title="slide.title" 
              :image="slide.image"
              :author="slide.author"
              :date="slide.date"
              :price="slide.price"
              :location="slide.location"
              :format="slide.format"
              :technique="slide.technique"
              :content="slide.content"
              :highlightAuthor="slide.highlightAuthor"
              :highlightDate="slide.highlightDate"
              :highlightPrice="slide.highlightPrice"
              :highlightLocation="slide.highlightLocation"
              :highlightFormat="slide.highlightFormat"
              :highlightTechnique="slide.highlightTechnique"
              :highlightTitle="slide.highlightTitle"
              :isTrafficLight="slide.isTrafficLight"
            />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
   </div>
</template>


<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import CardComponent from './CardComponent.vue'
import Introduction from '../GestureIndications/Introduction.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
    CardComponent,
    Introduction
  },
  data() {
    return {
      showIntroduction: true,
      title: 'Is This Art?',
      description: 'Duration : 30 Seconds',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      slides: [
        { 
          id: 1, 
          title: "Les Demoiselles d'Avignon", 
          image: 'https://uploads1.wikiart.org/images/pablo-picasso/the-girls-of-avignon-1907.jpg',
          author: 'Pablo Picasso',
          date: '1907',
          price: '$1.200.000.000', 
          location: 'New York, MoMA',
          format: '243.9 cm x 233.7 cm', 
          technique: 'Oil on Paint',
        },
        { 
          id: 2, 
          title: "After Walker Evans", 
          image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/267214/610087/restricted',
          author: '???',
          date: '1981',
          price: '$962.000', 
          location: 'The Metropolitan Museum of Art, New York',
          format: '25,3 x 20,2 cm', 
          technique: 'Gelatine Silver Paint',
          highlightAuthor: true,
        },
       
        { 
          id: 3, 
          title: "One and Three Chairs", 
          image: 'https://sylviasippl.wordpress.com/wp-content/uploads/2015/04/one-and-three-chairs.jpg?w=1650&h=1170&crop=1',
          author: 'Joseph Kosuth',
          date: '???',
          price: '$500.000 to $1.500.000', 
          location: 'New York, MoMA',
          format: '82 x 37.8 x 53 cm, 91.5 x 61.1 cm, 61 x 76.2 cm', 
          technique: 'Wood folding chair, mounted photograph of a chair, and mounted definition of "chair"',
          highlightDate: true,
        },
        { 
          id: 3, 
          title: "Ever Is Over All", 
          image: 'https://publicdelivery.org/wp-content/uploads/2019/07/Pipilotti-Rist-Ever-Is-Over-All-1997-audio-video-installation-Glenstone-Museum-2019.jpg',
          author: 'Pipilotti Rist',
          date: '1997',
          price: '$200,000 to $600,000', 
          location: '???',
          format: "Video installation", 
          technique: "Two-channel video projection",
          highlightLocation: true,
    
        },
        { 
          id: 4, 
          title: "The Artist is Present", 
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Marina_Abramović%2C_The_Artist_is_Present%2C_2010.jpg',
          author: 'Marina Abramović',
          date: 'March 14 - May 31, 2010',
          price: '???', 
          location: 'New York, MoMA',
          format: 'Performance', 
          technique: '???',
          highlightPrice: true,
          highlightTechnique: true,
        },
        { 
          id: 5, 
          title: "Zone of immaterial pictorial sensibility", 
          image: 'https://www.yvesklein.com/files/picture_file_2503.jpg',
          author: 'Yves Klein',
          date: '1959 - 1962',
          price: 'An amount of gold', 
          location: '???',
          format: '???', 
          technique: '???',
          highlightLocation: true,
          highlightFormat: true,
          highlightTechnique: true,
        },
        { 
          id: 6, 
          title: '????????????', 
          image: '/IsThisArt/logo.svg',
          author: '????????????',
          date: '????????????',
          price: '????????????',
          location: '????????????',
          format: '????????????',
          technique: '????????????',
          highlightAuthor: true,
          highlightDate: true,
          highlightPrice: true,
          highlightLocation: true,
          highlightFormat: true,
          highlightTechnique: true,
          highlightTitle: true,
        },
        { 
          id: 3, 
          isTrafficLight: true
        },
        // Ajoutez d'autres slides ici
      ],
      isMobile: false
    }
  },
  mounted() {
    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile)
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768
    }
  }
})
</script>

<style scoped>


.container-window {
  position: relative;
  margin: 0;
  padding: 0;
  background-color: rgb(208, 208, 208);
  height: 100%;
}
.carousel__item {
  position: relative;
  width: 150vh;
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3vw;
  overflow: hidden;
}

@media (max-width: 768px) {
  .carousel__item {
    width: 100vh;
    height: 88vh;
  }
}
</style>
