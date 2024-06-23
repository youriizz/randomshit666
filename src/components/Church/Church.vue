<template>
  <div ref="scrollContainer" class="scroll-container">
    <Heaven ref="heaven" />
    <Purgatory ref="purgatory" />
    <Hell ref="hell" />
  </div>
</template>

<script>
import Heaven from './Heaven.vue';
import Purgatory from './Purgatory.vue';
import Hell from './Hell.vue';

export default {
  name: 'Church',
  components: {
    Heaven,
    Purgatory,
    Hell,
  },
  mounted() {
    this.scrollToPurgatory();
  },
  beforeUnmount() {
    this.stopAudios();
  },
  methods: {
    scrollToPurgatory() {
      this.$nextTick(() => {
        const container = this.$refs.scrollContainer;
        const purgatory = this.$refs.purgatory.$el;

        console.log('Container height:', container.scrollHeight);
        console.log('Window height:', window.innerHeight);
        console.log('Purgatory offsetTop:', purgatory.offsetTop);

        // Reset scroll position to ensure clean state
        container.scrollTop = 0;

        // Disable smooth scrolling for the initial scroll
        container.style.scrollBehavior = 'auto';

        // Use a timeout to ensure the DOM is ready
        setTimeout(() => {
          container.scrollTop = purgatory.offsetTop;
          console.log('Scroll position after adjustment:', container.scrollTop);

          // Re-enable smooth scrolling
          container.style.scrollBehavior = 'smooth';
        }, 0);
      });
    },
    stopAudios() {
      if (this.$refs.purgatory) {
        this.$refs.purgatory.stopAudio();
      }
    }
  },
};
</script>



<style scoped>
.scroll-container {
  position: absolute;
  height: 100vh; /* Make the container height 100vh to fit the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
  scroll-behavior: smooth; /* Default to smooth scrolling */
  overflow-x: hidden;
}


</style>
