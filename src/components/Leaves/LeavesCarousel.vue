<template>
    <div class="gallery" ref="gallery">
      <div
        class="container"
        v-for="(item, index) in duplicatedItems"
        :key="index"
        :class="{ center: isCenterContainer(index) }"
        @click="centerContainer(item.value)"
      >
        <img :src="item.src" alt="" v-if="item.src" />
        <span v-else>{{ item.value }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeavesCarousel',
    props: ['currentIndex'],
    data() {
      return {
        items: [
          { value: 1, src: 'https://delerued.vivaldi.net/wp-content/uploads/sites/15602/2020/06/Betula_pendula_Bouleau_fleurs_males.jpg' },
          { value: 2, src: 'https://www.ecofund.org/upload/images/cache/news/302/720x540/baobab-adansonia-digitata1.jpg' },
          { value: 3, src: 'https://www.ontario.ca/files/2022-09/mnrf-srb-tamarack-leaves-1200x1200-2022-09-14.jpg' },
          { value: 4, src: 'https://www.arboplus.ca/blog/wp-content/uploads/2021/09/feuilles-et-rameaux-tombants-du-saule-pleureur.jpg' },
          { value: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sequoia_sempervirens4.jpg/303px-Sequoia_sempervirens4.jpg' },
          { value: 6, src: 'https://cibercactus.com/wp-content/uploads/2019/07/espinas-pachycereus-pringlei-830x554.jpg' },
          { value: 7, src: 'https://inaturalist-open-data.s3.amazonaws.com/photos/97657756/large.jpg' },
          { value: 8, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/2012-10-17_P1010243_Lombardy_Poplar_foliage_along_Clubine_Road_in_Lamoille_Valley.JPG/1920px-2012-10-17_P1010243_Lombardy_Poplar_foliage_along_Clubine_Road_in_Lamoille_Valley.JPG' },
          { value: 9, src: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Trachy_juvenile_feuillage_%281168%29.jpg' },
          { value: 10, src: 'https://www.genialvegetal.net/sites/genialvegetal.net/IMG/jpg/pommier_feuille.jpg' },
          { value: 11, src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Ceiba_pentandra_40zz.jpg' }
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
    height: 30vh;
    cursor: pointer;
  }
  .container {
  flex: 0 0 15%;
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
  transform: rotate(2deg) scale(0.9);
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

@media (max-width: 600px) {
  .gallery {
    height: 30%;
    cursor: pointer;
  }
  
  .container {
    flex: 0 0 40%;
    height: 100%;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
  }
}



  </style>
  