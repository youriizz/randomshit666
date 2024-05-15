<template>
    <img src="@/assets/ILoveGaza/animation1rot.gif">
    
    <div>wesh la tone</div>
    <div class="gallery">
      <Tshirt2
        v-for="(image, index) in images"
        :key="index"
        :image="image"
      />
    </div>
  </template>
  
  <script>
  import Tshirt2 from './Tshirt2.vue';
  import image1 from '@/assets/ILoveGaza/animation1rot.gif';
  
  export default {
    components: {
      Tshirt2
    },
    data() {
    return {
      images: [
        image1,
        'https://claydies.dk/wp-content/uploads/shit-4-diagonal-1-800x600.jpg',
        'https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1643338374594-WVJKK80W6SB9BZK86I5F/HelloLight_Mac.png?format=1500w&content-type=image%2Fpng'
      ]
    };
  }

  }
  </script>
  
  <style>
  .gallery {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }
  </style>
  