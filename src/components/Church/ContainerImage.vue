<template>
    <div :style="containerStyle" class="container-image">
      <img v-if="!isMobile || !hasMobileSrc" :src="src" :alt="alt" class="default-image" />
      <img v-if="isMobile && hasMobileSrc" :src="mobileSrc" :alt="alt" class="mobile-image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: String,
      mobileSrc: String,  // Ajout du prop pour l'image mobile
      alt: String,
      height: Number,
      altHeight: Number,  // Ajout du prop pour la hauteur alternative
      additionalStyles: Object
    },
    data() {
      return {
        isMobile: false
      };
    },
    computed: {
      containerStyle() {
        return {
          height: this.isMobile && this.altHeight ? this.altHeight + 'vh' : this.height + 'vh',
          ...this.additionalStyles
        };
      },
      hasMobileSrc() {
        return !!this.mobileSrc;
      }
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth < 1024;
      }
    }
  }
  </script>
  
  <style scoped>
  .container-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    background-color: rgb(255, 255, 255);
  }
  
  .default-image {
    display: block;
    object-fit: contain;
    width: 100%;
    
  }
  
  .mobile-image {
    display: none;
    object-fit: contain;
    width: 100%;
  }
  
  /* Afficher l'image mobile et masquer l'image par défaut en dessous de 1024 pixels si mobileSrc est spécifié */
  @media (max-width: 1024px) {
    .default-image.with-mobile {
      display: none;
    }
    .mobile-image {
      display: block;
    }
  }
  </style>
  